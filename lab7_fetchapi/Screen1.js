import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Screen1 = ({ navigation }) => {
  const [name, setName] = useState('');

  const handlePress = () => {
    if (name) {
      navigation.navigate('screen2', { name });
    }
  };

  return (
    <View
      style={{
        paddingTop: 300,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{ color: 'purple', fontWeight: 'bold', fontSize: 30 }}>
        MANAGE YOUR TASK
      </Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={{
          marginTop:40,
          padding: 10,
          borderRadius: 15,
          borderWidth: 1,
          borderColor: 'gray',
          fontSize: 16, 
          height: 40, 
          width: '80%',
        }}
      />
      <Button title="Get Started" onPress={handlePress} />
    </View>
  );
};

export default Screen1;
