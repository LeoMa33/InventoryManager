import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableHighlight,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Objects } from './components/Objects';
import DefaultPage from './pages/DefaultPage';
import ScanPage from './pages/ScanPage';


function App(): React.JSX.Element {
  
  const Stack = createNativeStackNavigator();

  const backgroundStyle = {
    backgroundColor: colors.grey,
  };

  var objects = []

  for (let index = 0; index < 7; index++) {
    objects.push(<Objects key={index} mode='default'/>)
  }

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown:false}}>
            <Stack.Screen name='default' component={DefaultPage}></Stack.Screen>
            <Stack.Screen name='scan' component={ScanPage}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  }
});

const colors = {
  redDark : "#AF2240",
  redLight : "#D42A4E",
  green : "#15AF9C",
  white : "#F7F6F6",
  blue : "#55629D",
  grey : "#484F57",
  dark : "#1A232D"
}

export default App;
