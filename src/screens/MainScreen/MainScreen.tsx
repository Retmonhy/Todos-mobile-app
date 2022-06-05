import { observer } from 'mobx-react-lite';
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { useMainContext } from '../../Hooks.tsx/useMainContext';
import { PlusButton } from '../../shared/Ui/PlusButton';
import { Colors, UIStyles } from '../../shared/UIStyles';
import { Todo } from '../../store/interfaces';

export const MainScreen: React.FC = observer(({ navigation }) => {
  const { todoStore } = useMainContext();
  const flatListRef = React.createRef();

  const [isHidden, setHidden] = React.useState(false);
  const onPressHandler = () => navigation.navigate('CreateTodo');

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
      <PlusButton onPress={onPressHandler} isHidden={isHidden} />
    </>
  );
});
//сделать два столбца. И рендерить новую карточку в тот столбец, который имеет меньшую высоту. Чекать высоту столбца
const styles = StyleSheet.create({
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
