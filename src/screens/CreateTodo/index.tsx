import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors, UIStyles } from '../../shared/UIStyles';
import MainStore from '../../store/main';

export const CreateTodo: React.FC = ({ route, navigation }) => {
  const [title, setTitle] = React.useState(route.params?.item.title);
  const [description, setDescription] = React.useState(
    route.params?.item.description,
  );
  const todos = MainStore;
  console.log('route = ', route);
  return (
    <View style={UIStyles.container}>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.textInput}
        value={description}
        onChangeText={setDescription}
      />
      <Button
        type="outline"
        title="Создать задачу"
        onPress={() => {
          todos.addTodo({ title, description });
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
