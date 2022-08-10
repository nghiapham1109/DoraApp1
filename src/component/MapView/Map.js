import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const Map = () => {
  const [state, setState] = useState({
    pickupCords: {
      latitude: 16.047079,
      longitude: 108.20623,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCords: {
      latitude: 21.028511,
      longitude: 105.804817,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const {pickupCords, droplocationCords} = state;

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={pickupCords}>
        {/* <MapViewDirections
          origin={pickupCords}
          destination={droplocationCords}
          apikey="AIzaSyBcxEITW5PXATjW-qZb4Rs71GR_0b3z8-s"
          strokeWidth={5}
          strokeColor="hotPink"
        /> */}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
