import React from 'react';
import {
  Alert,
  TouchableHighlight,
  View,
  Text,
  Image
} from 'react-native';

function _onPressButton() {
    Alert.alert('You tapped the button!');
}
  
export function NavBar({navigation}:any): React.JSX.Element {
return (
    <View style={{flexDirection:'row'}}>
        <TouchableHighlight>
            <View style={{backgroundColor:colors.redLight, height:75, aspectRatio:1/1, justifyContent:'center', alignItems:'center'}}>
                <Image source={require("../../img/home.png")} style={{height:30, aspectRatio:1/1}}></Image>
                <Text style={{color:colors.white, fontSize:10}}>Accueil</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight>
            <View style={{backgroundColor:colors.redDark, gap:2, height:75, aspectRatio:1/1, justifyContent:'center', alignItems:'center'}}>
                <Image source={require("../../img/archive.png")} style={{height:30, aspectRatio:1/1}}></Image>
                <Text style={{color:colors.white, fontSize:10}}>Inventaire</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight>
            <View style={{backgroundColor:colors.redLight, height:75, aspectRatio:1/1, justifyContent:'center', alignItems:'center'}}>
                <Image source={require("../../img/settings.png")} style={{height:30, aspectRatio:1/1}}></Image>
                <Text style={{color:colors.white, fontSize:10}}>Paramètre</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={()=>navigation.navigate("scan")} style={{position:'absolute', height:70, width:150, backgroundColor:colors.blue, bottom:"110%", right:0, flexDirection:'row', alignItems:'center', justifyContent:'center', gap:15}}>
            <View style={{height:70, width:150, flexDirection:'row', alignItems:'center', justifyContent:'center', gap:15}}>
                <Text style={{color:colors.white, fontSize:20, fontWeight:'bold'}}>SCAN</Text>
                <Image style={{aspectRatio:1/1, height:27, width:27}} source={require('../../img/scanImg.png')}></Image>
            </View>
        </TouchableHighlight>

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