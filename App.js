import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screens/MainScreen';
import { CreateTodo } from './src/screens/CreateTodo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen
          name="CreateTodo"
          component={CreateTodo}
          options={{ title: 'Создание задачи' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
