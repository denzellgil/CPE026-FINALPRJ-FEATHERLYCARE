import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

const Symptoms = () => {
  const data = [
    { id: 1, title: 'Ataxia'},
    { id: 2, title: 'Diarrhea'},
    { id: 3, title: 'Nasal Discharge'},
    { id: 4, title: 'Sneezing'},
    { id: 5, title: 'Swollen Comb'},
    { id: 6, title: 'Swollen Eyes'},
    { id: 7, title: 'Swollen Feet'},
];
  
  const renderItem = ({ item }) => {
    return (
      <View className="flex-row w-full bg-white shadow-md rounded-lg">
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="bg-cadetblue w-full h-full">
      <View className="flex-1 items-center justify-center">
        <Text className="text-center mb-4 text-2xl font-pbold">Symptoms</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => renderItem ({ item })}
          keyExtractor={( item ) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator
          contentContainerStyle={{ paddingHorizontal: '20'}}
        />
      </View>
    </SafeAreaView>  
    )
}

export default Symptoms