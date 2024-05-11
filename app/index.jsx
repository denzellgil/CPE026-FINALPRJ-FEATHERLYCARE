import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className="bg-cadetblue h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
            <Image
              source={images.logo}
              className="w-[600px] h-[600px]"
              resizeMode='contain'
            />
            <View className="relative mt-1]">
              <Text className="text-3xl text-black font-pblack text-center mb-10 mt-0">
              Featherly Care
              </Text>
          </View>
          <CustomButton
              title="Continue to Home"
              handlePress={() => router.push('/home')}
              containerStyles="w-full mt-7"
             />
        </View> 
      </ScrollView>
      <StatusBar backgroundColor='#161622' 
      style='light'/>
    </SafeAreaView>
  );
}

