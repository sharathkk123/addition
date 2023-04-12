function addNumbers() {
  // Get the value of the input fields
  var num1 = parseInt(document.getElementById("num1").value);

  var num2 = parseInt(document.getElementById("num2").value);

  // Add the numbers together
  var result = num1 + num2;

  // Display the result in the result div
  document.getElementById("result").innerHTML = "The result is: " + result;
}
