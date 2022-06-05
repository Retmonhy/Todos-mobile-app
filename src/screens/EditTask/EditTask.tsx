import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { PlusButton } from '../../shared/Ui/PlusButton';
import { Colors, UIStyles } from '../../shared/UIStyles';
import MainStore, { Todo } from '../../store/main';

export const EditTask: React.FC = ({ route, navigation }) => {
  const todo: Todo = route?.params?.item;
  const [title, setTitle] = React.useState(todo?.title || '');
  const todos = MainStore;
  const createTask = () => {
    todos.addTask(todo, title);
    navigation.goBack();
  };
  return (
    <View style={UIStyles.container}>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={setTitle}
      />
      <PlusButton onPress={createTask} />
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
