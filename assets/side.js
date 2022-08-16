let rock=document.getElementById("rock");
let Scissors=document.getElementById("scissors");
let paper=document.getElementById("paper");
let computerScore=0;
let humanScore=0;
let humanChoice;
let rounds=0;

rock.addEventListener("click",function(){
    let choices=['Rock','Paper','Scissors'];
    let random=Math.round(Math.random()*2);
    let computerChoice=choices[random];
    console.log(computerChoice);
    if(computerChoice=="Rock"){
        document.getElementById("result").innerHTML="Its a tie! Computer also choce rock";
        document.getElementById("score").style.display="flex"
        document.getElementById("cscore").innerHTML=computerScore;
        document.getElementById("hscore").innerHTML=humanScore;
    }
    if(computerChoice=="Paper"){
        document.getElementById("result").innerHTML="You Lose! Paper beats Rock";
        computerScore++
        document.getElementById("score").style.display="flex"
        document.getElementById("cscore").innerHTML=computerScore;
        document.getElementById("hscore").innerHTML=humanScore;
    }
    if(computerChoice=="Scissors"){
        document.getElementById("result").innerHTML="You win! Rock beats Scissors";
        humanScore++;
        document.getElementById("score").style.display="flex"
        document.getElementById("cscore").innerHTML=computerScore;
        document.getElementById("hscore").innerHTML=humanScore;
    }
    rounds++;
    NoofRounds();
    leading();
});
paper.addEventListener("click",function(){
    let choices=['Rock','Paper','Scissors'];
    let random=Math.round(Math.random()*2);
    let computerChoice=choices[random];
    console.log(random)
    if(computerChoice=="Paper"){
        document.getElementById("result").innerHTML="Its a tie! Computer also choce Paper";
        document.getElementById("score").style.display="flex"
        document.getElementById("cscore").innerHTML=computerScore;
        document.getElementById("hscore").innerHTML=humanScore;
    }
    if(computerChoice=="Scissors"){
        document.getElementById("result").innerHTML="You Lose! Scissors beats Paper";
        computerScore++
        document.getElementById("score").style.display="flex"
        document.getElementById("cscore").innerHTML=computerScore;
        document.getElementById("hscore").innerHTML=humanScore;
    }
    if(computerChoice=="Rock"){
        document.getElementById("result").innerHTML="You win! Paper beats Rock";
        humanScore++;
        document.getElementById("score").style.display="flex"
        document.getElementById("cscore").innerHTML=computerScore;
        document.getElementById("hscore").innerHTML=humanScore;
    }
    rounds++;
    NoofRounds();
    leading();
});
Scissors.addEventListener("click",function(){
    let choices=['Rock','Paper','Scissors'];
    let random=Math.round(Math.random()*2);
    let computerChoice=choices[random];
    if(computerChoice=="Scissors"){
        document.getElementById("result").innerHTML="Its a tie! Computer also choce Scissors";
        document.getElementById("score").style.display="flex"
        document.getElementById("cscore").innerHTML=computerScore;
        document.getElementById("hscore").innerHTML=humanScore;
    }
    if(computerChoice=="Rock"){
        document.getElementById("result").innerHTML="You Lose! Rock beats Scissors";
        computerScore++
        document.getElementById("score").style.display="flex"
        document.getElementById("cscore").innerHTML=computerScore;
        document.getElementById("hscore").innerHTML=humanScore;
    }
    if(computerChoice=="Paper"){
        document.getElementById("result").innerHTML="You win! Scissors beats Paper";
        humanScore++;
        document.getElementById("score").style.display="flex"
        document.getElementById("cscore").innerHTML=computerScore;
        document.getElementById("hscore").innerHTML=humanScore;
    }
    rounds++;
    NoofRounds();
    leading();
});

function NoofRounds(){
    if(rounds>=5){
        if(computerScore<humanScore){
            document.getElementById("winn").innerHTML="You Managed to Save Humanity!!";
        }else if(computerScore>humanScore){
            document.getElementById("winn").innerHTML="Oh No! Humanity is DOOMED!";
        }else if(computerScore==humanScore){
            document.getElementById("winn").innerHTML="Guess we will have to play again!!";
        }
        document.getElementById("mainn").style.display="none";
        document.getElementById("cscoree").innerHTML=computerScore;
        document.getElementById("hscoree").innerHTML=humanScore;
        document.getElementById("gameover").style.display="block";
    }
}
function leading(){
    if(computerScore<humanScore){
        document.getElementById("win").innerHTML="You are beating the Computer! ";
    }else if(computerScore>humanScore){
        document.getElementById("win").innerHTML="Dont Worry! We still have hope in You!";
    }else if(computerScore==humanScore){
        document.getElementById("win").innerHTML="You've got this!!Keep playing!";
    }
}
