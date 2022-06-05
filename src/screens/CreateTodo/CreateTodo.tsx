import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { PlusButton } from '../../shared/Ui/PlusButton';
import { Colors, UIStyles } from '../../shared/UIStyles';
import MainStore, { Todo } from '../../store/main';

export const CreateTodo: React.FC = ({ route, navigation }) => {
  const todo: Todo = route?.params?.todo;
  const isEdit: boolean = route?.params?.isEdit || false;
  console.log('route create screen = ', route.params);
  const [title, setTitle] = React.useState(todo?.title || '');
  const todos = MainStore;
  const createTodo = () => {
    isEdit ? todos.editTodo(todo, title) : todos.addTodo(title, '#fff');
    isEdit ? navigation.navigate('EditTodo', { todo }) : navigation.goBack();
  };
  return (
    <>
      <View style={UIStyles.container}>
        <TextInput
          style={styles.textInput}
          value={title}
          onChangeText={setTitle}
        />
        <Button
          title="Удалить"
          buttonStyle={{ backgroundColor: 'pink' }}
          onPress={() => {
            todos.removeTodo(todo?.id);
            navigation.navigate('Main', {});
          }}
        />
      </View>
      <PlusButton onPress={createTodo} />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.black333,
    paddingStart: 8,
    marginBottom: 16,
  },
});
