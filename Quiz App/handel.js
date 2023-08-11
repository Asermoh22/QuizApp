const quizData = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "The data structure required for Breadth First Traversal on a graph is?",
      a: "Stack",
      b: "Array",
      c: "Queue",
      d: "Tree",
      correct: "c",
    },
    {
      question: "A queue follows which principle?",
      a: "FIFO (First In First Out)",
      b: "LIFO (Last In First Out)",
      c: "Ordered array",
      d: "Linear tree",
      correct: "a",
    },
    {
      question: "The correct sequence of HTML tags for starting a webpage is?",
      a: "Head, Title, HTML, body",
      b: "HTML, Body, Title, Head",
      c: "HTML, Head, Title, Body",
      d: "HTML, Head, Title, Body",
      correct: "d",
    },
    {
      question: "The process of inserting an element in a stack is called",
      a: "Create",
      b: "Push",
      c: "Evaluation",
      d: "Pop",
      correct: "b",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  function loadQuiz() {
    deselectAnswers();
  
    const currentQuizData = quizData[currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
  }
  
  function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <h2> You answered ${score}/${quizData.length} questions correctly.</h2>
          <button onclick="location.reload()">Reload</button>
        `;
      }
    }
  });
  
  // Load the first question
  loadQuiz();