import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import LessonCard from '@/components/lesson/LessonCard'

const Lesson = () => {
  return (
    <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      <SafeAreaView className={'pb-8'} style={{ paddingTop: StatusBar.currentHeight }}>
        <Header title="Giáo án tập luyện" />
        <View className="p-4 gap-4">
          <Text className="text-2xl text-primary-500 font-bold">TẤT CẢ GIÁO ÁN</Text>
          <View className="gap-6">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <View key={item}>
                <LessonCard />
              </View>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Lesson
