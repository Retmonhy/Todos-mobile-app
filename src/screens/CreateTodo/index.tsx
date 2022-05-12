import React from 'react';
import { TurboModuleRegistry } from 'react-native';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors, UIStyles } from '../../shared/UIStyles';

export const CreateTodo: React.FC = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

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
