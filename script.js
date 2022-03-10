function computerPlay() {

    let options = ["Rock","Scissors","Paper"];

   const random = Math.floor(Math.random()*options.length);
    return options[random];
    
      
  
    
}





/*function playRound(playerSelection, computerSelection){

 
   let player= playerSelection.toLowerCase();
   let computer = computerSelection.toLowerCase();


  
    
    if(player=='scissors'&&computer=='rock'||player=='paper'&&computer=='scissors'||player=='rock'&&computer=='paper'){
        
        
        return 'You Lose! ' + `${computer} beats ${player}` 

    }else if(player=='rock'&&computer=='scissors'||player=='scissors'&&computer=='paper'||player=='paper'&&computer=='rock'){
       
        
        return 'You won! ' + `${player} beats ${computer}` 

    }else if(player=='scissors'&&computer=='scissors'||player=='paper'&&computer=='paper'||player=='rock'&&computer=='rock'){
        return 'DRAW!!!'
    }else{
        return 'sorry, those are not valid options';
    }
    

    
}*/

let userScore = 0;
let compScore = 0;



function playRound(userInput,compInput){

   if(userInput=="scissors"&&compInput=="paper"||userInput=="rock"&&compInput=="scissors"||userInput=="paper"&&compInput=="rock"){
       userScore++;
       return `You won ${userInput} beats ${compInput}`;
   }else if(compInput==userInput){
       userScore++
       compScore++
       return `it's a draw`
   }else if(compInput=="scissors"&userInput=="paper"||compInput=="rock"&&userInput=="scissors"||compInput=="paper"&&userInput=="rock"){
       compScore++;
       return `You lose... ${compInput} beats ${userInput}`
   }else{
       return 'sorry, thats an invalid option :c'
   }
    




    
}






function game(){
  


    for (let i = 0; i < 5; i++) {

  

  let userInput = prompt("Choose between: Rock, Paper or Scissors").toLowerCase();
    let compInput = computerPlay().toLowerCase();
     
       console.log(playRound(userInput,compInput));
       
       
      

    }
    if(userScore>compScore){
        console.log("You have won!")
    }else{
       console.log("you have lost")
    }
     



  
}


game();



