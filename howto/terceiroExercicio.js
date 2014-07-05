/** 
 * Escreva uma função isVowel(vowel) que retorne true se a letra
 * informada for uma vogal.
 */
 
function isVowel(vowel) {
  var x = vowel.toLowerCase();
  return ('aeiou'.indexOf(x) >= 0);
}