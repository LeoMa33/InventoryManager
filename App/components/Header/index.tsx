import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
  
export function Header({ currentPage }:any): React.JSX.Element {
    switch (currentPage) {
        case "scan":
            return (
                <View style={{flexDirection:'row', height:35, alignItems:'center', margin:20, gap:5}}>
                    <Image source={require("../../img/arrow.png")} style={{width:25, transform:[{scaleX:-1}]}}></Image>
                    <Text style={{fontSize:14, color:colors.white, fontWeight:'bold'}}>BACK</Text>
                </View>
            );
            break;
    
        default:
            return (
                <View style={{flexDirection:'row', height:35, alignItems:'center', margin:20}}>
                    <Text style={{fontSize:14, color:colors.white, fontWeight:'bold'}}>Inventoy Manager</Text>
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