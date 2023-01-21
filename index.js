let Player1=prompt("What is your Name: ");
let Player2=prompt("What is your Name: ");
let nameOfPlayer1=document.querySelectorAll("p")[0];
nameOfPlayer1.innerHTML=`${Player1}`;
let nameOfPlayer2=document.querySelectorAll("p")[1];
nameOfPlayer2.innerHTML=`${Player2}`;
let rollButton=document.querySelector("button");

// console.log(rollButton);

rollButton.addEventListener("click",rollDice);

function rollDice() {
    
    let randomNumber1= Math.round(Math.random()*5+1);
    let randomImageSource1="images/dice"+randomNumber1+".png"; // images sources for dice1
    let randomImage1=document.querySelectorAll("img")[0];
    randomImage1.setAttribute("src",randomImageSource1);

    let randomNumber2= Math.round(Math.random()*5+1);
    let randomImageSource2="images/dice"+randomNumber2+".png"; // images sources for dice1
    let randomImage2=document.querySelectorAll("img")[1];
    randomImage2.setAttribute("src",randomImageSource2);

    let winMessage= document.querySelector("h1");
    if (randomNumber1>randomNumber2) {
        winMessage.innerHTML=`⛳${Player1} win!`;
    } else if(randomNumber1===randomNumber2) {
        winMessage.innerHTML="Match Draw!";
        
    }else{
        winMessage.innerHTML=`⛳${Player2} win!`;


    }

    rollButton.classList.add("btnAnimate");
    setTimeout(() => {

    rollButton.classList.remove("btnAnimate");
        
    }, 100);

    
}