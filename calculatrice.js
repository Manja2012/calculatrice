function calculatrice(a, b, operator) {
  if (isNaN(a) || isNaN(b)) return null;
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return null;
      }
      let resultat = (a / b).toFixed(2).toString();
      console.log(resultat);
      return Number(resultat);
  }
}

module.exports = calculatrice;
