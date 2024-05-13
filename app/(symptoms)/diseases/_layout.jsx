import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const DiseasesLayout = () => {
    return (
        <>
         <Stack>
            <Stack.Screen name="ataxiaPage" options={{ headerShown:
            false }}/>
            <Stack.Screen name="diarrheaPage" options={{ headerShown:
            false }}/>
            <Stack.Screen name="nasalDischargePage" options={{ headerShown:
            false }}/>
            <Stack.Screen name="sneezingPage" options={{ headerShown:
            false }}/>
            <Stack.Screen name="swollenCombPage" options={{ headerShown:
            false }}/>
            <Stack.Screen name="swollenEyesPage" options={{ headerShown:
            false }}/>  
            <Stack.Screen name="swollenFeetPage" options={{ headerShown:
            false }}/>
    
         </Stack>
        </>
      )
    }

export default DiseasesLayout