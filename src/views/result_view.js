const PubSub = require('../helpers/pub_sub.js');
const ResultView = function() {

}

ResultView.prototype.formatEvaluation = function(number, evaluation) {
  if(evaluation === true) {
    return `${number} is a prime number`;
  } else {
    return `${number} is not a prime number`;
  }
}

ResultView.prototype.displayResult = function(number, evaluation) {
  const result = document.querySelector('#result');
  result.textContent = this.formatEvaluation(number, evaluation);
}

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('PrimeChecker:result-evaluated', (event) => {
    const evaluatedNumber = event.detail.number;
    const evaluationResult = event.detail.evaluation;
    this.displayResult(evaluatedNumber, evaluationResult);
  });
}

module.exports = ResultView;
