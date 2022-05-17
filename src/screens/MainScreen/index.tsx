import { observer } from 'mobx-react';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors, UIStyles } from '../../shared/UIStyles';
import MainStore from '../../store/main';
import { Todo } from '../../store/interfaces';

const MainScreen: React.FC = observer(({ navigation }) => {
  const todos = MainStore.getTodos();
  console.log(todos);

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
        data={todos}
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

export default MainScreen;
