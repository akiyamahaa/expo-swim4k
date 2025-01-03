import { supabase } from '@/lib/supabase'
import { Lesson } from '@/models/lessons.model'
import { createDAO, ETableName, Response } from './dao.service'

// TODO: Fetch all Lesson by Lesson Group
export async function fetchByGroup(lessonGroupId: number): Promise<Response<Lesson[]>> {
  const dao = createDAO(ETableName.LESSONS)
  const queryResult = await dao.select<string, Lesson>('*').eq('lesson_group_id', lessonGroupId)

  if (queryResult.error || !queryResult.data) {
    return {
      error: queryResult.error.message,
      data: [],
    }
  }

  console.log(JSON.stringify(queryResult.data, null, 2))

  return {
    data: queryResult.data,
  }
}

// TODO: Fetch detail Lesson
export async function show(id: number): Promise<Response<Lesson>> {
  const dao = createDAO(ETableName.LESSONS)
  const queryResult = await dao.select<string, Lesson>('*').eq('id', id).single()

  if (queryResult.error || !queryResult.data) {
    return {
      error: queryResult.error.message,
      data: null,
    }
  }

  console.log(JSON.stringify(queryResult.data, null, 2))

  return {
    data: queryResult.data,
  }
}
