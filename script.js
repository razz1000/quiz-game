
// These are the questions that are all constant. I will use these instead of pulling from the api. 
const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];
 

  // First I will make a div for displaying the questions on the page (the questions[something].question) DONE! 
  // I will then add them all as in seperate divs.  DONE! 
  // Then I will try and get at least the "questions asked" to display in seperate divs. using Radio buttons ??? 
  // afterwards I guess I will have to add Radio buttons and attach the correct and incorrect values to them. 


// This is the function that creates the divs which displays the questions from the above objects:
let createTheContainersForTheQuestions = () => {
    let questionsContainer = document.querySelector(".questions-section");
    for (let i = 0; i < questions.length; i++) { 
        let newDiv = document.createElement("div");
        let newDiv2 = document.createElement("div");
        let newDiv3 = document.createElement("div");

        newDiv.innerText += questions[i].question;
        newDiv2.innerText += questions[i].correct_answer;
        newDiv3.innerText += questions[i].incorrect_answers;
        
        questionsContainer.appendChild(newDiv);
        newDiv.appendChild(newDiv2)
        newDiv.appendChild(newDiv3)
        
        newDiv.classList.add("individual-questions")
        newDiv2.classList.add("answers")
        newDiv3.classList.add("answers")
 
}
}
createTheContainersForTheQuestions();
 

 let createResultsIntoRadioButtoins = () => {
     let allAnswers = document.querySelectorAll(".answers")
    for (let i = 0; i < allAnswers.length; i++) {
        let incorrectAnswers2 = questions[i].incorrect_answers;
        let correctAnswers2 = questions[i].correct_answer;
        let correctAndIncorrectAnswers = incorrectAnswers2.concat(correctAnswers2);

        const sizes = correctAndIncorrectAnswers;

        const allAnswersInLoop = document.querySelectorAll('.answers')[i];
        allAnswersInLoop.innerHTML += sizes
   .map(
     (size) => `<div>
                 <input type="radio" name="size" value="${size}" id="${size}">
                  <label for="${size}">${size}</label>
             </div>`
   )
   .join(' ');
    }
 }
 createResultsIntoRadioButtoins();


   // Start of trying to add the Radio buttons - Right now it only add for the last one - si I am probably missing an [i] somewhere...
        





 /* 
 let incorrectAnswers2 = questions[1].incorrect_answers;
 let correctAnswers2 = questions[1].correct_answer;
 let correctAndIncorrectAnswers = incorrectAnswers2.concat(correctAnswers2);
 
 const sizes = correctAndIncorrectAnswers; // Here I am grabbing all the answers (However now I do not know which on is the correct one).



 // generate the radio groups   
 const group = document.querySelector('#group');
 group.innerHTML = sizes
   .map(
     (size) => `<div>
                 <input type="radio" name="size" value="${size}" id="${size}">
                  <label for="${size}">${size}</label>
             </div>`
   )
   .join(' ');
 */
/* 
              // add an event listener for the change event
        const radioButtons = document.querySelectorAll('input[name="size"]');
        for(const radioButton of radioButtons){
            radioButton.addEventListener('change', showSelected);
        }        
        
        function showSelected(e) {
            console.log(e);
            if (this.checked) {
                document.querySelector('#output').innerText = `You selected ${this.value}`;
            }
        }

let createRadioButtons = () => {
    let newInputField = document.createElement("input");
    newInputField.type = "radio"
    newInputField.id = "radiobutton"
    newInputField.value = 1;

}

 */








/* 
let createRadioButtons = () => {
    let questionsContainer = document.querySelector(".questions-section");
    let individualQuestions = document.querySelectorAll(".individual-questions"); 
    
    for (let i = 0; i < questions.length; i++) {
    let newDivForAnswers = document.createElement("div");

/*     let correctAnswers = questions[i].correct_answer; */ //This returns a single String Output
   /*  let incorrectAnswers = questions[i].incorrect_answers; //This returns another Array
    
    newDivForAnswers.innerText += questions[i].correct_answer; 
    questionsContainer.appendChild(newDivForAnswers)
    newDivForAnswers.classList.add("correct-answer")
}}
 */



/* 
  window.onload = function () {
    alert("Hello")
};
     */