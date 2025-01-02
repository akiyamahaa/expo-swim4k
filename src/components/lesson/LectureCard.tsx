import { Text, View } from 'react-native'
import React from 'react'

type Props = {}

const LectureCard = (props: Props) => {
  return (
    <View className="bg-home-card p-3 rounded-xl gap-1">
      <View className="flex-row items-center justify-between">
        <Text className="text-white text-base font-semibold" numberOfLines={1}>
          Cơ bản
        </Text>
        <Text className="text-xs text-text-default" numberOfLines={1}>
          7 phút
        </Text>
      </View>
      <Text className="text-xs text-text-default">
        Biết 5 bài tập cần thiết cho người mới bắt đầu
      </Text>
    </View>
  )
}

export default LectureCard
