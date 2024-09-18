import React from 'react';
import { View, Text, Button } from 'react-native';
import Scanner from "../../components/Scanner/Scanner"; // ajuste o caminho se necessário

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home Screen</Text>
      
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DesenvolvedoresScreen')}
      />

      {/* Adicione o componente Scanner */}
      <Scanner />
    </View>
  );
};

export default HomeScreen;
