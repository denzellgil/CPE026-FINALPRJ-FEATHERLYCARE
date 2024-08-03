import { View, Text, Image } from 'react-native'
import {Tabs, Redirect} from 'expo-router'

import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2 pt-0">
      <Image 
        source={icon} 
        resizeMode="contain"
        tintColor={color}
        className="w-5 h-5"
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
      <Tabs.Screen
       name="profile"
       options={{
        title:'Profile',
        headerShown: false,
        tabBarIcon: ({ color, focused}) => (
          <TabIcon 
            icon={icons.profile}
            color={color}
            name="Profile"
            focused={focused}
          />
        )
       }}
      />
      <Tabs.Screen
       name="checklist"
       options={{
        title:'Checklist',
        headerShown: false,
        tabBarIcon: ({ color, focused}) => (
          <TabIcon 
            icon={icons.search}
            color={color}
            name="Checklist"
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