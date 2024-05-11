import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const SymptomsLayout = () => {
  return (
    <>
     <Stack>
      <Stack.Screen name="symptoms" options={{ headerShown:
        true }}/>  
     </Stack>
    </>
  )
}

export default SymptomsLayout
