const inputEmail = window.document.querySelector("#input-email");
const buttonSend = window.document.querySelector("#form-notify > button");
const textMessageInput = window.document.querySelector("#error-message-input");

let valueInputEmail = "";

inputEmail.addEventListener("input", ({ target }) => {
    valueInputEmail = target.value;
});

function validate(valueString) {
    const lettersArray = valueString.split("");
    const isAtSignItems = lettersArray.includes("@");
    const newValueString = valueString.slice(valueString.length - 4, valueString.length);
    
    const isPointExists = (value) => value.includes(".");
    const isCExists = (value) => value.includes("c");
    const isOExists = (value) => value.includes("o");
    const isMExists = (value) => value.includes("m");
    
    let passedPointCom = false;
    
    if(newValueString) {
        const arrayNewValueString = newValueString.split("");
        
        const isToday = 
            isPointExists(arrayNewValueString)
            &&
            isCExists(arrayNewValueString)
            &&
            isOExists(arrayNewValueString)
            &&
            isMExists(arrayNewValueString);

        if(isToday) {
            passedPointCom = true;
        }
    }

    return passedPointCom && isAtSignItems
}

buttonSend.addEventListener("click", () => {

    const isPassed = validate(valueInputEmail);

    if(!isPassed) {
        textMessageInput.style.display = "block";
        textMessageInput.innerText = "Please Provide a valide email address";
        textMessageInput.style.color = "var(--light-red)";
        inputEmail.style.borderColor = "var(--light-red)";
    } else {
        textMessageInput.style.display = "none";
        textMessageInput.innerText = "";
        textMessageInput.style.color = "";
        inputEmail.style.borderColor = "";
    }
});
