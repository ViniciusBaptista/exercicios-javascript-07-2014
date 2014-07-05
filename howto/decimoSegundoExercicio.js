/**
 * Escreva uma função pad(text, size, character) que retorna um texto no
 * tamanho especificado quando ele for menor, usando o caracter especificado
 * como complemento. Se nada for passado, use um espaço.
 */
 
function pad(text, size, character) {
  var str = '';
  if (character === undefined) {
    character = ' ';
  }

  for (var i = 0; i < size; i++) {
    if (i < text.length) {
      str += text[i]
    } else {
      str += character;
    }
  }
  return str;
}
