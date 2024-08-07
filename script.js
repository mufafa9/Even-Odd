let output;
let input;

document.getElementById("mybtn").onclick= function(){
   input= Document.getElementById("input").value;
   output=input * 1.609;
   document.getElementById("h2").textContent=output;
};
console.log("")