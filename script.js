
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
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesnt get modified?",
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
  // Then I will try and get at least the "questions asked" to display in seperate divs. using Radio buttons ??? DONE! 
  // afterwards I guess I will have to add Radio buttons and attach the correct and incorrect values to them. DONE! 
  // So, how do I get the value if the correct field is marked?????



  // This is the function that creates the divs which displays the questions from the above objects:
let createTheContainersForTheQuestions = () => {
    let questionsContainer = document.querySelector(".questions-section");
    for (let i = 0; i < questions.length; i++) { 
        let newDiv = document.createElement("div");
        let newDiv2 = document.createElement("div");
        let newDiv3 = document.createElement("div");

        newDiv.innerText += questions[i].question;
/*         newDiv2.innerText += questions[i].correct_answer;
        newDiv3.innerText += questions[i].incorrect_answers; */
        
        questionsContainer.appendChild(newDiv);
        newDiv.appendChild(newDiv2)
        /* newDiv.appendChild(newDiv3) */
        
        newDiv.classList.add("individual-questions")
        newDiv2.classList.add("answers")
        newDiv3.classList.add("answers2")
}
}
createTheContainersForTheQuestions();
 

// This below function creates the radio buttons and adds an event listener to it
 let createResultsIntoRadioButtoins = () => {
     let allAnswers = document.querySelectorAll(".answers")
    for (let i = 0; i < allAnswers.length; i++) {
        let incorrectAnswers2 = questions[i].incorrect_answers;
        let correctAnswers2 = questions[i].correct_answer;
        let correctAndIncorrectAnswers = incorrectAnswers2.concat(correctAnswers2);

        const sizes = correctAndIncorrectAnswers; // I put the correct and incorrect answers into 1 variable 

        const allAnswersInLoop = document.querySelectorAll('.answers')[i]; // Need this here again as I need to loop through it. Cannot do that above. 
        allAnswersInLoop.innerHTML += sizes
   .map(
     (size) => `<div>
                 <input type="radio" name="${questions[i].question}" value="${size}" id="${size}">
                  <label for="${size}">${size}</label>
             </div>`
   )
   .join(' ');
     // This below add the eventlistener
     const radioButtons = document.getElementsByTagName('input');
    for(const radioButton of radioButtons){
         radioButton.addEventListener('click', showSelected);
     }        
     // This is the function that shows what I showing the event firering in Console.log as well as in the #output field
     function showSelected(e) {
         console.log(e);
         if (this.checked) {
            document.querySelector('#output').innerText = `You selected ${this.value}`;
            

            // THIS LAST PART IS NOT WORKING AT THE MOMENT
            }
         else if (this.checked == correctAnswers2)  {
            document.querySelector('#output2').innerText = `These are your points: ${this.value}`
         }
        }
    }
 }
 createResultsIntoRadioButtoins();