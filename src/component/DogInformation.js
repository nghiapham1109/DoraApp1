import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Entypo from 'react-native-vector-icons/Entypo';
const DATA = [
  {
    id: 1,
    imageDog:
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
    nameDog: 'Gage',
    date: '15-Aug, 2022',
    time: '06:30AM',
    distance: '3.0km',
  },
  {
    id: 2,
    imageDog:
      'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600',
    nameDog: 'Brad',
    date: '16-Aug, 2022',
    time: '07:30AM',
    distance: '5.0km',
  },
  {
    id: 3,
    imageDog:
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600',
    nameDog: 'Drew',
    date: '16-Aug, 2022',
    time: '05:00AM',
    distance: '5.0km',
  },
  {
    id: 4,
    imageDog:
      'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=600',
    nameDog: 'Elias',
    date: '16-Aug, 2022',
    time: '10:10AM',
    distance: '5.0km',
  },
  {
    id: 5,
    imageDog:
      'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600',
    nameDog: 'Cody',
    date: '16-Aug, 2022',
    time: '11:15PM',
    distance: '5.0km',
  },
];
const DogInformation = () => {
  const [data, setData] = useState([]);
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View>
        {DATA.map((item, idx) => {
          return (
            <View key={idx} style={{flexDirection: 'row'}}>
              <View style={styles.container}>
                <Image source={{uri: item.imageDog}} style={styles.image} />
              </View>
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('Press');
                  }}
                  style={styles.nextNavigate}>
                  <Entypo name="arrow-bold-right" size={20} />
                </TouchableOpacity>
                <View>
                  <Text style={styles.title}>Evening Walk</Text>
                  <Text style={styles.text}>{item.nameDog}</Text>
                  <Text style={styles.text}>
                    {item.date}, {item.time}
                  </Text>
                  <Text style={styles.text}>Distance: {item.distance}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default DogInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  image: {
    height: 150,
    width: '100%',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
  },
  title: {
    textAlign: 'center',
    padding: 10,
    color: '#0057C1',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    padding: 10,
    fontSize: 14,
    textAlign: 'justify',
  },
  nextNavigate: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    marginTop: '40%',
    marginLeft: '80%',
    left: '7%',
  },
});
