import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const IncomeOutcome = props => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.descContainer}>
          <Text style={[styles.text, {fontSize: 16}]}>
            Descrição do Produto Adquirido
          </Text>
          <Text style={[styles.text, {fontWeight: '700', fontSize: 16}]}>
            R$35,00
          </Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={[styles.text, styles.textDay]}>25</Text>
          <Text style={styles.text}>JAN</Text>
          <Text style={[styles.text, {fontSize: 11}]}>19:35</Text>
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
    borderLeftColor: '#58A600',
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
