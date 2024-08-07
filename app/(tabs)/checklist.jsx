import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const symptomsData = [
  { name: 'Ataxia', diseases: [{ name: 'Avian Encephalomyelitis', image: require('../../assets/images/encephalomyelitis.png') }, { name: 'Marek\'s Disease', image: require('../../assets/images/mareks.png') }] },
  { name: 'Diarrhea', diseases: [{ name: 'Bursal Disease', image: require('../../assets/images/bursal.png') }, { name: 'New Castle Disease', image: require('../../assets/images/newcastle.png') }, { name: 'Avian Salmonellosis', image: require('../../assets/images/salmonellosis.png') }] },
  { name: 'Nasal Discharge', diseases: [{ name: 'Avian Influenza', image: require('../../assets/images/avianinfluenza.png') }, { name: 'Avian Bronchitis', image: require('../../assets/images/bronchitis.png') }, { name: 'Avian Laryngotracheitis', image: require('../../assets/images/laryngo.png') }, { name: 'Avian Mycoplasmosis', image: require('../../assets/images/mycoplasmosis.png') }] },
  { name: 'Sneezing', diseases: [{ name: 'Avian Influenza', image: require('../../assets/images/avianinfluenza.png') }, { name: 'Avian Bronchitis', image: require('../../assets/images/bronchitis.png') }, { name: 'Avian Laryngotracheitis', image: require('../../assets/images/laryngo.png') }] },
  { name: 'Swollen Comb', diseases: [{ name: 'Avian Influenza', image: require('../../assets/images/avianinfluenza.png') }, { name: 'Fowl Pox', image: require('../../assets/images/fowlpox.png') }, { name: 'Marek\'s Disease', image: require('../../assets/images/mareks.png') }] },
  { name: 'Swollen Eyes', diseases: [{ name: 'Avian Influenza', image: require('../../assets/images/avianinfluenza.png') }, { name: 'Fowl Pox', image: require('../../assets/images/fowlpox.png') }] },
  { name: 'Swollen Feet', diseases: [{ name: 'Avian Influenza', image: require('../../assets/images/avianinfluenza.png') }, { name: 'Fowl Pox', image: require('../../assets/images/fowlpox.png') }, { name: 'Favus', image: require('../../assets/images/favus.png') }] },
];

const CustomCheckbox = ({ isChecked, onPress }) => (
  <TouchableOpacity
    style={{
      height: 24,
      width: 24,
      borderWidth: 1,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8,
    }}
    onPress={onPress}
  >
    {isChecked && (
      <View
        style={{
          height: 12,
          width: 12,
          backgroundColor: '#000',
        }}
      />
    )}
  </TouchableOpacity>
);

const Checklist = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState({});
  const [relatedDiseases, setRelatedDiseases] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState(null);

  const handleCheckboxChange = (symptom) => {
    setSelectedSymptoms((prev) => ({
      ...prev,
      [symptom]: !prev[symptom],
    }));
  };

  const handleSubmit = () => {
    const diseases = new Set();
    for (const symptom of Object.keys(selectedSymptoms)) {
      if (selectedSymptoms[symptom]) {
        const symptomData = symptomsData.find((s) => s.name === symptom);
        if (symptomData) {
          symptomData.diseases.forEach((disease) => diseases.add(disease));
        }
      }
    }
    setRelatedDiseases(Array.from(diseases));
  };

  const handleDiseasePress = (disease) => {
    setSelectedDisease(disease);
    setModalVisible(true);
  };

  return (
    <SafeAreaView className="bg-cadetblue h-full w-full">
      <ScrollView>
        <View className="flex-1 p-5">
          <Text className="text-center mb-5 text-2xl font-pbold pt-20">Checklist</Text>
          {symptomsData.map((symptom, index) => (
            <View key={index} className="flex-row items-center mb-4">
              <CustomCheckbox
                isChecked={selectedSymptoms[symptom.name] || false}
                onPress={() => handleCheckboxChange(symptom.name)}
              />
              <Text className="ml-2 text-lg font-semibold">{symptom.name}</Text>
            </View>
          ))}
          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-black rounded-xl p-3 rounded mt-5"
          >
            <Text className="text-white text-center font-psemibold text-lg">Submit</Text>
          </TouchableOpacity>
          {relatedDiseases.length > 0 && (
            <View className="mt-5">
              <Text className="text-xl font-pbold mb-3">Related Diseases:</Text>
              {relatedDiseases.map((disease, index) => (
                <TouchableOpacity key={index} onPress={() => handleDiseasePress(disease)}>
                  <Text className="text-lg font-semibold text-center">{disease.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
      {selectedDisease && (
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
            <View className="bg-white p-5 rounded-lg">
              <Image source={selectedDisease.image} style={{ width: 200, height: 200 }} />
              <Text className="text-xl font-pbold mt-5">{selectedDisease.name}</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="bg-black rounded-xl p-3 rounded mt-5"
              >
                <Text className="text-white text-center font-psemibold text-lg">Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default Checklist;
