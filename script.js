document.getElementById("mybtn").onclick = function () {
  let input = document.getElementById("input").value;
  if (input) {
    let output = input / 1.609; // Correct conversion factor
    document.getElementById("h2").textContent = "Miles: " + output.toFixed(2); // Display the result with 2 decimal places
  } else {
    document.getElementById("h2").textContent = "Please enter a value.";
  }
};


document.getElementById("input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
  
    let input = document.getElementById("input").value;
    if (input) {
      let output = input / 1.609; // Correct conversion factor
      document.getElementById("h2").textContent = "Miles: " + output.toFixed(2); // Display the result with 2 decimal places
    } else {
      document.getElementById("h2").textContent = "Please enter a value.";
    }
  }
});
