import React from 'react';
import { View, Text,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/homeScreen/homeScreen';
import Login from './Screens/loginScreen/Login';
import SignUp from './Screens/SignupScreen/Signup';
import Dashboard from './Screens/Dashboard/Dashboard';



const Stack = createNativeStackNavigator();

function App () {
  return(
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen  name= "Homescreen" component = {HomeScreen} />
     <Stack.Screen  name= "Dashboard" component = {Dashboard} options ={{headerShown: false}} />
     <Stack.Screen  name= "Login" component = {Login} options ={{headerShown: false}} />
    </Stack.Navigator>
   </NavigationContainer>


  )
}

export default App;
