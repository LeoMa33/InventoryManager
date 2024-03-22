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

function DefaultPage({navigation}:any): React.JSX.Element {  const isDarkMode = useColorScheme() === 'dark';

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
      <View>
            <Text style={{color:colors.white, paddingLeft:30, paddingTop:50, paddingBottom:10, fontSize:20, fontWeight:'bold'}}>INVENTAIRE</Text>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={{flexWrap:'wrap', flexDirection:'row', justifyContent:'center', rowGap:5, columnGap:5, padding:10}}>
          {objects}
        </View>
      </ScrollView>
      <NavBar navigation={navigation}/>
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

export default DefaultPage;
