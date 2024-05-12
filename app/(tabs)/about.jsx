import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const About = () => {
  return (
    <SafeAreaView className="bg-cadetblue h-full w-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="flex-1">
          <Text className="text-center mb-5 text-2xl font-pbold pt-20">About</Text>
            <View className="flex-1 justify-center mb-36">
              <Text className="pt-7 pb-3 text-xl font-pregular text-center px-5">
                The application is used to classify the disease of a poultry
                depending on its symptoms. The user can use the application to 
                check what type of disease their poultry has based on the 
                symptoms it is showing. It also has a description of the disease 
                that their poultry might have and a link directed to a web page 
                to learn more about the disease and what are the measures to take.
              </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default About