import React from 'react';
import {
  Alert,
  TouchableHighlight,
  View,
  Text,
  Image
} from 'react-native';

  
export function ModeSelector({currentMode, clickFunction}:any): React.JSX.Element {
return (
    <View style={{flexDirection:'column', gap:10}}>
        <View>
            <Text style={{fontSize:15, color:colors.white, fontWeight:'bold', textAlign:'center'}}>MODE DE SAISIE</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
            <TouchableHighlight onPress={()=>{clickFunction("mark")}}>
                <View style={{backgroundColor:currentMode=="mark" ? colors.redDark : colors.redLight, gap:2, height:75, aspectRatio:1/1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:colors.white, fontSize:35, fontWeight:'bold'}}>+</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight  onPress={()=>{clickFunction("demark")}}>
                <View style={{backgroundColor:currentMode=="demark" ? colors.redDark : colors.redLight, height:75, aspectRatio:1/1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:colors.white, fontSize:35, fontWeight:'bold'}}>-</Text>
                </View>
            </TouchableHighlight>
        </View>
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