import { View, Text, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { images } from '../../constants'

const Profile = () => {
  return (
    <SafeAreaView className="bg-cadetblue w-full h-full">
      <ScrollView>
        <View className="flex-1">
          <Text className="text-center mb-5 text-2xl font-pbold pt-20">Meet the Team</Text>  
            <View className="mb-36 items-center">
              <Image 
                source={images.felias}
                className="placeholder:items-center justify-center px-1" 
                resizeMode='contain'
             />
               <Text className="text-lg font-psemibold mt-2">
                 Felias, Alliah Shanne A.
               </Text>
               <Text className="text-base font-pmedium">
                qasafelias@tip.edu.ph
                </Text>
                <Text className="text-sm font-pregular mb-5">
                Project Manager 
                </Text>

                <Image 
                source={images.gil}
                className="placeholder:items-center justify-center px-1" 
                resizeMode='contain'
             />
               <Text className="text-lg font-psemibold mt-2">
                Gil, Ron Denzell D.
               </Text>
               <Text className="text-base font-pmedium">
                qrddpgil@tip.edu.ph
                </Text>
                <Text className="text-sm font-pregular mb-5">
                Full-Stack Developer
                </Text> 
                <Image 
                source={images.pilongo}
                className="placeholder:items-center justify-center px-1" 
                resizeMode='contain'
             />
               <Text className="text-lg font-psemibold mt-2">
                Pilongo, Elvin Jay L.
               </Text>
               <Text className="text-base font-pmedium">
                qejlpilongo@tip.edu.ph
                </Text>
                <Text className="text-sm font-pregular mb-5">
                UI/UX Designer
                </Text>  
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile