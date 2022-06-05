import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Svg } from '../Assests/Svg';
import { Colors } from '../UIStyles';

export const PlusButton = ({ onPress, isHidden = false }) => {
  const [isPress, setPress] = React.useState(false);
  return (
    <Pressable
      style={[
        styles.addButtonContainer,
        isPress ? styles.buttonPressed : styles.button,
        isHidden && styles.buttonHidden,
      ]}
      onPressIn={() => setPress(true)}
      onPressOut={() => setPress(false)}
      onPress={onPress}>
      <Svg.Plus size={35} color={Colors.black} />
    </Pressable>
  );
};

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
    //кнопка должна не исчезать, а уменьшаться до размера атома
    // transform: {{scale(0)}}
  },
  button: {
    elevation: 5,
  },
  buttonPressed: {
    elevation: 15,
  },
});
