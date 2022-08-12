import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Information = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d514196c2b7d43b4938414a02371668b',
      )
      .then(function (response) {
        // handle success
        setData(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  if (data?.length !== 0 && loading === false) {
    return (
      <View>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator>
          {data?.map((item, idx) => {
            return (
              <View key={idx}>
                <MaterialIcons
                  name="navigate-next"
                  size={35}
                  style={styles.nextButton}
                />
                <View style={styles.containerImage}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.urlToImage,
                    }}
                  />
                </View>
                <View style={styles.containerText}>
                  <Text style={styles.headerNews}>{item.title}</Text>
                  <Text style={styles.bodyNews}>{item.description}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
};

export default Information;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containerImage: {
    flex: 0.2,
    margin: 10,
    alignItems: 'center',
  },
  containerText: {
    flex: 0.8,
    width: '80%',
    alignContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: '80%',
    height: 200,
    // borderRadius: 30,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'justify',
  },
  headerNews: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    // paddingLeft: 20,
    // paddingRight: 20,
    // paddingTop: 15,
    margin: 10,
    textAlign: 'justify',
  },
  bodyNews: {
    color: '#222',
    fontSize: 14,
    // paddingLeft: 20,
    // paddingRight: 20,
    // height: 80,
    margin: 10,
    textAlign: 'justify',
  },
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    position: 'absolute',
    top: '50%',
    marginLeft: '90%',
  },
});
