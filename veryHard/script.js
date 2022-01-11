function veryhard() {
  num1 = Number(prompt("First Number?"));
  numOpertor= prompt("Enter a math operation +, -, *, or /");
  num2 = Number(prompt("Second Number?"));

  if (numOpertor === "+") {
      add();
  }
  else if (numOpertor === "-") {
      subtract();
  }
  else if (numOpertor === "*") {
      multiply();
  }
  else if (numOpertor === "/") {
      divide ();
  }
  else {
      console.log(`Invlaid math opertor used`);
  }
}