const data = [
  {
    id: 1,
    question: "What country has the highest life expectancy?",
    answers: [
      { answer: "Hong Kong", isCorrect: true },
      { answer: "India", isCorrect: false },
      { answer: "China", isCorrect: false },
      { answer: "Nepal", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "How many minutes are in a full week?",
    answers: [
      { answer: "11000 minutes", isCorrect: false },
      { answer: "10050 minutes", isCorrect: false },
      { answer: "10080 minutes", isCorrect: true },
      { answer: "12000 minutes", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "How many elements are in the periodic table?",
    answers: [
      { answer: "118", isCorrect: true },
      { answer: "120", isCorrect: false },
      { answer: "115", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "How many bones do we have in an ear?",
    answers: [
      { answer: "3", isCorrect: true },
      { answer: "5", isCorrect: false },
      { answer: "2", isCorrect: false },
    ],
  },
];


const gameScreen  = document.querySelector('.game');
const resultScreen  = document.querySelector('.result');
const question  = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const submit  = document.querySelector('.submit');
const play  = document.querySelector('.play');

let qIndex = 0
let correctCount = 0
let wrongCount = 0
let total = 0
let selectedAnswer;

const playAgain = () =>{
qIndex = 0
correctCount = 0
wrongCount = 0
total = 0
showQuestion(qIndex);
}

play.addEventListener('click', ()=>{
  resultScreen.style.display = 'none'
  gameScreen.style.display = 'block'
  playAgain()
})

const showResult = ()=>{
  resultScreen.style.display = 'block'
  gameScreen.style.display = 'none'

  resultScreen.querySelector('.correct').textContent = 
  `Correct Answers : ${correctCount}`

  resultScreen.querySelector('.wrong').textContent = 
  `Wrong Answers : ${wrongCount}`

  resultScreen.querySelector('.score').textContent = 
  `Score : ${(correctCount - wrongCount) *10}`
  
}

const showQuestion = (qNumber) =>{
 if(qIndex === data.length) return showResult()
  selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index)=>
        `
     <div class="answer">
                        <input name="answer" type="radio" id=${index} value=${item.isCorrect} />
                        <label for=${index}>${item.answer}</label>
                    </div>
    `
    ).join('');
    selectAnswer()
};

const selectAnswer = () =>{
  answersContainer.querySelectorAll('input').forEach((el)=>{
    el.addEventListener('click', (e)=>{
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () =>{
  submit.addEventListener('click', ()=>{
    if(selectedAnswer !== null){
selectedAnswer === 'true' ? correctCount++ : wrongCount++
    qIndex++
    showQuestion(qIndex)
    }else{
alert('select an answer');

    }
  })
}

showQuestion(qIndex)
submitAnswer()

