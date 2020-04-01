/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Button from '../components/Button';
import Header from '../components/header';
import Saldo from '../components/Saldo';
import IncomeOutcome from '../components/IncomeOutcome';
import ModalNewIncome from '../components/modals/NewIncome';
import ModalNewOutcome from '../components/modals/NewOutcome';
import firebase from '@react-native-firebase/app';
import EntradaDAO from '../DAOs/entradaDAO';
import Actions from '../redux/actions/actions';
import {connect} from 'react-redux';
import SaidaDAO from '../DAOs/saidaDAO';
import moment from 'moment';

const IndexPage = props => {
  const setFirebase = async () => {
    return await firebase.app();
  };

  const [incomes, setIncomes] = React.useState([]);

  const secs2Timestamp = secs => secs * 1000;
  const getMomentUTCfromSecs = secs => moment(secs2Timestamp(secs)).utc();

  const createIncomesArray = (entradas, saidas) => {
    let array = [];
    entradas.forEach(entrada => array.push({...entrada, entrada: true}));
    saidas.forEach(saida => array.push({...saida, entrada: false}));
    array.sort((a, b) => {
      let first = getMomentUTCfromSecs(a.data.seconds);
      let second = getMomentUTCfromSecs(b.data.seconds);

      if (first.isAfter(second)) {
        return -1;
      }
      if (first.isBefore(second)) {
        return 1;
      }
      return 0;
    });
    return array;
  };

  React.useEffect(() => {
    let app = null;
    setFirebase().then(application => {
      app = application;
      EntradaDAO.getEntradas().then(entradas => {
        props.getEntradas(entradas);
        SaidaDAO.getSaidas().then(saidas => {
          props.getSaidas(saidas);
          setIncomes(createIncomesArray(entradas, saidas));
        });
      });
    });
  }, [props]);

  const [newIncomeVisible, setNewIncomeVisible] = React.useState(false);
  const [newOutcomeVisible, setNewOutcomeVisible] = React.useState(false);
  return (
    <ScrollView style={styles.container}>
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
        {incomes.map(income => (
          <IncomeOutcome
            key={income.id}
            isEntrada={income.entrada}
            valores={income}
          />
        ))}
      </View>
    </ScrollView>
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

const mapStateToProps = state => ({
  entradas: state.entradas.entradas,
  saidas: state.saidas.saidas,
});

const mapDispatchToProps = dispatch => ({
  getEntradas: entradas =>
    dispatch({type: Actions.getEntradas, payload: entradas}),
  getSaidas: saidas => dispatch({type: Actions.getSaidas, payload: saidas}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndexPage);
