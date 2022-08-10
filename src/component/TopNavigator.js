/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {createRef, forwardRef, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  findNodeHandle,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {InterpolateConfig, interpolate} from 'react-native-reanimated';
import Index from './MapView/Index';

const images = {
  'Record Walks': <Index />,
  Dashboard: <></>,
};

const data = Object.keys(images).map(i => ({
  key: i,
  title: i,
  image: images[i],
  ref: createRef(),
}));

const {width, height} = Dimensions.get('screen');

const Tab = forwardRef(({item}, ref) => {
  return (
    <View ref={ref}>
      <Text
        style={{
          color: '#4B7ECE',
          fontSize: 20 / data.length,
          textTransform: 'uppercase',
          textAlign: 'center',
          padding: 20,
          alignItems: 'center',
        }}>
        {item.title}
      </Text>
    </View>
  );
});

const Indicator = ({measures, scrollX}) => {
  const inputRange = data.map((_, i) => i * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.x),
  });
  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 2,
        width: indicatorWidth,
        left: 0,
        backgroundColor: 'blue',
        bottom: -1,
        transform: [{translateX}],
      }}
    />
  );
};

const Tabs = ({data, scrollX}) => {
  const [measures, setMeasures] = useState([]);
  const containerRef = useRef();
  useEffect(() => {
    let m = [];
    data.forEach(item => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({
            x,
            y,
            width,
            height,
          });
          if (m.length === data.length) {
            setMeasures(m);
          }
        },
      );
    });
  }, [data]);
  return (
    <View style={{position: 'absolute', top: '-2%', width}}>
      <View
        ref={containerRef}
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        {data.map(item => {
          return <Tab key={item.key} item={item} ref={item.ref} />;
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};
const TopNavigator = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  console.log(data);
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item}) => {
          return (
            <View style={{width, height}}>
              {item.image}
              <View style={[StyleSheet.absoluteFillObject]} />
            </View>
          );
        }}
      />
      <Tabs scrollX={scrollX} data={data} />
    </View>
  );
};

export default TopNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
