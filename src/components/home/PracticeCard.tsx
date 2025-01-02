import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { Speedometer } from 'iconsax-react-native'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'

type Props = {}

const PracticeCard = (props: Props) => {
  const router = useRouter()
  const onPracticeDetail = () => {
    router.push(ERouteTable.PRACTICE_DETAIL)
  }

  return (
    <TouchableOpacity onPress={onPracticeDetail}>
      <View className="w-full gap-3">
        <View className="rounded-2xl overflow-hidden w-full min-h-52">
          <ImageBackground
            source={images.practice1}
            className="flex-1 flex-row items-start justify-end p-3 object-cover"
          >
            <View className="px-2 rounded-sm blur-sm" style={{ backgroundColor: '#34383E80' }}>
              <Text className="text-xs text-white">01:16</Text>
            </View>
          </ImageBackground>
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-1">
            <Text className="text-white font-semibold text-base" numberOfLines={2}>
              Cách bơi ngửa cho người mới bắt đầu
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <Speedometer size="16" color="#71717A" variant="Broken" />
            <Text className="text-text-default text-xs" numberOfLines={1}>
              Người mới
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PracticeCard
