import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Video } from 'iconsax-react-native'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'

type Props = {}

const HomeCard = (props: Props) => {
  const router = useRouter()

  const onPracticeList = () => {
    router.push(ERouteTable.PRACTICE_LIST)
  }
  return (
    <TouchableOpacity onPress={onPracticeList}>
      <View className="w-full rounded-2xl bg-home-card px-4 py-3">
        <View className="w-full">
          <Text className="text-2xl font-bold text-white" numberOfLines={2}>
            DÀNH CHO NGƯỜI MỚI
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="h-[0.5px] flex-1 bg-home-ruler" />
          <Video size="32" color="#fff" variant="Broken" />
        </View>
        <View>
          <Text className="text-xs text-white">128 Video</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default HomeCard
