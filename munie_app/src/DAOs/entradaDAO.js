import firestore from '@react-native-firebase/firestore';

const EntradaDAO = {
  getEntradas: async () => {
    let docArray = [];
    let docs = await firestore()
      .collection('entradas')
      .get();
    docs.forEach(doc => {
      docArray.push({...doc.data(), id: doc.id});
    });
    return docArray;
  },
  novaEntrada: async entrada => {
    await firestore()
      .collection('entradas')
      .add(entrada);
  },
};

export default EntradaDAO;
