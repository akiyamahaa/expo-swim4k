import { env } from '@/env-config'
import { supabase } from '@/lib/supabase'
import { Alert } from 'react-native'

export interface UserProfile {
  id: string
  name: string
  email: string
  address?: string | null
  phone?: string | null
  bio: string | null
  image: string | null
  created_at?: string | Date
  professor?: boolean
  active: boolean
}

export async function getUserData(userId: string) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('id', userId)
      .single<UserProfile>()
    if (error) {
      return { success: false, message: error.message }
    }
    return { success: true, data }
  } catch (error: any) {
    console.error(error)
    Alert.alert('getUserData error', JSON.stringify(error))
    return { success: false, message: error.message }
  }
}

export const getUserImage = (uri?: string | null) => {
  try {
    if (!uri) {
      return require('@/assets/images/defaultUser.jpeg')
    }

    if (uri.startsWith('file://')) {
      return { uri }
    }

    return { uri: `${env.SUPABASE_URL}/storage/v1/object/public/social_media/${uri}` }
  } catch (error: any) {
    console.error(error)
    return require('@/assets/images/defaultUser.jpeg')
  }
}

export interface UserProfileUpdate {
  name?: string
  email?: string
  address?: string
  phone?: string
  bio?: string
  image?: string
}

export async function updateUserData(userId: string, updateData: UserProfileUpdate) {
  try {
    const { data, error } = await supabase
      .from('users')
      .update(updateData)
      .eq('id', userId)
      .select()
      .single<UserProfile>()

    if (error) {
      return { success: false, message: error.message }
    }
    return { success: true, data }
  } catch (error: any) {
    console.error(error)
    return { success: false, message: error.message }
  }
}
