import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors, UIStyles } from '../../shared/UIStyles';
import MainStore from '../../store/main';

interface Todo {
  title: string;
  description: string;
}

const MainScreen: React.FC = ({ navigation }) => {
  const todos = MainStore;
  console.log(todos);

  const renderItem = ({ item }: Todo) => {
    console.log('item ', item);
    return (
      <Pressable
        style={{ backgroundColor: 'transparent' }}
        onPress={() => navigation.navigate('CreateTodo', item)}>
        <View style={styles.todoWrapper}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text}>{item.description}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <>
      <FlatList
        contentContainerStyle={[UIStyles.container, styles.todoListWrapper]}
        data={todos.todos}
        renderItem={renderItem}
        keyExtractor={item => item.title + item.description}
      />
      <View>
        <Button
          title="Создать задачу"
          onPress={() => navigation.navigate('CreateTodo')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  todoListWrapper: {
    paddingTop: 16,
    paddingBottom: 100,
  },
  todoWrapper: {
    borderRadius: 8,
    borderColor: Colors.black333,
    borderWidth: 1,
    marginVertical: 4,
  },
  text: {
    marginBottom: 8,
    color: Colors.black333,
  },
});

export default MainScreen;
