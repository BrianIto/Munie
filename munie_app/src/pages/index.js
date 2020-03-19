import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Button from '../components/Button';
import Header from '../components/header';
import Saldo from '../components/Saldo';
import IncomeOutcome from '../components/IncomeOutcome';
import ModalNewIncome from '../components/modals/NewIncome';
import ModalNewOutcome from '../components/modals/NewOutcome';

const IndexPage = props => {
  const [newIncomeVisible, setNewIncomeVisible] = React.useState(false);
  const [newOutcomeVisible, setNewOutcomeVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <ModalNewIncome
        visible={newIncomeVisible}
        onTouchOutside={() => setNewIncomeVisible(false)}
      />
      <ModalNewOutcome
        visible={newOutcomeVisible}
        onTouchOutside={() => setNewOutcomeVisible(false)}
      />
      <View style={styles.decorationBack} />
      <Header />
      <Saldo />
      <View style={styles.buttons}>
        <Button
          onPress={() => {
            setNewIncomeVisible(true);
          }}
          containerStyle={styles.entrada}>
          + Entrada
        </Button>
        <Button
          onPress={() => {
            setNewOutcomeVisible(true);
          }}>
          - Saída
        </Button>
      </View>
      <View style={styles.outcomes}>
        <IncomeOutcome />
        <IncomeOutcome />
        <IncomeOutcome />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373737',
  },
  text: {
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
  entrada: {
    backgroundColor: '#58A600',
  },
  decorationBack: {
    backgroundColor: '#1D1D1D',
    position: 'absolute',
    top: -85,
    borderRadius: 100,
    left: 0,
    height: 520,
    width: Dimensions.get('window').width,
  },
  outcomes: {
    marginTop: 25,
  },
});

export default IndexPage;
