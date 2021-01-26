import React from 'react';
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { expo as appName } from './app.json';
import { Provider } from 'react-redux';

import Home from './app/screens/HomeScreen';
import NoteFormScreen from './app/screens/NoteFormScreen';
import NoteListScreen from './app/screens/NoteListScreen';

import configureStore from './app/store';

const Stack = createStackNavigator();
const store = configureStore();

const App = () => {
  return(
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Note App' }} />
            <Stack.Screen name="NoteForm" component={NoteFormScreen} options={{ title: 'Add Notes' }} />
            <Stack.Screen name="NoteList" component={NoteListScreen} options={{ title: 'Notes' }} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}

AppRegistry.registerComponent(appName.name, () => App);

export default App;