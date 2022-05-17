import { observer } from 'mobx-react-lite';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { UIStyles } from '../../shared/UIStyles';
import { Task } from '../../store/interfaces';
import MainStore from '../../store/main';

export const EditTodo: React.FC = observer(({ route, navigation }) => {
  console.log('route = ', route);

  const todos = MainStore;
  const todo = route.params?.todo;
  const renderItem = observer((task: Task) => {
    return (
      <CheckBox
        checkedIcon="circle-o"
        uncheckedIcon=""
        iconType="material"
        title={task.title}
        checked={task.done}
        onIconPress={() => {
          console.log(task.done);
          todos.onCheckboxPress(task);
        }}
        onPress={() => navigation.navigate('CreateTodo', { task })}
      />
    );
  });

  const [taskTitle, setTaskTitle] = React.useState('');
  return (
    <>
      <FlatList
        contentContainerStyle={[UIStyles.container, UIStyles.todoListWrapper]}
        ListHeaderComponent={
          <Pressable
            onPress={() => navigation.navigate('CreateTodo', { todo })}>
            <Text>{todo?.title}</Text>
          </Pressable>
        }
        data={todo?.tasks}
        renderItem={({ item }) => renderItem(item)}
      />
      <TextInput value={taskTitle} onChangeText={setTaskTitle} />
      <Button
        title="Add task"
        titleStyle={{ color: Colors.black333 }}
        onPress={(): void => {
          taskTitle.trim() && todos.addTask(todo, taskTitle);
          setTaskTitle('');
          console.log('todos = ', todo);
        }}
      />
    </>
  );
});

const styles = StyleSheet.create({});
