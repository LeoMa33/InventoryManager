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
  Image,
  View,
} from 'react-native';

type ObjectsProps = {
  key:number;
  mode:string;
}

export function Objects(props:ObjectsProps): React.JSX.Element {
  switch (props.mode) {
    case "result":
      
    return (
      <View style={{backgroundColor:colors.dark, height:175, width:150}}></View>
    );
  
    default:
      return (
        <View style={{backgroundColor:colors.dark, height:175, width:150, flexDirection:'column', paddingHorizontal:13, paddingVertical:16, alignItems:'center', gap:10}}>
            <Image source={require("../../img/pngegg.png")} style={{height:91, aspectRatio:1/1}}></Image>
          
          <View style={{width:"100%", padding:4, gap:0, flexDirection:'column'}}>
            <Text style={{color:colors.white, fontWeight:"500"}}>Nom de l'article</Text>
            <Text style={{color:colors.green, fontWeight:"500"}}>3 En stock</Text>
          </View>
        </View>
      );
  }
}

const colors = {
    redDark : "#AF2240",
    redLight : "#D42A4E",
    green : "#15AF9C",
    white : "#F7F6F6",
    blue : "#55629D",
    grey : "#484F57",
    dark : "#1A232D"
  }