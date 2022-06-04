import { observer } from 'mobx-react';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useMainContext } from '../../Hooks.tsx/useMainContext';
import { Svg } from '../../shared/Assests/Svg';
import { Colors, UIStyles } from '../../shared/UIStyles';
import { Todo } from '../../store/interfaces';

export const MainScreen: React.FC = observer(({ navigation }) => {
  //   const todos = MainStore.getTodos();
  const { todoStore } = useMainContext();
  const [isPress, setPress] = React.useState(false);
  const [isHidden, setHidden] = React.useState(false);
  const flatListRef = React.createRef();
  console.log('store = ', todoStore.todos);

  console.log(todoStore.todos);

  const _renderItem = (todo: Todo) => {
    return (
      <Pressable
        style={[styles.todoCard]}
        onPress={() => navigation.navigate('EditTodo', { todo })}>
        <View style={[styles.todoWrapper]}>
          <Text style={styles.todoHeader}>{todo.title}</Text>
          {todo.tasks.map(td => (
            <Text key={td.id}>O__{td.title}</Text>
          ))}
        </View>
      </Pressable>
    );
  };
  return (
    <>
      <FlatList
        contentContainerStyle={[UIStyles.container, styles.todoListWrapper]}
        data={todoStore.todos}
        renderItem={({ item }) => _renderItem(item)}
        keyExtractor={item => item.id}
        ref={() => flatListRef}
        onScrollBeginDrag={() => {
          console.log('start drag');
          setHidden(true);
        }}
        onScrollEndDrag={() => {
          console.log('end drag');
          setHidden(false);
        }}
      />
      <Pressable
        style={[
          styles.addButtonContainer,
          isPress ? styles.buttonPressed : styles.button,
          isHidden && styles.buttonHidden,
        ]}
        onPressIn={() => setPress(true)}
        onPressOut={() => setPress(false)}
        onPress={() => navigation.navigate('CreateTodo')}>
        <Svg.Plus size={35} color={Colors.black} />
      </Pressable>
    </>
  );
});
//сделать два столбца. И рендерить новую карточку в тот столбец, который имеет меньшую высоту. Чекать высоту столбца
const styles = StyleSheet.create({
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonHidden: {
    display: 'none',
    // transform: {{scale(0)}}
  },
  button: {
    elevation: 5,
  },
  buttonPressed: {
    elevation: 15,
  },
  todoCard: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 3,
    minWidth: '48%',
  },
  todoListWrapper: {
    paddingTop: 16,
    paddingBottom: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // flex: 1,
  },
  todoWrapper: {
    padding: 10,
    marginHorizontal: 4,
  },
  todoHeader: {
    marginBottom: 4,
  },
  text: {
    marginBottom: 8,
    color: Colors.black333,
    padding: 8,
  },
});
