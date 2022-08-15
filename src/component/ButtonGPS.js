import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ButtonGPS = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.buttonGPS}>
          <FontAwesome5 name="poop" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonGPS}>
          <FontAwesome5 name="camera" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonGPS}>
          <FontAwesome name="location-arrow" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonGPS;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'absolute',
    width: '15%',
    height: 'auto',
    backgroundColor: 'white',
    top: '42.5%',
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
