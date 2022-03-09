function computerPlay() {
    let options = ["Rock","Scissors","Paper"];

   const random = Math.floor(Math.random()*options.length);
    return options[random];
    
      
  
    
}



//const playerSelection = prompt("Choose bteween: Rock, Paper and Scissors");
//const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){

 
   let player= playerSelection.toLowerCase();
   let computer = computerSelection.toLowerCase();
    
    if(player=='scissors'&&computer=='rock'||player=='paper'&&computer=='scissors'||player=='rock'&&computer=='paper'){
        return `You Lose! ${computer} beats ${player}`;
    }else if(player=='rock'&&computer=='scissors'||player=='scissors'&&computer=='paper'||player=='paper'&&computer=='rock'){
        return `You won! ${player} beats ${computer}`;
    }else if(player=='scissors'&&computer=='scissors'||player=='paper'&&computer=='paper'||player=='rock'&&computer=='rock'){
        return 'DRAW!!!';
    }else{
        return 'sorry, those are not valid options';
    }
    
  
    
}





function game(){
  

 
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose bteween: Rock, Paper and Scissors");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
     
    }
  
 
}


game()