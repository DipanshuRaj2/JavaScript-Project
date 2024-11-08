let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
//generate Computer choices
const getCompChoice = ()=>{
    //rock, papaer, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = ()=>{
    console.log("game was Draw");
    msg.innerText = "Game Draw Play Again!";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoices)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = (`you Win! Your ${userChoice} beats ${compChoices}`);
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Loose!");
        msg.innerText = (`You Loose! ${compChoices} beats Your ${userChoice}`);
        msg.style.backgroundColor = "red";
    }
};

//user chhoices
const playGames = (userChoice)=>{  
    console.log("user choice = ", userChoice);
    const compChoices = getCompChoice();
    console.log("comp choice = ", compChoices);

    if(userChoice === compChoices){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors , paper
           userWin =  compChoices === "paper" ? false: true;
        }else if(userChoice === "paper"){
            //scissors, rock
            userWin = compChoices === "scissors" ? false: true;
        }
        else if(userChoice === "scissors"){
            //rock, paper
            userWin = compChoices === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoices);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGames(userChoice);
    })
});