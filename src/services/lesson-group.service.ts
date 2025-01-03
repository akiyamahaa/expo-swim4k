import { supabase } from '@/lib/supabase'
import { LessonGroup } from '@/models/lessons.model'
import { createDAO, ETableName } from './dao.service'

// Fetch all LessonGroup
export type LessonGroupItem = LessonGroup & {
  nLesson?: number
}
export async function fetchAll() {
  const dao = createDAO(ETableName.LESSON_GROUPS)
  const queryResult = await dao.select<
    string,
    LessonGroup & { lessons: { lesson_group_id: number }[] }
  >('*, lessons!inner(lesson_group_id)')

  if (queryResult.error || !queryResult.data) {
    return {
      error: queryResult.error.message,
      data: [],
    }
  }

  return {
    data: queryResult.data.map((item) => ({
      id: item.id,
      title: item.title,
      nLessons: item.lessons.length,
    })),
  }
}
