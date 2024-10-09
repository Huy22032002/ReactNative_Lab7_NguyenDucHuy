import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, TextInput } from 'react-native';
import axios from 'axios';

const Screen2 = ({ route, navigation }) => {
  const { name } = route.params;
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Fetch tasks từ mock API
    axios.get('https://mockapi.io/api/v1/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddTask = () => {
    navigation.navigate('screen3');
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <View>
      <Text>Hi {name}</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="Delete" onPress={() => handleDeleteTask(item.id)} />
          </View>
        )}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default Screen2;
