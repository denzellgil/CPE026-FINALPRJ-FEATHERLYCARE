import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import {images} from '../../../constants'
import { AntDesign } from '@expo/vector-icons'

const ataxiaPage = () => {
  return (
    <SafeAreaView className="bg-cadetblue w-full h-full">
      <ScrollView>
        <View className="flex-1">
          <TouchableOpacity onPress={() => router.back()} className="ml-5 mt-5">
            <AntDesign name="arrowleft" size={24} color="black"/>
          </TouchableOpacity>
          <Text className="text-center font-pextrabold text-3xl pt-20 mb-5">ATAXIA</Text>
            <View>
              <Text className="text-center font-pbold text-2xl underline">AVIAN ENCEPHALOMYELITIS</Text>
                <View>
                  <Text className="text-center font-pregular text-lg mt-3 mb-2 mx-2">  
                  Avian encephalomyelitis is a viral disease affecting poultry, 
                  characterized by neurological symptoms such as tremors and ataxia, primarily in young chicks. 
                  It is caused by an avian picornavirus and can lead to significant economic losses in the poultry
                  industry due to decreased egg production and high morbidity.                  
                  </Text>
                  <View className="items-center justify-center">
                    <Image 
                      source={images.encephalomyelitis}
                      className="items-center justify-center w-80 h-80"
                      resizeMode='contain'
                    />
                    <Link href="https://www.msdvetmanual.com/poultry/avian-encephalomyelitis/avian-encephalomyelitis" 
                    className='text-lg underline text-black mb-10'>Click here for more info</Link>
                    </View>
                </View>
            </View>
            <View>
              <Text className="text-center font-pbold text-2xl underline mb-5">MAREK'S DISEASE</Text>
                <View>
                  <Text className="text-center font-pregular text-lg mt-3 mb-5 mx-2">  
                  Marek's disease is a highly contagious viral disease in chickens, caused by the Marek's disease virus (MDV),
                  a type of herpesvirus. It manifests in various forms, including tumors, paralysis, and immunosuppression, 
                  leading to significant morbidity and mortality in affected flocks. Vaccination is the primary method of control, 
                  but the disease remains a major concern in poultry farming.                
                  </Text>
                  <View className="items-center justify-center">
                    <Image 
                      source={images.mareks}
                      className="items-center justify-center w-80 h-80"
                      // resizeMode='contain'
                    />
                    <Link href="https://www.msdvetmanual.com/poultry/neoplasms-in-poultry/marek-s-disease-in-poultry?autoredirectid=23789" 
                    className='text-lg underline text-black mb-10 mt-6'>Click here for more info</Link>
                    </View>
                </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ataxiaPage