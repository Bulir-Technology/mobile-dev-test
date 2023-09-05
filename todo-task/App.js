import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import Header from './components/Header';
import Register from './components/Register'
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './routes/AppNavigator.js';


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
 padding:60,
    backgroundColor: 'red',
    alignItems: 'center',
   
  },
  input: {
    width:250,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:2,
  },
});
