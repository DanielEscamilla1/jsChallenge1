function myFunction() {
    let userText = prompt("How are you doing?");
    if (userText === "") {
      document.getElementById("Anwser").innerHTML = "No Response";
      console.log('No Response')
    }
    else if (userText === userText.toUpperCase()){
        document.getElementById("Anwser").innerHTML = "You Shouted!";
        console.log('You Shouted!')
    }
    else if (userText === userText.toLowerCase()){
        document.getElementById("Anwser").innerHTML = "You Whispered.";
        console.log('You Whispered.')
    }
    else {
        document.getElementById("Anwser").innerHTML = "invalid entry";
        console.log('invalid entry')
    }
  }