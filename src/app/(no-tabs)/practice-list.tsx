import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import PracticeCard from '@/components/home/PracticeCard'

type Props = {}

const PracticeList = (props: Props) => {
  return (
    <ScrollView className="flex-1 bg-background " showsVerticalScrollIndicator={false}>
      <SafeAreaView className={'px-4 pb-8'} style={{ paddingTop: StatusBar.currentHeight }}>
        <Header title="Dành cho người mới" hasBack />
        <View className="mt-5 gap-6">
          <PracticeCard />
          {[1, 2, 3, 4, 5].map((item) => (
            <View key={item}>
              <PracticeCard />
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default PracticeList
