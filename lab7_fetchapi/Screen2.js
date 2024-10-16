import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, Button, Image } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const Screen2 = ({ route, navigation }) => {
  const { name } = route.params;
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    axios
      .get('https://6707200ca0e04071d2292c11.mockapi.io/task')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    axios
      .get('https://6707200ca0e04071d2292c11.mockapi.io/task')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddTask = () => {
    navigation.navigate('screen3');
  };

  const deleteTask = (postIdToDelete) => {
    axios
      .delete(
        `https://6707200ca0e04071d2292c11.mockapi.io/task/${postIdToDelete}`
      )
      .then(() => {
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task.id !== postIdToDelete)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //fetch lai list sau khi add
  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [])
  );

  return (
    <View style={{ backgroundColor: 'white' }}>
      <Text style={{ padding:10,textAlign:'right', fontSize:40 }}>Hi {name}</Text>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderWidth: 1,
                borderRadius: 15,
                marginTop: 20,
                marginBottom: 20,
              }}>
              <Image
                source={require('./check.png')}
                style={{ width: 10, height: 10 }}
              />
              <Text style={{ fontWeight: 'bold', fontSize: '24' }}>
                {item.title}
              </Text>
              <Image
                source={require('./pencel.png')}
                style={{ width: 10, height: 10 }}
              />
              <Button title="Delete" onPress={() => deleteTask(item.id)} />
            </View>
          )}
        />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default Screen2;
