import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from './Screens/Authentification';
import Home from './Screens/Home';
import Chat from './Screens/Chat';
import Signup from './Screens/Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007bff', // Customize header background color
          },
          headerTintColor: '#fff', // Customize header text color
          headerTitleStyle: {
            fontWeight: 'bold', // Customize header title font weight
          },
          headerBackTitleVisible: false, // Hide back button text
          animation: 'fade', // Screen transition animation
        }}
      >
        <Stack.Screen
          name="Authentification"
          component={Auth}
          options={{ title: 'Login' }} // Customize title
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home Page' }} // Customize title
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: 'Register' }} // Customize title
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ title: 'Chat Room' }} // Customize title
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
