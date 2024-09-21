let inputElement = document.querySelector(".inputElem");
let submitButton = document.querySelector(".submitBtn");
let submitParentElem = document.querySelector(".submitParentElem");
let resultOfNum = document.querySelector(".resultOfNum");

const checkOddOrEven = (e) => {
    e.preventDefault(); // prevent form submission
    const number = parseInt(inputElement.value);
    if (!isNaN(number)) { // Validate that it's a number
        resultOfNum.textContent = `${number} is ${number % 2 === 0 ? 'Even' : 'Odd'}`;
        inputElement.value = '';
    } else {
        resultOfNum.textContent = "Please enter a valid number.";
    }
};

const showAndHideSubmitBtn = () => {
    submitParentElem.style.display = inputElement.value ? 'inline-block' : 'none';
};

inputElement.addEventListener('keyup', showAndHideSubmitBtn);
submitButton.addEventListener('click', checkOddOrEven);
