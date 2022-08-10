import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const ButtonGPS = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonGPS}>
        <FontAwesome name="location-arrow" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonGPS;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '15%',
    height: 60,
    backgroundColor: 'white',
    top: '55%',
    left: '80%',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  buttonGPS: {
    alignItems: 'center',
    padding: 12,
  },
});
