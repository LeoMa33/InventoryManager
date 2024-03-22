import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { Objects } from '../components/Objects';

function ScanPage({navigation}:any): React.JSX.Element {  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: colors.grey,
  };

  var objects = []

  for (let index = 0; index < 7; index++) {
    objects.push(<Objects key={index} mode='default'/>)
  }

  return (
    <SafeAreaView style={[backgroundStyle, {flex:1}]}>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header currentPage={"yop"}/>
    </SafeAreaView>
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

export default ScanPage;
