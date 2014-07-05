/** Crie uma função letterFrequence(text) que retorne um objeto contendo a
 * quantidade de ocorrências de cada caracter presente no texto.
 */
 
function letterFrequence(text) {
  var strings = text.split(''),
      word = {};

  for (var i = 0; i < strings.length; i++) {
    if (!word[strings[i]]) {
      word[strings[i]] = 0;
    }
    word[strings[i]]++
  }
  return word;
}
