let inputElement = document.querySelector(".inputElem");
let submitButton = document.querySelector(".submitBtn");
let submitParentElem = document.querySelector(".submitParentElem");
let resultOfNum = document.querySelector(".resultOfNum");

const checkOddOrEven = (e) => {
    e.preventDefault(); // prevent the form from submitting
    if (inputElement.value) {
        resultOfNum.textContent = `${inputElement.value} is ${inputElement.value % 2 === 0 ? 'Even' : 'Odd'}`;
        inputElement.value = '';
    }
};

const showAndHideSubmitBtn = () => {
    submitParentElem.style.display = inputElement.value ? 'inline-block' : 'none';
};

inputElement.addEventListener('keyup', showAndHideSubmitBtn);
submitButton.addEventListener('click', checkOddOrEven);
