// JavaScript Comparison

function myFunction() {
  let age = document.getElementById("age").value;
  if (age < 18) {
    document.getElementById("demo").innerHTML = "child";
  }
   else if (age >= 18 && age < 30) {
    document.getElementById("demo").innerHTML = "young";
  }

   else if (age >= 30) {
    document.getElementById("demo").innerHTML = "old";
  }
    
}
