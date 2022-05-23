import { observer } from 'mobx-react';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useMainContext } from '../../Hooks.tsx/useMainContext';
import { Colors, UIStyles } from '../../shared/UIStyles';
import { Todo } from '../../store/interfaces';

export const MainScreen: React.FC = observer(({ navigation }) => {
  //   const todos = MainStore.getTodos();
  const { todoStore } = useMainContext();
  console.log('store = ', todoStore.todos);

  console.log(todoStore.todos);

  const renderItem = ({ item }: { item: Todo }) => {
    return (
      <Pressable
        style={{ backgroundColor: 'transparent' }}
        onPress={() => navigation.navigate('EditTodo', { todo: item })}>
        <View style={styles.todoWrapper}>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <>
      <FlatList
        contentContainerStyle={[UIStyles.container, UIStyles.todoListWrapper]}
        data={todoStore.todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View>
        <Button
          title="Создать задачу"
          onPress={() => navigation.navigate('CreateTodo')}
        />
      </View>
    </>
  );
});

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
    padding: 8,
  },
});
