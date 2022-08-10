import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Map from './Map';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ButtonRecord from '../ButtonRecord';
import ButtonGPS from '../ButtonGPS';

const Index = () => {
  return (
    <View style={styles.container}>
      <Map />
      <ButtonRecord />
      <ButtonGPS />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: '10%',
    position: 'absolute',
  },
});
