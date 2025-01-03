import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import Header from '@/components/Header'
import { images } from '@/constants'
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'iconsax-react-native'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'

type Props = {}

const EditProfile = (props: Props) => {
  const [image, setImage] = useState<string | null>(null)

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.2,
    })
    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1 bg-background">
          <SafeAreaView className="flex-1" style={{ paddingTop: StatusBar.currentHeight }}>
            <View className="px-4 gap-4 flex-1 pb-8">
              <Header title="Thông tin" hasBack />
              <View className="flex-1 justify-between">
                <View>
                  {/* Avatar */}
                  <View className="flex flex-col m-auto items-center">
                    <Image
                      source={image ? { uri: image } : images.avatar}
                      className="w-[108px] h-[108px] rounded-full"
                      resizeMode="cover"
                    />
                    <TouchableOpacity className="absolute bottom-0 right-0" onPress={pickImage}>
                      <View className="p-2 bg-home-card rounded-full">
                        <Camera size={20} color="#71717A" variant="Broken" />
                      </View>
                    </TouchableOpacity>
                  </View>
                  {/* Group Input */}
                  <View className="gap-4 mt-10">
                    <AppInput placeholder="họ và tên" value="Nguyễn Văn A" />
                    <AppInput placeholder="Email" />
                    <AppInput placeholder="Số điện thoại" />
                  </View>
                </View>
                <AppButton title="Lưu" />
              </View>
            </View>
          </SafeAreaView>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default EditProfile
