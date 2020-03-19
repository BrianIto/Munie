import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

const Saldo = props => {
  const data1 = [1, 2, 4, 2, 3, 1, 2.5, 5, 3.6];
  const data2 = [1, 1, 3, 2, 1, 2, 2, 1, 3];
  const data = [
    {data: data2, svg: {stroke: '#333333'}},
    {data: data1, svg: {stroke: '#FA8600'}},
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saldo Atual</Text>
      <Text style={styles.saldo}>R$ 1.284,00</Text>
      <LineChart
        style={{height: 125}}
        curve={shape.curveNatural}
        data={data}
        contentInset={{top: 20, bottom: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  text: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#FFF',
    fontWeight: '300',
  },
  saldo: {
    fontSize: 35,
    color: '#FFF',
    marginBottom: 10,
    fontWeight: '600',
  },
});

export default Saldo;
