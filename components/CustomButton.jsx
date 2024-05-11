import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-black rounded-xl justify-center min-h-[60px] min-w-full items-center  ${isLoading ? 'opacity-50': ''} `}
      disabled={isLoading}
      >
      <Text className={`text-white font-psemibold text-lg ${textStyles}`}>
        {title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;