import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import {images} from '../../../constants'
import { AntDesign } from '@expo/vector-icons'

const sneezingPage = () => {
  return (
    <SafeAreaView className="bg-cadetblue w-full h-full">
      <ScrollView>
      <View className="flex-1">
        <TouchableOpacity onPress={() => router.back()} className="ml-5 mt-5">
          <AntDesign name="arrowleft" size={24} color="black"/>
        </TouchableOpacity>
          <Text className="text-center font-pextrabold text-3xl pt-20 mb-5">SNEEZING</Text>
          <View>
              <Text className="text-center font-pbold text-2xl underline">AVIAN INFLUENZA</Text>
                <View>
                  <Text className="text-center font-pregular text-lg mt-3 mb-5 mx-2">  
                    Avian influenza, also known as bird flu, is a viral infection caused by influenza A viruses that
                    primarily affects birds, but can also infect humans and other animals. It presents with symptoms
                    ranging from mild respiratory issues to severe disease and high mortality rates in birds. Highly
                    pathogenic strains, such as H5N1 and H7N9, are of particular concern due to their potential to
                    cause widespread outbreaks and pose zoonotic risks to human health.          
                  </Text>
                  <View className="items-center justify-center">
                    <Image 
                      source={images.avianinfluenza}
                      className="items-center justify-center w-80 h-80 mb-10"
                      resizeMode='contain'
                    />
                    <Link href="https://www.msdmanuals.com/professional/infectious-diseases/respiratory-viruses/avian-influenza" 
                    className='text-lg underline text-black mb-10'>Click here for more info</Link>
                    </View>
                </View>
            </View>
            <View>
              <Text className="text-center font-pbold text-2xl underline mb-5">AVIAN BRONCHITIS</Text>
                <View>
                  <Text className="text-center font-pregular text-lg mt-3 mb-5 mx-2">        
                  Avian bronchitis is a contagious viral respiratory disease of chickens caused
                  by the infectious bronchitis virus (IBV). It primarily affects the respiratory
                  tract, leading to respiratory distress, coughing, sneezing, and nasal discharge.
                  The disease can result in decreased egg production and quality, as well as increased
                  susceptibility to secondary infections, posing economic challenges for poultry producers.         
                  </Text>
                  <View className="items-center justify-center">
                    <Image 
                      source={images.bronchitis}
                      className="items-center justify-center w-80 h-80"
                      // resizeMode='contain'
                    />
                    <Link href="https://www.msdvetmanual.com/poultry/infectious-bronchitis/infectious-bronchitis-in-poultry" 
                    className='text-lg underline text-black mb-10 mt-6'>Click here for more info</Link>
                    </View>
                </View>
            </View>
            <View>
              <Text className="text-center font-pbold text-2xl underline mb-5">AVIAN LARYNGOTRACHEITIS</Text>
                <View>
                  <Text className="text-center font-pregular text-lg mt-3 mb-5 mx-2">  
                    Avian laryngotracheitis (ILT) is a highly contagious viral respiratory disease of
                    poultry caused by the infectious laryngotracheitis virus (ILTV), a member of the
                    herpesvirus family. It primarily affects the respiratory system, causing inflammation
                    of the larynx and trachea, leading to symptoms such as coughing, gasping, and severe
                    respiratory distress. ILT can result in significant economic losses in the poultry
                    industry due to decreased egg production, increased mortality rates, and the costs
                    associated with disease control measures.
                  </Text>
                  <View className="items-center justify-center">
                    <Image 
                      source={images.laryngo}
                      className="items-center justify-center w-80 h-80"
                      resizeMode='contain'
                    />
                    <Link href="https://www.msdvetmanual.com/poultry/infectious-laryngotracheitis/infectious-laryngotracheitis-in-poultry" 
                    className='text-lg underline text-black mb-10 mt-6'>Click here for more info</Link>
                    </View>
                </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default sneezingPage