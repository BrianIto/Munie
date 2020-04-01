import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from "react-redux";

const Header = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.pic} source={require('../assets/photo.jpg')} />
      <Text style={styles.text}>Brian & Kamylla</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingTop: 18,
    flexDirection: 'row',
  },
  pic: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginLeft: 10,
    alignSelf: 'center',
    color: '#FFF',
    fontWeight: '300',
  },
});



export default (Header);
