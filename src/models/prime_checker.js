const PubSub = require('../helpers/pub_sub.js');
const PrimeChecker = function () {

}

PrimeChecker.prototype.checkIfPrime = function(number) {
  let primeFlag = true
  if(number <= 1) {
    primeFlag = false;
  }
  for(let x = 2; x < number; x++) {
    if(number % x === 0) {
      primeFlag = false;
    }
  }

  return primeFlag;
  console.log(primeFlag);
}

PrimeChecker.prototype.bindEvents = function() {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputNumber = event.detail;
    const result = this.checkIfPrime(inputNumber);
    PubSub.publish('PrimeChecker:result-evaluated', result);
  })
}

module.exports = PrimeChecker;
