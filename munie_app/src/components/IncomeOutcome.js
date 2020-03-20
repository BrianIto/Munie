import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment/min/moment-with-locales.min';
const IncomeOutcome = props => {
  return (
    <View
      style={[
        styles.container,
        props.isEntrada
          ? {borderLeftColor: '#58A600'}
          : {borderLeftColor: '#FF3322'},
      ]}>
      <View style={styles.row}>
        <View style={[styles.descContainer]}>
          <Text style={[styles.text, {fontSize: 18}]}>
            {props.valores.descricao}
          </Text>
          <Text style={[styles.text, {fontWeight: '700', fontSize: 19}]}>
            R${props.valores.valor},00
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={[styles.text, styles.textDay, {textAlign: 'center'}]}>
            {moment(props.valores.data.seconds * 1000)
              .utc()
              .format('DD')}
          </Text>
          <Text style={[styles.text, {textAlign: 'center'}]}>
            {moment(props.valores.data.seconds * 1000)
              .utc()
              .format('MMM')
              .toUpperCase()}
          </Text>
          <Text style={[styles.text, {fontSize: 11, textAlign: 'center'}]}>
            {moment(props.valores.data.seconds * 1000)
              .utc()
              .format('HH:mm')}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#424242',
    marginHorizontal: 10,
    borderRadius: 8,
    borderLeftWidth: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    elevation: 3,
    marginTop: 12,
    color: '#FFF',
  },
  text: {
    color: '#FFF',
  },
  descContainer: {
    flex: 7,
    justifyContent: 'center',
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textDay: {
    fontSize: 25,
  },
});

export default IncomeOutcome;
