/**
 * Escreva uma função chamada findLongestWord(words) que retorna a
 * maior palavras baseada na quantidade de caracteres.
 */

function findLongestWords(words) {
  var str = words.split(' '),
    x = 0,
    text;

  for (var i = 0; i < str.length; i++) {
    if(x < str[i].length) {
      x = str[i].length;
      text = str[i];
    }
  }
  return text;
}
