// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,SafeAreaView,StatusBar} from 'react-native';
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './onboarding';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


export default function App() {

   
  
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="onboarding" component={Onboarding} />
    <Stack.Screen name="Login" component={Login} />


  </Stack.Navigator>
  </NavigationContainer>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
