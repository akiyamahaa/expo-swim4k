import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants'
import AppInput from '@/components/AppInput'
import Checkbox from 'expo-checkbox'
import AppButton from '@/components/AppButton'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'

const SignUp = () => {
  const router = useRouter()
  const [isChecked, setChecked] = useState(false)

  const onSignUp = () => {
    router.push(ERouteTable.VERIFY_ACCOUNT)
  }
  const onSignInScreen = () => {
    router.push(ERouteTable.SIGIN_IN)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1 bg-background justify-between items-center px-4 py-8 gap-4">
          <View className="gap-20 w-full">
            {/* Logo */}
            <View className="items-center">
              <Image source={images.logo} className="max-w-52 max-h-36" />
            </View>
            {/* Form */}
            <View className="gap-8">
              {/* Title */}
              <View className="items-center gap-2">
                <Text className="text-3xl font-bold text-primary-500">Đăng Ký</Text>
                <Text className="text-sm text-textColor">Đăng ký tài khoản của bạn</Text>
              </View>
              {/* Input Field */}
              <View className="gap-3 w-full">
                <AppInput placeholder="Tên" />
                <AppInput placeholder="Email" />
                <AppInput placeholder="Mật khẩu" isPassword={true} />
                <AppInput placeholder="Nhập lại mật khẩu" isPassword={true} />
              </View>
              {/* Button */}
              <AppButton title="Đăng ký" onPress={onSignUp} />
            </View>
          </View>
          {/* Register */}
          <View className="flex-row items-center gap-2">
            <Text className="text-sm text-textColor">Bạn đã có tài khoản?</Text>
            <TouchableOpacity onPress={onSignInScreen}>
              <Text className="text-base font-semibold text-primary-500">Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignUp
