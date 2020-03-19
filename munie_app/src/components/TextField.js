import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const TextField = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.label}</Text>
      <TextInput
        style={styles.textInput}
        onChange={props.onChange}
        keyboardType={props.keyboardType}
        placeholder={props.placeholder}
      />
    </View>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  keyboardType: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 15,
  },
  text: {
    color: '#FFF',
  },
  textInput: {
    borderBottomWidth: 1,
    paddingTop: 4,
    paddingBottom: 5,
    color: '#FFF',
    borderBottomColor: '#FFF',
  },
});

export default TextField;
