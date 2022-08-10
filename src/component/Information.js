import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Information = () => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
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
  if (image?.length != 0 && loading === false) {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator>
        {image?.map((item, idx) => {
          return (
            <View key={idx} style={{flexDirection: 'row'}}>
              <View>
                <Image source={{uri: item.url}} style={styles.image} />
              </View>
              <View>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
};

export default Information;

const styles = StyleSheet.create({
  image: {
    width: '20%',
    height: '20%',
    borderRadius: 30,
  },
  text: {
    color: 'black',
    fontSize: 14,
    textAlign: 'justify',
    padding: 20,
  },
});
