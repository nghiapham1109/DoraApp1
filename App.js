import React from 'react';
import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from './src/component/BottomSheet';
import Header from './src/component/Header';
import Index from './src/component/MapView/Index';
import TopNavigator from './src/component/TopNavigator';
export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <Header />
        {/* <Index /> */}
        <TopNavigator />
        <BottomSheet />
      </View>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
