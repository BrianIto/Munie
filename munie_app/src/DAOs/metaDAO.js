import firestore from '@react-native-firebase/firestore'

const MetaDAO = {
    getMetas: async () => {
        let docsArray = await firestore()
            .collection('metas')
            .get().map(docSnap => {...docSnap.data(), id: docSnap.id});
        return docsArray;
    },
    newMeta: async meta => {
        await firestore().collection('metas').add(meta);
    },
    // removeMeta: async id => {
    //     await firestore().collection('metas').get(id).remove();
    // }
}

export default MetaDAO;