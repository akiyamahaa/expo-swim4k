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

const SignIn = () => {
  const router = useRouter()
  const [isChecked, setChecked] = useState(false)

  const onSignIn = () => {
    router.replace(ERouteTable.HOME)
  }

  const onSignUpScreen = () => {
    router.push(ERouteTable.SIGIN_UP)
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
                <Text className="text-3xl font-bold text-primary-500">Đăng nhập</Text>
                <Text className="text-sm text-textColor">Đăng nhập vào tài khoản của bạn</Text>
              </View>
              {/* Input Field */}
              <View className="gap-3 w-full">
                <AppInput placeholder="Email" />
                <AppInput placeholder="Mật khẩu" isPassword={true} />
                <View className="flex-row items-center justify-between mt-1">
                  <View className="flex-row items-center gap-2">
                    <Checkbox value={isChecked} onValueChange={setChecked} />
                    <Text className="text-sm text-textColor">Ghi nhớ đăng nhập</Text>
                  </View>
                  <TouchableOpacity>
                    <Text className="text-sm text-textLink" numberOfLines={1}>
                      Quên mật khẩu?
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* Button */}
              <AppButton title="Đăng nhập" onPress={onSignIn} />
            </View>
          </View>
          {/* Sign Up */}
          <View className="flex-row items-center gap-2">
            <Text className="text-sm text-textColor">Bạn chưa có tài khoản?</Text>
            <TouchableOpacity onPress={onSignUpScreen}>
              <Text className="text-base font-semibold text-primary-500">Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignIn
