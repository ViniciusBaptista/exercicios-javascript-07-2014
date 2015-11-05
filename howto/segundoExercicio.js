/**
 * Altere a função max() para receber qualquer quantidade de
 * argumentos e retornar o maior número dentre eles.
 */
 function max() {
  var maior = 0;
  
  for(var i = 0; i < arguments.length; i++) {
   if(maior < arguments[i])
   maior = Math.max(arguments[i]);
  }
  
  return maior;
 }
