import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Information = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(json => {
        setImage(json.data);
      })
      .catch(error => {
        console.log(
          'There has been a problem with your axios operation: ' +
            error.message,
        );
        throw error;
      });
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator>
      {image?.map((item, idx) => {
        return (
          <View key={idx}>
            <Text style={styles.text}>{item.id}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Information;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '50%',
    borderRadius: 30,
  },
  text: {
    color: 'black',
    fontSize: 14,
    textAlign: 'justify',
    padding: 20,
  },
});
