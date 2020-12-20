import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import TodoItem from './components/TodoItem';

/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const saveTodo = () => {
    setTodoList([
      {id: todoList.length + 1, text: todo, completed: false},
      ...todoList,
    ]);
    setTodo('');
  };

  const deleteTodo = (id) => {
    setTodoList(
      todoList.filter(function (value) {
        value.id !== id;
      }),
    );
  };
  const completeTodo = (id) => {
    const newList = todoList.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          completed: !item.completed,
        };
        return updatedItem;
      }
      return item;
    });
    setTodoList(newList);
  };

  console.log(todoList);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={todoList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <TodoItem
              data={item}
              pressed={completeTodo}
              longPressed={deleteTodo}
            />
          )}
        />
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={todo}
              onChangeText={(value) => setTodo(value)}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={saveTodo}
            disabled={todo.length === 0}>
            <Text style={styles.buttonText}>Add a todo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#9fa8da',
    flex: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    borderRadius: 4,
  },
  button: {
    padding: 16,
    backgroundColor: '#303f9f',
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
  },
  todoItemContainer: {
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
  },
});

export default App;
