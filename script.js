let userScore = 0;
let computerScore = 0;
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll('.choice');

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    return options[Math.floor(Math.random()*3)];
}


const draw = () =>{
    console.log("game was draw");
    msg.innerText = 'Game was draw';
    msg.style.backgroundColor = '#081b31';
}

const showwinner= (userchoice,cmpchoice,userwin) =>{
    if(userwin){
        console.log("you won");
        msg.innerText = `You won! Your ${userchoice} beats ${cmpchoice}`;
        msg.style.backgroundColor = 'green';
        userScore++;
        document.querySelector('#user-score').innerText = userScore;
    }else{
        console.log("you lose");
        msg.innerText = `You lose! ${cmpchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = 'red';
        computerScore++;
        document.querySelector('#computer-score').innerText = computerScore;
    }
    if(userScore == 10 || computerScore == 10){
        if(userScore == 10){
            alert("You won the game");
        }else{
            alert("You lose the game");
        }
        userScore = 0;
        computerScore = 0;
        document.querySelector('#user-score').innerText = 0;
        document.querySelector('#computer-score').innerText = 0;
        document.querySelector('#msg').innerText = "Play your Move to display result";
        msg.style.backgroundColor = '#081b31';
    }
}
const playgame = (userchoice) =>{
    console.log("user choosed "+userchoice);
    //computer choice
    const cmpchoice = genCompChoice();
    console.log("Computer choosed "+cmpchoice);
    if(userchoice === cmpchoice){
        draw();
    }else{
        let userwin = true;
        if(userchoice=="rock"&&cmpchoice=="scissors"){
            userwin = true;
        }else if(userchoice=="paper"&&cmpchoice=="rock"){
            userwin = true;
        }else if(userchoice=="scissors"&&cmpchoice=="paper"){
            userwin = true;
        }else{
            userwin = false;
        }
        showwinner(userchoice,cmpchoice,userwin);
    }
}
choices.forEach((choice) => {    
    choice.addEventListener('click', () => {
        console.log(choice.id);
        playgame(choice.id);
    })
})


