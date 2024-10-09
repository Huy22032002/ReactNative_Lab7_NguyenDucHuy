import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Screen3 = ({ navigation }) => {
  const [task, setTask] = useState('');

  const them = () => {
    // Xử lý thêm task tại đây (nếu cần)
    navigation.goBack(); 
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
