import firestore from '@react-native-firebase/firestore';

const SaidaDAO = {
  getSaidas: async () => {
    let docArray = [];
    let docs = await firestore()
      .collection('saidas')
      .get();
    docs.forEach(doc => {
      docArray.push({...doc.data(), id: doc.id});
    });
    return docArray;
  },
  novaSaida: async saida => {
    await firestore()
      .collection('saidas')
      .add(saida);
  },
};

export default SaidaDAO;
