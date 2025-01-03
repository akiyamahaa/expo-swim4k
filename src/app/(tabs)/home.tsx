import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import HomeCard from '@/components/home/HomeCard'

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      <Image source={images.homeBanner} className="w-full h-[500px] rounded-b-3xl object-cover" />
      <View className="px-4 py-6 gap-6">
        <Text className="text-2xl font-bold text-white uppercase">Tập luyện</Text>
        <View className="flex-row flex-wrap -mx-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <View key={item} className="w-1/2 px-2 mb-2">
              <HomeCard />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default Home
