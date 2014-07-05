/**
 * Escreva uma função titleize(text) que converte cada primeira letra de cada
 * palavra em maiúsculas.
 *
 * titleize("this IS just A tExT"); // This Is Just A Text.
 */

function titleize(text) {
  var title = text.split(' '),
      result = [];

  for (var i = 0; i < title.length; i++) {
    result.push(title[i].charAt(0).toUpperCase() + (title[i].toLowerCase().slice(1)));
  }
  return result.join(' ');
}
