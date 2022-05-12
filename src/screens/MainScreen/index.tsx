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
  const renderItem = (item: Todo) => {
    return (
      <Pressable>
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
        contentContainerStyle={UIStyles.container}
        data={todos.todos}
        renderItem={renderItem}
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
  todoWrapper: {
    borderRadius: 8,
    borderColor: Colors.black333,
    borderWidth: 1,
  },
  text: {
    marginBottom: 8,
  },
});

export default MainScreen;
