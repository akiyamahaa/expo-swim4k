import { Image, StatusBar, View } from 'react-native'
import { useEffect } from 'react'
import { router } from 'expo-router'
import { images } from '@/constants'
import { ERouteTable } from '@/constants/route-table'
import { fetchAll } from '@/services/lesson-group.service'

export default function Root() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace(ERouteTable.SIGIN_IN)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    fetchAll()
  }, [])

  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar translucent backgroundColor={'transparent'} barStyle="light-content" />
      <Image source={images.splash} className="w-full h-full" />
    </View>
  )
}
