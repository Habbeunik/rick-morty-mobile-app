import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterListScreen from './src/screens/characterList';
import LocationScreen from './src/screens/location';
import EpisodeScreen from './src/screens/episode';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name='Characters' component={CharacterListScreen} />
       <Stack.Screen name='Locations' component={LocationScreen} />
       <Stack.Screen name='Episodes' component={EpisodeScreen} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
