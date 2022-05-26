import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';


export default function App() {
  console.log('Testing app');

  return (
/*     (Platform.OS === 'web' ? 
      <iframe src='http://localhost:1337/#/home' width={'100%'} height={'100%'}>
      <View style={{ flex: 1 }}>
        <WebView
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          marginTop: '20px'
        }}
        originWhitelist={["*"]}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        source={{
          uri: 'http://localhost:1337/#/home'
        }}
      />
      </View>
    </iframe> :  */
      <WebView
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          borderColor: 'red',
          borderWidth: 10,
          overflow: 'hidden',
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'center',
          backgroundColor: 'green',
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        source={{
          uri: 'http://localhost:1337/#/home'
        }}
      />
  )
  //);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
