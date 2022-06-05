import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { Svg } from '../../../shared/Assests/Svg';
import { Colors } from '../../../shared/UIStyles';

export const Input = ({ onPressHandler }) => {
  const [title, setTitle] = React.useState('');
  const inputRef = React.createRef<TextInput>();
  const addTask = title => {
    title.trim !== '' && onPressHandler(title);
    setTitle('');
    inputRef.current?.focus();
  };

  return (
    <View style={[styles.inputPosition]}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={[styles.wrapper]}>
        <TextInput
          placeholder="new task"
          value={title}
          onChangeText={setTitle}
          autoFocus={true}
          style={styles.input}
          ref={inputRef => inputRef}
        />
        <Pressable
          onPress={() => addTask(title)}
          style={styles.plusButton}
          android_ripple={{
            color: Colors.gray,
            radius: 25,
            borderless: true,
          }}>
          <Svg.Plus size={35} color={Colors.black} />
        </Pressable>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  inputPosition: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  wrapper: {
    height: 60,
    padding: 10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
  },
  input: {
    padding: 0,
    flex: 1,
  },
  plusButton: {
    borderRadius: 20,
  },
});
