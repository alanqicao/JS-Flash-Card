var cardsData= [
  {question: "When is this used?", answer:"The this property refers to the enclosing context of its invocation and made include a function, object, or global context, wherever it is invoked."},
{question: "How many primitive types does JavaScript have?", answer:"In JavaScript, there are six primitive data types: string, number, boolean, null, undefined, and symbol."},
{question:"When is const used?",answer:"Variables declared by const have their scope in the block in which they are defined like the let statement but also cannot be reassigned or redeclared."}
]


var cardArea_div = document.getElementById("cardArea");
var nextButton_div = document.getElementById("nextButton");
var addNewCard_div = document.getElementById("addNewCard");
var editACard_div = document.getElementById("editACard");
var deleteACard_div = document.getElementById("deleteACard");
nextButton_div.addEventListener("click",nextButtonF);
addNewCard_div.addEventListener("click",newCardF);
editACard_div.addEventListener("click",editACardF);
deleteACard_div.addEventListener("click",deleteACardF)
cardArea_div.addEventListener("click",showCardF)

currentCard = 0


function showCardF(event){
  var isAnswer = event.target.classList.contains("answer");
  cardArea_div.innerHTML = isAnswer ? cardsData[currentCard]["answer"] : cardsData[currentCard]["question"]
  event.target.classList.toggle("answer");
  // cardArea_div.innerHTML = "111"
  
}

function nextButtonF(){
//how many x = [] in cardsData looping x push to currentCard 
currentCard = 
//push number to currentCard
}
function newCardF(){
  // add new sting to carsData
}

function editACardF(){
  // how to edit current card arry
}

function deleteACardF(){
  //delete current sting from carsData arry
}



