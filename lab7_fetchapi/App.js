import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, Text, TextInput, Image } from 'react-native';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
const Stack = createNativeStackNavigator();

function Screen1({ navigation }) {
  const [name, setName] = useState('');

  const handlePress = () => {
    if (name) {
      navigation.navigate('screen2', { name });
    }
  };
  return (
    <View
      style={{
        paddingTop: 30,
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View style={{ flex: 5 }}>
        <Image
          source={require('./todo.png')}
          style={{ width: 250, height: 250 }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Text style={{ color: 'purple', fontWeight: 'bold', fontSize: 30 }}>
          MANAGE YOUR TASK
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={{
            padding: 10,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: 'gray',
            fontSize: 16,
            height: 40,
          }}
        />
      </View>
      <View style={{ flex: 3 }}>
        <Button title="Get Started" onPress={handlePress} />
      </View>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Screen1}
          options={{ title: 'home' }}
        />
        <Stack.Screen
          name="screen2"
          component={Screen2}
          options={{ title: 'layout2' }}
        />
        <Stack.Screen
          name="screen3"
          component={Screen3}
          options={{ title: 'Screen 3' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
