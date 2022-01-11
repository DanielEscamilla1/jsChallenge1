function veryHard() {
    let userText = prompt("What is 2 * 2?");
    if (userText === "") {
      document.getElementById("Anwser").innerHTML = "No Response";
      console.log('No Response');
    }