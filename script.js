function checkEvenOrOdd() {
  const input = document.getElementById("input").value;
  const outputElement = document.getElementById("h2");

  if (input) {
    if (input % 2 === 0) {
      outputElement.textContent = input + " is even.";
    } else {
      outputElement.textContent = input + " is odd.";
    }
  } else {
    outputElement.textContent = "Please enter a value.";
  }
}

// Add event listener for button click
document.getElementById("mybtn").addEventListener("click", checkEvenOrOdd);

// Add event listener for 'Enter' key press
document.getElementById("input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkEvenOrOdd();
  }
});
