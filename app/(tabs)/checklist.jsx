import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const checklist = () => {
  return (
    <SafeAreaView className="bg-cadetblue h-full w-full">
      <ScrollView>
        <View className="flex-1">
          <Text className="text-center mb-5 text-2xl font-pbold pt-20">Checklist</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default checklist