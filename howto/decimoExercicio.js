/**
 * Escreva uma função primes(start, end) que retorne um array contendo os
 * números primos deste intervalo. Números primos são aqueles maiores que 1
 * e divisíveis apenas por 1 e ele mesmo.
 */
 
function prime(n) {
  for (var i = 2; i < n; i++) {
    if(n % i === 0) {
      return false;
    }
  }
  return true;
}

function primes(start, end) {
  var numbers = [];

  for (var i = start; i <= end; i++) {
    if(prime(i)) {
      numbers.push(i);
    }
  }

  return numbers;
}
