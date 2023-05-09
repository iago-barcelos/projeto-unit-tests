/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// Requisito 1 -

// eslint-disable-next-line sonarjs/cognitive-complexity
const average = (numeros) => {
  let soma = 0;

  if (numeros.length === 0) {
    return undefined;
  }

  // eslint-disable-next-line no-undef
  for (i = 0; i < numeros.length; i += 1) {
    // eslint-disable-next-line no-undef
    if (typeof numeros[i] !== 'number') {
      return undefined;
    }

    // eslint-disable-next-line no-restricted-globals, no-undef
    if (isNaN(numeros[i])) {
      return undefined;
    }
    // eslint-disable-next-line no-undef
    soma += numeros[i];
  }

  const media = soma / numeros.length;

  return Math.round(media);
};

module.exports = average;
