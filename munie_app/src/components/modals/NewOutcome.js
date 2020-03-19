import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Modal from 'react-native-modals';
import PropTypes from 'prop-types';
import {ModalContent} from 'react-native-modals/src';
import Button from '../Button';
import TextField from '../TextField';

const ModalNewOutcome = props => {
  return (
    <Modal.BottomModal
      visible={props.visible}
      height={0.43}
      width={1}
      onTouchOutside={props.onTouchOutside}>
      <ModalContent style={{flex: 1, backgroundColor: '#1D1D1D'}}>
        <Text style={styles.entradaTitle}>Adicionar Saída</Text>
        <TextField label={'Descrição'} placeholder={'Ex: Comprar Comida'} />
        <TextField
          label={'Valor'}
          keyboardType={'numeric'}
          placeholder={'Ex: 3,50'}
        />
        <Button
          containerStyle={{
            width: Dimensions.get('window').width - 40,
            marginLeft: 0,
          }}>
          Confirmar
        </Button>
      </ModalContent>
    </Modal.BottomModal>
  );
};

const styles = StyleSheet.create({
  entradaTitle: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: '800',
  },
});

ModalNewOutcome.propTypes = {
  visible: PropTypes.bool.isRequired,
  onTouchOutside: PropTypes.func.isRequired,
  modalStyle: PropTypes.object,
};

export default ModalNewOutcome;
