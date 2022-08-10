import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
const {height} = Dimensions.get('screen');
const ButtonRecord = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>Record Walks</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonRecord;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '50%',
    height: 60,
    backgroundColor: '#2A64C4',
    top: '55%',
    left: '25%',
    right: '25%',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 1)',
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    padding: 20,
    color: 'white',
  },
});
