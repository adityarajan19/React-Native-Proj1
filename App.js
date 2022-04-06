import React,{ useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodoItem from './components/AddToDoItem';


export default function App() {
  const [ data, setData ] = useState([
    { value: 'Finish React Native Assignment.', key: '1' },
    { value: 'Read a Book.', key: '2' },
    { value: 'Workout in the evening.', key: '3' }
  ])

  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    })};

  const submitHandler = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    })};

  return (
    <View style={styles.container}>
      <Header />
      <View style={ styles.content }>
        {/* to form */}
        <View style={ styles.list }>
          <AddTodoItem submitHandler={submitHandler}/>
          <FlatList 
          data={ data }
          keyExtractor={(item) => item.key}
          renderItem={({ item }) =>(
            <TodoItem item={ item } deleteItem={deleteItem} />
          ) }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender'
  },
  content:{
    padding: 40
  },
  list: {
    marginTop: 20
  }
  
});
