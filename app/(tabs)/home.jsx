import { View, Text, Image, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { images } from '../../constants'
import CustomButton from '../../components/CustomButton'

const Home = () => {
  return (
        <SafeAreaView className="bg-cadetblue h-full w-full">
          <ScrollView contentContainerStyle={{height: '100%'}}>
              <View className="my-6 px-4 space-y-6 mb-5">
                <View className="justify-between items-start
                 flex-row mb-6">
                   <View className="pb-20 mb-2">
                    <Text className="font-pmedium text-sm">
                      Welcome to 
                    </Text>
                    <Text className="text-2xl font-psemibold">
                     Featherly Care
                    </Text>
                    <Image
                      source={images.chickenhome} 
                      className="w-80 h-80 mt-20 rounded-2xl ml-5" 
                      // resizeMode='contain'
                    />
                    </View> 
                    <View className="mt-1 mr-2">
                    </View>
                 </View>
                 <CustomButton
                   title="Go to symptoms"
                   handlePress={() => router.push('/symptoms')}
                   containerStyles="items-center justify-center"
                   />
              </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' 
            style='light'/>  
        </SafeAreaView>
    )
}

export default Home