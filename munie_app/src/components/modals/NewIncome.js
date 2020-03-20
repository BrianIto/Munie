import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Modal from 'react-native-modals';
import PropTypes from 'prop-types';
import {ModalContent} from 'react-native-modals/src';
import Button from '../Button';
import TextField from '../TextField';
import EntradaDAO from '../../DAOs/entradaDAO';
import Actions from '../../redux/actions/actions';
import {connect} from 'react-redux';

const ModalNewIncome = props => {
  const [entrada, setEntrada] = React.useState({
    descricao: '',
    valor: 0,
    data: new Date(),
  });

  const onSubmit = async () => {
    try {
      await EntradaDAO.novaEntrada(entrada);
      alert('Adicionado com sucesso!');
      const entradas = await EntradaDAO.getEntradas();
      props.getEntradas(entradas);
    } catch (e) {
      alert('Erro ao adicionar! ' + e);
    }
  };

  return (
    <Modal.BottomModal
      visible={props.visible}
      height={0.43}
      width={1}
      onTouchOutside={props.onTouchOutside}>
      <ModalContent style={{flex: 1, backgroundColor: '#1D1D1D'}}>
        <Text style={styles.entradaTitle}>Adicionar Entrada</Text>
        <TextField
          onChange={text => {
            setEntrada({...entrada, descricao: text});
          }}
          label={'Descrição'}
          placeholder={'Ex: Comprar Comida'}
        />
        <TextField
          onChange={text => {
            setEntrada({...entrada, valor: +text});
          }}
          label={'Valor'}
          keyboardType={'numeric'}
          placeholder={'Ex: 3,50'}
        />
        <Button
          onPress={onSubmit}
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

ModalNewIncome.propTypes = {
  visible: PropTypes.bool.isRequired,
  onTouchOutside: PropTypes.func.isRequired,
  modalStyle: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  getEntradas: entradas =>
    dispatch({type: Actions.getEntradas, payload: entradas}),
});

export default connect(
  null,
  mapDispatchToProps,
)(ModalNewIncome);
