// Rock , paper , sissor Game in JavaScript

let userInput = prompt("Chose  Rock(r), paper(p), sissor(s): ");

let random = Math.floor(Math.random() * 3);
// console.log(random);

let cpu = ["r","p","s"][random]

// let comp = cpu[ Math.floor(Math.random()*cpu.length)] 

const Match = (cpu, userInput)=>{
  
  if(userInput === cpu) {
    alert("Its a tie!!")
  }
  else if(userInput === "r" && cpu === "p" ) {
    return "CPU Wins"
  }
  else if(userInput === "r" && cpu === "s" ) {
    return "YOU Wins"
  }
  else if(userInput === "p" && cpu === "s" ) {
    return "CPU Wins"
  }
  else if(userInput === "p" && cpu === "r" ) {
    return "YOU Wins"
  }
  else if(userInput === "s" && cpu === "r" ) {
    return "CPU Wins"
  }
  else if(userInput === "s" && cpu === "p" ) {
    return "YOU Wins"
  }
}

let result = Match(cpu , userInput)
document.write(`CPU: ${cpu} and YOU: ${userInput} the results are:  ${result}`)
