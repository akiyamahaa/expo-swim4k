import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import Header from '@/components/Header'
import { Calculator, Repeat, Routing, Speedometer, Timer, User } from 'iconsax-react-native'

type Props = {}

const PracticeDetail = (props: Props) => {
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView className={'pb-8'} style={{ paddingTop: StatusBar.currentHeight }}>
        <Header title="Dành cho người mới" hasBack />
        <View className="mt-4">
          <Image source={images.practice1} className="w-full h-64" />
        </View>
        <View className="px-4 gap-6 mt-6">
          {/*  */}
          <View className="gap-3">
            <Text className="text-xl text-primary-500 font-semibold">
              Cách bơi ngửa cho người mới bắt đầu
            </Text>
            <View className="flex-row items-center flex-wrap -mx-2">
              {/* info-section */}
              <View className="flex-row items-center gap-2 w-1/3 mb-2 px-2">
                <Speedometer size="16" color="#fff" variant="Broken" />
                <Text className="text-white text-xs">Người mới</Text>
              </View>
              <View className="flex-row items-center gap-2 w-1/3 mb-2 px-2">
                <Repeat size="16" color="#fff" variant="Broken" />
                <Text className="text-white text-xs">10 lần</Text>
              </View>
              <View className="flex-row items-center gap-2 w-1/3 mb-2 px-2">
                <Timer size="16" color="#fff" variant="Broken" />
                <Text className="text-white text-xs">20 phút</Text>
              </View>
              <View className="flex-row items-center gap-2 w-1/3 mb-2 px-2">
                <User size="16" color="#fff" variant="Broken" />
                <Text className="text-white text-xs">U-6</Text>
              </View>
              <View className="flex-row items-center gap-2 w-1/3 mb-2 px-2">
                <Routing size="16" color="#fff" variant="Broken" />
                <Text className="text-white text-xs">30 m</Text>
              </View>
              <View className="flex-row items-center gap-2 w-1/3 mb-2 px-2">
                <Calculator size="16" color="#fff" variant="Broken" />
                <Text className="text-white text-xs">17 kcal</Text>
              </View>
            </View>
          </View>
          {/*  */}
          <View className="gap-2">
            <Text className="text-xl text-white font-semibold">Cải thiện</Text>
            <View className="flex-row items-center flex-wrap">
              <View className="px-3 py-1 bg-home-card rounded-md mr-2">
                <Text className="text-sm text-white">Tăng chiều cao</Text>
              </View>
              <View className="px-3 py-1 bg-home-card rounded-md mr-2">
                <Text className="text-sm text-white">Đốt cháy calo</Text>
              </View>
              <View className="px-3 py-1 bg-home-card rounded-md mr-2">
                <Text className="text-sm text-white">Săn chắc vòng 2</Text>
              </View>
            </View>
          </View>
          {/*  */}
          <View className="gap-2">
            <Text className="text-xl text-white font-semibold">Chuẩn bị</Text>
            <View className="gap-1">
              <Text className="text-sm text-white">1. Đồ bơi</Text>
              <Text className="text-sm text-white">2. Kính bơi</Text>
              <Text className="text-sm text-white">3. Áo phông</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default PracticeDetail
