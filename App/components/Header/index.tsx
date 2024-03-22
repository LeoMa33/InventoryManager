import React from 'react';
import {
  Text,
  View,
} from 'react-native';
  
export function Header({ currentPage }:any): React.JSX.Element {
return (
    <View style={{flexDirection:'row', height:35, alignItems:'center', margin:20}}>
        <View style={{height:40, aspectRatio:1/1, borderRadius:100, backgroundColor:colors.white}}></View>
    </View>
);
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