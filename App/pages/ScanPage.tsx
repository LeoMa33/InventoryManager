import React, { useEffect, useState } from 'react';
import {
  Alert,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavBar } from '../components/NavBar';
import { Header } from '../components/Header';
import { Objects } from '../components/Objects';
import { Camera, CameraDevice, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';
import { ModeSelector } from '../components/ModeSelector';

function ScanPage({navigation}:any): React.JSX.Element {

  const backgroundStyle = {
    backgroundColor: colors.grey,
  };

  // State variables
  const [enableOnCodeScanned, setEnableOnCodeScanned] = useState(true);
  const [modeSaisie, setModeSaise] = useState("mark");

  // Camera permission hooks
  const {
    hasPermission: cameraHasPermission,
    requestPermission: requestCameraPermission,
  } = useCameraPermission();

  // Get the camera device (back camera)
  const device = useCameraDevice('back');

  // Handle camera permission on component mount
  useEffect(() => {
    handleCameraPermission();
  }, []);

  // Use the code scanner hook to configure barcode scanning
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      // Check if code scanning is enabled
      if (enableOnCodeScanned) {
        let value = codes[0]?.value;
        let type = codes[0]?.type;

        console.log(codes[0]);
        console.log(value)
        setEnableOnCodeScanned(false);
      }
    },
  });

  const handleCameraPermission = async () => {
    const granted = await requestCameraPermission();

    if (!granted) {
      Alert.alert(
        'Camera permission is required to use the camera. Please grant permission in your device settings.'
      );

      Linking.openSettings();
    }
  };


  if (device == null)
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ margin: 10 }}>Camera Not Found</Text>
      </View>
    );

  return (
    <SafeAreaView style={[backgroundStyle, {flex:1}]}>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header currentPage={"scan"}/>
      <View style={{flexDirection:'column', flexGrow:1}}>
        <Camera
          codeScanner={codeScanner}
          style={{width:300, aspectRatio:1/1, alignSelf:'center'}}
          device={device}
          isActive={true}
          torch={'off'}
          onTouchEnd={() => setEnableOnCodeScanned(true)}
        />
        <View style={{flexDirection:'column', margin:20, gap:15, flexGrow:1}}>
          <Text style={{color:colors.white, fontSize:20, fontWeight:'bold'}}>RESULTATS</Text>
          <Objects key={0} mode="result"></Objects>

          <View style={{flexDirection:'row', padding:10}}>
            <TextInput style={{height:70, flex:1, backgroundColor:colors.dark, color:colors.green, textAlign:'center'}}></TextInput>
            <View style={{height:70, aspectRatio:1/1, backgroundColor:colors.green, alignItems:'center', justifyContent:'center'}}>
              <Image source={require("../img/arrow.png")} style={{width:25}}></Image>
            </View>
          </View>
        </View>
      </View>
      <ModeSelector currentMode={modeSaisie} clickFunction={setModeSaise}></ModeSelector>
    </SafeAreaView>
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

export default ScanPage;
