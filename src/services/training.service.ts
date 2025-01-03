import { TrainingProgram, TrainingChapter } from '@/models/training.model'
import { createDAO, ETableName, Reponse } from './dao.service'
import { Lesson } from '@/models/lessons.model'

// Fetch all Training Programs
export async function fetchAll(): Promise<Reponse<TrainingProgram[]>> {
  const dao = createDAO(ETableName.TRAINING_PROGRAMS)
  const queryResult = await dao.select<string, TrainingProgram>()

  if (queryResult.error || !queryResult.data) {
    return {
      error: queryResult.error.message,
      data: [],
    }
  }

  return {
    data: queryResult.data,
  }
}

// Fetch all detail programs
export type ProgramChapterItem = {
  chapter: TrainingChapter
  lessons: Lesson[]
}

export async function show(id: number) {
  const programsDAO = createDAO(ETableName.TRAINING_PROGRAMS)
  const chaptersToLessonsDAO = createDAO(ETableName.CHAPTERS_TO_LESSONS)

  const [programsResult, chapterResult] = await Promise.all([
    programsDAO.select<string, TrainingProgram>().eq('id', id).single(),
    chaptersToLessonsDAO.select<string, { chapters: TrainingChapter; lessons: Lesson }>(
      `chapters: training_chapters (*), lessons: lessons(*)`,
    ),
  ])

  if (programsResult.error || !programsResult.data) {
    return {
      error: programsResult.error.message,
      data: [],
    }
  }

  if (chapterResult.error || !chapterResult.data) {
    return {
      error: chapterResult.error.message,
      data: [],
    }
  }

  const chaptersMap: { [chapterId: number]: ProgramChapterItem } = {}
  chapterResult.data?.forEach((data) => {
    const chapterId = data.chapters.id
    if (!chaptersMap[chapterId]) {
      chaptersMap[chapterId] = {
        chapter: data.chapters,
        lessons: [data.lessons],
      }
    } else {
      chaptersMap[chapterId].lessons.push(data.lessons)
    }
  })

  return {
    data: {
      programs: programsResult.data,
      chapters: Object.values(chaptersMap),
    },
  }
}
