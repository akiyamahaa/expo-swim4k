import { Image, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import Header from '@/components/Header'
import LectureCard from '@/components/lesson/LectureCard'

type Props = {}

const LessonDetail = (props: Props) => {
  return (
    <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      <SafeAreaView className={'pb-8'} style={{ paddingTop: StatusBar.currentHeight }}>
        <Header title="Dành cho người mới" hasBack />
        <View className="mt-4">
          <Image source={images.practice1} className="w-full h-64" />
        </View>
        <View className="px-4 gap-6 mt-6">
          {/*  */}
          <View className="gap-3">
            <Text className="text-xl text-primary-500 font-semibold">Bài tập bơi</Text>
            <Text className="text-sm text-text-default">
              Học tất cả các bài tập bơi cần thiết để thành thạo nghệ thuật bơi lội tại đây!
            </Text>
          </View>
          <View className="flex-row items-center gap-4">
            <Text className="text-white text-sm">
              5 <Text className="text-text-default"> Bài học</Text>
            </Text>
            <Text className="text-white text-sm">
              10 <Text className="text-text-default"> Chương</Text>
            </Text>
          </View>

          {/* List Lecture */}
          <View className="gap-4">
            <Text className="text-lg text-white font-semibold">Bài học 1</Text>
            <View className="gap-2">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <View key={item}>
                  <LectureCard />
                </View>
              ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default LessonDetail
