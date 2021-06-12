const quizData =[
    {
      question:"how are you ?",
      a: 'fine',
      b: 'cool',
      c: 'moody',
      d: 'not good',
      correct: 'a',
    },
    {
        question:"how are you ?",
        a: 'fool',
        b: 'cool',
        c: 'doom',
        d: 'not good',
        correct: 'b',
      },
      {
        question:"how are you ?",
        a: 'fine',
        b: 'cold',
        c: 'moody',
        d: 'not good',
        correct: 'c',
      },
      {
        question:"how are you ?",
        a: 'fine',
        b: 'cool',
        c: 'moody',
        d: 'good',
        correct: 'd',
      },
]

const answersE1s  = document.querySelectorAll(".answers");
const quiz = document.getElementById('quiz');
const questionE1 = document.getElementById('question');
const  a_text = document.getElementById('a_text');
const  b_text = document.getElementById('b_text');
const  c_text = document.getElementById('c_text');
const  d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('Submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectedAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}
 
function getSelected(){

    let answer = undefined;

    answersE1s.forEach((answerE1) => {
      if(answerE1.checked){
          answer = answerE1.id;
      }
    });

   return answer;
}

function deselectedAnswers(){
    answersE1s.forEach((answerE1) => {
     answerE1.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
const answer = getSelected();

if(answer){
    if(answer === quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
    }else{
       quiz.innerHTML = `<h2>you answered correctly at ${score}/${quizData.length} question.</h2><button onclick="location.reload()">Reload</button>`
    }
}
});