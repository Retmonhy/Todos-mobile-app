import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from './src/screens/MainScreen';
import { EditTodo } from './src/screens/EditTodo';
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
        <Stack.Screen
          name="EditTodo"
          component={EditTodo}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
