import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const FAQ = () => {
  return (
    <SafeAreaView className="bg-cadetblue h-full w-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className='flex-1'>
          <Text className="text-center mb-5 text-2xl font-pbold pt-20">FAQ</Text>
            <View className="flex-1 justify-center mb-36">
              <Text className="ml-5 pb-3 text-lg font-psemibold">
              1. “How do we use the app?”
              </Text>
              <Text className="ml-2 mb-30 text-xs font-pregular pb-5">
              Once you see the Start Up Page, just press the button to proceed to
              the Homepage where you can see button routing to the symptoms page. 
              Also at the homepage, you can see the different tabs at the bottom 
              consists of Home, FAQ, and About.
              </Text>
              <Text className="ml-5 pb-3 text-lg font-psemibold">
              2. “Ok, What to do next?”
              </Text>
              <Text className="ml-2 mb-30 text-xs font-pregular pb-5">
              The symptoms page is where you check your poultry on 
              what kind of disease they have according to the symptoms 
              they show, this may vary every symptom. The page can be scrolled 
              horizontally to view different kinds of symptoms and what kind of disease 
              it is associated with.
              </Text>
              <Text className="ml-5 pb-3 text-lg font-psemibold tracking-tighter">
              3. “I want to know more about the diseases and symptoms, where do I go?”
              </Text>
              <Text className="ml-2 mb-30 text-xs font-pregular">
              To know more about the symptoms and diseases, just tap the image with symptoms
              label and you will be redirected to the pages about the symptoms and diseases
              along with specific links regarding it.
              </Text>
            </View>
        </View> 
      </ScrollView>
      <StatusBar backgroundColor='#161622' 
      style='light'/>  
    </SafeAreaView>
  )
}

export default FAQ