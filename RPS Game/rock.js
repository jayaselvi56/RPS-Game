let score = JSON.parse(localStorage.getItem('score')) ||  { wins: 0, losses: 0, ties: 0};
 update();

 let isAutoPlaying = false;
let  intervalId;
 function autoPlay() {
    if (!isAutoPlaying) {
    
        intervalId = setInterval(function () {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoPlaying = true;

    }else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }

 }
     
 function playGame(playerMove){
     
     const computerMove = pickComputerMove();
     let result = '';

     if (playerMove === 'scissors') {
         if (computerMove === 'rock') {
         result='You lose.';
         }
         else if (computerMove === 'paper') {
             result = 'You win.'
         }
         else if (computerMove === 'scissors') {
             result = 'Tie.'
         }
  
     } else if (playerMove === 'paper') {
    
         if (computerMove === 'rock') {
             result='You win.';
         }
         else if (computerMove === 'paper') {
             result = 'Tie.'
         }
         else if (computerMove === 'scissors') {
             result = 'You lose.'
         }

    }else if (playerMove === 'rock') {
     
         if (computerMove === 'rock') {
         result='Tie.';
         }
         else if (computerMove === 'paper') {
         result = 'You lose.'
         }
         else if (computerMove === 'scissors') {
         result = 'You win.'
         }
     }
     
     if(result === 'You win.') {
         score.wins += 1;
     }else if (result === 'You lose.') {
         score.losses +=1;
     }else if (result === 'Tie.') {
         score.ties +=1;
     }

     localStorage.setItem('score',JSON.stringify(score));

     update();

     document.querySelector('.js-result')
      .innerHTML = result;

      document.querySelector('.js-move')
       .innerHTML = `You 
       <img src="img/${playerMove}.png" class="move-icon">
       <img src="img/${computerMove}.png" class="move-icon">
       Computer`;

    /* document.querySelector('.js-move')
      .innerHTML = `You 
    <img src="img/${playerMove}.png" class="move-icon">
    <img src="img/${computerMove}.png" class="move-icon">
    Computer`;
     /*alert(`You picked ${playerMove}.Computer picked ${computerMove}. ${result}
Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`);*/
 }

 function update() {
     document.querySelector('.js-score')
       .innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`

 }

 function pickComputerMove() {
     const randNo= Math.random();
     let computerMove = '';

     if (randNo >= 0 && randNo < 1/3) {
     computerMove ='rock';
     }
     else if (randNo >= 1/3 && randNo < 2/3) {
     computerMove ='paper';
     }
     else if (randNo >= 2 && randNo < 1){
     computerMove ='scissors';
     }
     return computerMove;
 }

