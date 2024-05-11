import { TouchableOpacity, View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, {useState, useRef} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';

const Symptoms = () => {
  const [pagingEnabled, setPagingEnabled] = useState(true);
  const width = Dimensions.get('window').width

  const carouselData = [
    { id: "1", title: 'Ataxia', image: require("../../assets/images/ataxia.png")},
    { id: "2", title: 'Diarrhea', image: require("../../assets/images/diarrhea.png")},
    { id: "3", title: 'Nasal Discharge', image: require("../../assets/images/nasalDischarge_799x563.png")},
    { id: "4", title: 'Sneezing', image: require("../../assets/images/sneezing.png")},
    { id: "5", title: 'Swollen Comb', image: require("../../assets/images/swollenComb.png")},
    { id: "6", title: 'Swollen Eyes', image: require("../../assets/images/swollenEyes.png")},
    { id: "7", title: 'Swollen Feet', image: require("../../assets/images/swollenFeet.png")},
  ];
  
  const renderItem = ({ item }) => {
    return (
      <SafeAreaView className="flex-1 justify-center items-center overflow-hidden">
        <TouchableOpacity className="flex-1 justify-center items-center mt-10">
            <Image source={item.image} resizeMode='contain' className="w-80 h-80"/>
        </TouchableOpacity>
        <View className="items-center justify-center">
          <Text className="font-psemibold text-xl pt-10"> {item.title} </Text>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView className=" bg-cadetblue w-full h-full">
      <View className="flex-1">
        <Text className="text-center mb-4 text-2xl font-pbold pt-20">SYMPTOMS</Text>
        <Carousel
          width={width}
          height={350}
          data={carouselData}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>  
    )
}

export default Symptoms 