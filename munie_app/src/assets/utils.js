const entradasMenosSaidas(entradas, saidas) => {
    const reducer = (a, v) => a + v.valor;
    return array.reduce(entradas) - array.reduce(saidas);
};

export {entradasMenosSaidas};