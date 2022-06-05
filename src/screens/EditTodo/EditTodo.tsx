import { observer } from 'mobx-react-lite';
import React from 'react';
import {
  FlatList,
  Keyboard,
  Modal,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import { CheckBox, Overlay } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { PlusButton } from '../../shared/Ui/PlusButton';
import { UIStyles } from '../../shared/UIStyles';
import { Task } from '../../store/interfaces';
import MainStore from '../../store/main';
import { Input } from './components/Input';

export const EditTodo: React.FC = observer(({ route, navigation }) => {
  const todos = MainStore;
  const todo = route.params?.todo;
  const [isVisible, setVisible] = React.useState(false);

  const addTask = taskTitle => {
    todos.addTask(todo, taskTitle);
  };

  const toggleInput = () => {
    setVisible(!isVisible);
    console.log('isVisible = ', isVisible);
  };
  const _renderItem = (task: Task) => {
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
  };

  return (
    <>
      <FlatList
        contentContainerStyle={[UIStyles.container, UIStyles.todoListWrapper]}
        ListHeaderComponent={
          <Pressable
            onPress={() =>
              navigation.navigate('CreateTodo', { todo, isEdit: true })
            }>
            <Text>{todo?.title}</Text>
          </Pressable>
        }
        data={todo?.tasks}
        renderItem={({ item }) => _renderItem(item)}
      />

      <PlusButton onPress={toggleInput} isHidden={isVisible} />

      <Modal
        animationType="slide"
        transparent={true}
        //тут решить проблему с частичным закрывание модалки, при нажатии системной кнопки "Назад"
        //закрывается клавиатура, но инпут не закрывается
        onRequestClose={() => {
          toggleInput();
          Keyboard.dismiss();
        }}
        visible={isVisible}>
        <Overlay
          isVisible={isVisible}
          overlayStyle={styles.overlay}
          backdropStyle={styles.backdrop}
          onBackdropPress={toggleInput}
        />
        <Input onPressHandler={addTask} />
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: Colors.white,
  },
  hidden: {
    display: 'none',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  overlay: { backgroundColor: 'transparent', elevation: 0 },
});
