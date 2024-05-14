import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import {images} from '../../../constants'
import { AntDesign } from '@expo/vector-icons'

const diarrheaPage = () => {
  return (
    <SafeAreaView className="bg-cadetblue w-full h-full">
      <ScrollView>
        <View className="flex-1">
          <TouchableOpacity onPress={() => router.back()} className="ml-5 mt-5">
            <AntDesign name="arrowleft" size={24} color="black"/>
          </TouchableOpacity>
          <Text className="text-center font-pextrabold text-3xl pt-20 mb-5">DIARRHEA</Text>
          <View>
              <Text className="text-center font-pbold text-2xl underline">BURSAL DISEASE</Text>
                <View>
                  <Text className="text-center font-pregular text-lg mt-3 mb-5 mx-2">  
                  Bursal disease, also known as Infectious Bursal Disease (IBD) or Gumboro disease, 
                  is a highly contagious viral infection in chickens caused by the Infectious Bursal Disease Virus (IBDV).
                  It primarily affects the bursa of Fabricius, an important organ in the immune system of birds,
                  leading to immunosuppression and increased susceptibility to other infections. The disease can
                  cause significant economic losses in the poultry industry due to high mortality rates
                  and decreased productivity.                
                  </Text>
                  <View className="items-center justify-center">
                    <Image 
                      source={images.bursal}
                      className="items-center justify-center w-80 h-80 mb-10"
                      resizeMode='contain'
                    />
                    <Link href="https://www.msdvetmanual.com/poultry/infectious-bursal-disease/infectious-bursal-disease-in-poultry" 
                    className='text-lg underline text-black mb-10'>Click here for more info</Link>
                    </View>
                </View>
            </View>
            <View>
              <Text className="text-center font-pbold text-2xl underline mb-5">NEW CASTLE DISEASE</Text>
                <View>
                  <Text className="text-center font-pregular text-lg mt-3 mb-5 mx-2">        
                    Newcastle disease is a highly contagious viral disease affecting birds, caused by
                    the Newcastle disease virus (NDV). It presents with a range of symptoms, including
                    respiratory distress, nervous system disorders, and reduced egg production, and can
                    result in high mortality rates, especially in unvaccinated flocks. The disease poses
                    significant economic threats to the poultry industry worldwide, and control measures
                    include vaccination and strict biosecurity practices.          
                  </Text>
                  <View className="items-center justify-center">
                    <Image 
                      source={images.newcastle}
                      className="items-center justify-center w-80 h-80"
                      // resizeMode='contain'
                    />
                    <Link href="https://www.agriculture.gov.au/biosecurity-trade/policy/australia/naqs/naqs-target-lists/newcastle#:~:text=Newcastle%20disease%20only%20affects%20birds,such%20as%20paralysis%20and%20convulsions" 
                    className='text-lg underline text-black mb-10 mt-6'>Click here for more info</Link>
                    </View>
                </View>
            </View>
            <View>
              <Text className="text-center font-pbold text-2xl underline mb-5">AVIAN SALMONELLOSIS</Text>
                <View>
                  <Text className="text-center font-pregular text-lg mt-3 mb-5 mx-2">  
                    Avian salmonellosis is a bacterial infection in birds caused by various Salmonella species,
                    with Salmonella pullorum and Salmonella gallinarum being the most common in poultry. It can
                    lead to a range of symptoms, including diarrhea, weakness, and high mortality rates, particularly
                    in young chicks. This disease is significant not only for its impact on poultry health and productivity
                    but also for its potential to transmit to humans through contaminated food products.              
                  </Text>
                  <View className="items-center justify-center">
                    <Image 
                      source={images.salmonellosis}
                      className="items-center justify-center w-80 h-80"
                      // resizeMode='contain'
                    />
                    <Link href="https://www.veterinariadigital.com/en/articulos/avian-salmonellosis/" 
                    className='text-lg underline text-black mb-10 mt-6'>Click here for more info</Link>
                    </View>
                </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default diarrheaPage