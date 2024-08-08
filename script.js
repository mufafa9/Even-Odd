// Function to perform the conversion and update the output
function convertToMiles() {
  const input = document.getElementById("input").value;
  const outputElement = document.getElementById("h2");

  if (input) {
    const output = input / 1.609; // Correct conversion factor
    outputElement.textContent = "Miles: " + output.toFixed(2); // Display the result with 2 decimal places
  } else {
    outputElement.textContent = "Please enter a value.";
  }
}

// Add event listener for button click
document.getElementById("mybtn").addEventListener("click", convertToMiles);

// Add event listener for 'Enter' key press
document.getElementById("input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    convertToMiles();
  }
});
