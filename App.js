import React, {useState} from 'react';
import {StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';

import { Header, AddList, ViewList} from './components';

export default function App() {

  const [todo, setToDo] = useState([
    {text: 'buy a coffee', id: '1'},
    {text: 'create an app', id: '2'},
    {text: 'play game', id: '3'},
  ]);

  const handleTouch = (id) => {
    setToDo((prev) => {
      return prev.filter((person) => person.id !== id);
    });
  };

  const submitHandler = (val) => {
    setToDo((prev) => {
      return [
        { text: val, id: Math.random().toString() },
        ...prev
      ]
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
        <AddList submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={todo}
              renderItem={({item}) => (
                <ViewList item={item} handleTouch={handleTouch} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginTop: 40,
    padding: 20,
    flex: 1
  },
  list: {
    marginTop: 10,
    flex: 1
  }
});
