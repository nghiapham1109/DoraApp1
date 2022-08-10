import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dora.</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Domine-VariableFont_wght',
    fontSize: 30,
    padding: 20,
    alignItems: 'flex-start',
    color: '#000643',
  },
});
