let currentQuestion = 1;
let lastQuestion = null;

function nextQuestion() {
  document.getElementById('question' + currentQuestion).classList.remove('active');
  if (document.getElementById('question' + (currentQuestion + 1))) {
    currentQuestion++;
  } else {
    lastQuestion = 'question' + currentQuestion;
    showResults();
    return;
  }
  if (document.getElementById('question' + currentQuestion)) {
    document.getElementById('question' + currentQuestion).classList.add('active');
  }
}
function previousQuestion() {
  document.getElementById('question' + currentQuestion).classList.remove('active');
  hideResults();

  if (lastQuestion == null && currentQuestion > 1) {
    currentQuestion--;
  } else if (lastQuestion) {
    document.getElementById(lastQuestion).classList.add('active');
    lastQuestion = null;
    return;
  }
  if (document.getElementById('question' + currentQuestion)) {
    document.getElementById('question' + currentQuestion).classList.add('active');
  }
}
function showResults() {
  console.log('showresults called');
  document.getElementById('question' + currentQuestion).classList.remove('active');
  const answer1 = document.querySelector('input[name="question1"]:checked')?.value || 'Nothing';
  const answer2 = document.querySelector('input[name="question2"]').value || 'Nothing';
  const answer3 = document.querySelector('select[name="question3"]').value || 'Nothing';
  const answer4 = document.querySelector('input[name="question4"]').value || 'Nothing';
  const activities = document.querySelectorAll('input[name = "question5"]:checked');
  const answer5 = Array.from(activities).map((checkbox) => checkbox.value);
  // also while on results need to hide the next button
  const resultsDiv = document.getElementById('results');
  resultsDiv.style.display = 'block';
  // add the results stuff here
  // for the aditional comments what do?
  resultsDiv.innerHTML =
    '<h3>You Answered:</h3> <p>For question 1 you answered ' +
    answer1 +
    '</p><p>For question 2 you answered ' +
    answer2 +
    '</p><p>For question 3 you answered ' +
    answer3 +
    '</p><p>For question 4 you answered ' +
    answer4 +
    '</p><p>For question 5 you answered ' +
    (answer5.length > 0 ? answer5.join(', ') : 'Nothing') +
    '</p>';
}
function hideResults() {
  const resultsDiv = document.getElementById('results');
  resultsDiv.style.display = 'none';
}
function validateInput() {
  console.log('validateInput called');
  event.preventDefault();
  // validate the input of the questions so they make sense
}
