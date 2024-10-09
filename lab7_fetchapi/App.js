import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Button, Text} from 'react-native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
const Stack = createNativeStackNavigator();

function HomeScreen({navigation}){
  return(
    <View style ={{alignContent:'center', justifyContent:'center', flex:1}}>
      <Button title = "layout 1" onPress = {() => navigation.navigate('screen1')}>
      </Button>
    </View>
  );
} 

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{title: 'home'}}
        />
        <Stack.Screen
          name = "screen2"
          component={Screen2}
          options={{title:'layout2'}}
        />
        <Stack.Screen
          name = "screen1"
          component = {Screen1}
          options = {{title:'Screen 1'}}
        />
        <Stack.Screen
          name = "screen3"
          component = {Screen3}
          options = {{title:'Screen 3'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;