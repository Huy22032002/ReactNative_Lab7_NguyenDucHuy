import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const Screen3 = ({ navigation }) => {
  const [task, setTask] = useState('');

  const them = () => {
    axios
      .post('https://6707200ca0e04071d2292c11.mockapi.io/task', {
        title: task,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <View>
      <Text>ADD YOUR JOB</Text>
      <TextInput
        placeholder="Input your job"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Finish" onPress={them} />
    </View>
  );
};

export default Screen3;
