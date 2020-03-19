import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.containerStyle]}>
      <Text style={[styles.text, styles.textStyle]}>{props.children}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13,
    marginLeft: 15,
    justifyContent: 'center',
    elevation: 5,
    width: Dimensions.get('window').width / 2 - 30,
    borderRadius: 5,
    backgroundColor: '#222',
  },
  text: {
    fontSize: 18,
    color: '#FFF',
    textTransform: 'uppercase',
    letterSpacing: 2.3,
    textAlign: 'center',
    fontWeight: 'bold',
  },

});

export default Button;
