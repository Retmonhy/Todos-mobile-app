import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors, UIStyles } from '../../shared/UIStyles';
import MainStore, { Todo } from '../../store/main';

export const EditTask: React.FC = ({ route, navigation }) => {
  console.log('route = ', route);

  const todo: Todo = route?.params?.item;
  const [title, setTitle] = React.useState(todo?.title || '');
  const todos = MainStore;
  return (
    <View style={UIStyles.container}>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={setTitle}
      />
      <Button
        type="outline"
        title="Создать задачу"
        onPress={() => {
          todos.addTodo(title, '#fff');
          navigation.goBack();
        }}
      />
      <Button
        title="Удалить"
        buttonStyle={{ backgroundColor: 'pink' }}
        onPress={() => todos.removeTodo(todo?.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.black333,
    paddingStart: 8,
  },
});
