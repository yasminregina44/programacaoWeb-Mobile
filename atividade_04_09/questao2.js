function media(array) {
  if (array.length === 0) {
    return 0;
  }

  const soma = array.reduce((acumulador, numero) => acumulador + numero, 0);
  const media = soma / array.length;

  return media;

};

module.exports.media = media;