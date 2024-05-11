import { View, Text, Image } from 'react-native'
import {Tabs, Redirect} from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2 mt-2">
      <Image 
        source={icon} 
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold': 'font-pregular'} text-xs`}> 
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
   <>
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#0c0c0c',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#2bafc5'
        }
      }}
    >
      <Tabs.Screen
       name="home"
       options={{
        title:'Home',
        headerShown: false,
        tabBarIcon: ({ color, focused}) => (
          <TabIcon 
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
          />
        )
       }}

      />
       <Tabs.Screen
       name="faq"
       options={{
        title:'FAQ',
        headerShown: false,
        tabBarIcon: ({ color, focused}) => (
          <TabIcon 
            icon={icons.bookmark}
            color={color}
            name="FAQ"
            focused={focused}
          />
        )
       }}

      />
       <Tabs.Screen
       name="about"
       options={{
        title:'About',
        headerShown: false,
        tabBarIcon: ({ color, focused}) => (
          <TabIcon 
            icon={icons.plus}
            color={color}
            name="About"
            focused={focused}
          />
        )
       }}
      />
    </Tabs>
   </>
  )
}

export default TabsLayout