import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors, UIStyles } from '../../shared/UIStyles';
import MainStore from '../../store/main';

export const CreateTodo: React.FC = ({ route, navigation }) => {
  const [title, setTitle] = React.useState(route?.params?.item.title || '');
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
