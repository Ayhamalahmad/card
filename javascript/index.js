// Get input fields
let inputName = document.querySelector("#input-name");
let inputNumber = document.querySelector("#input-number");
let inputNumber1 = document.querySelector(".input-number1");
let inputDataMM = document.querySelector(".input-data-mm");
let inputDataYY = document.querySelector(".input-data-yy");
let inputCvc = document.querySelector(".input-cvc");
// Get card elements
let cardNumber = document.querySelector(".card-number");
let nameP = document.querySelector(".name-data p");
let nameData = document.querySelector(".name-data span");
let spanMm = document.querySelector(".span-mm");
let spanYY = document.querySelector(".span-yy");
let cvcNumber = document.querySelector(".card-back span");
// Get validation messages
let message = document.querySelector(".span-message");
let messageMM = document.querySelector(".span-message-mm");
let messageCvc = document.querySelector(".span-message-cvc");
let messageYy = document.querySelector(".span-message-yy");
let spanMessageName = document.querySelector(".span-message-name");
// Get confirmation button and form sections
let Confirm = document.querySelector(".confirm");
let formSection = document.querySelector(".form-section");
let addedSection = document.querySelector(".added");
// It checks if the input value matches the pattern of four digits, followed by a space
var inputNumberPattern = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/;
// Set input field max length
inputNumber.maxLength = 19;
// Listen for changes in input fields
document.addEventListener("input", () => {
  // Validate credit card number input
  if (!inputNumber.value.match(inputNumberPattern)) {
    inputNumber1.classList.add("fail");
    message.innerHTML = "Wrong format, numbers only";
    message.classList.add("message");
  } else {
    inputNumber1.classList.remove("fail");
    message.innerHTML = "";
    message.classList.remove("message");
  }
  if (inputNumber.value == "") {
    message.classList.remove("message");
    inputNumber1.classList.remove("fail");
    message.innerHTML = "";
  }

  // Validate other input fields
  let inputFiels = [inputDataMM, inputCvc, inputDataYY,inputName];
  let messagesFiels = [messageMM, messageCvc, messageCvc,spanMessageName];
  inputFiels.forEach((input, index) => {
    if (input.value == "") {
      input.classList.add("fail");
      messagesFiels[index].innerHTML = "can't be blank";
    } else {
      input.classList.remove("fail");
      messagesFiels[index].innerHTML = "";
    }
  });
});

// Update card text based on input values
function UpdateCardText(tolistenElement,toUpdateTextElement){
  tolistenElement.addEventListener("input", () => {
    toUpdateTextElement.innerHTML = tolistenElement.value;
  });
}
UpdateCardText(inputNumber,cardNumber);
UpdateCardText(inputName,nameP);
UpdateCardText(inputDataMM,spanMm);
UpdateCardText(inputDataYY,spanYY);
UpdateCardText(inputCvc,cvcNumber);
// Listen for confirmation button click
Confirm.addEventListener("click", (e) => {
  e.preventDefault();
  formSection.style.display = "none";
  addedSection.style.display = "block";
});
