let score=0;
let key = false;
const countScore = setInterval(()=>{
    if(key){
        score+=1;
        document.getElementById("score").innerHTML=`<h3> Score ${score} </h3>`;
    }
},1000);
const animateElements = () => {
    key = true;
    if(!block.classList.contains("animateBlock")){
        block.style.display = "block";
        block.classList.add("animateBlock");
    }
    
    if(!dino.classList.contains("animateDino")){
        dino.classList.add("animateDino");
    }
    setTimeout(()=> {
        dino.classList.remove("animateDino");
    },500);
}
const dino = document.getElementById("dino");
document.addEventListener("keypress",animateElements);

const block = document.getElementById("block");
const checkGameStatus = () => {
    let blockPos = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let dinoPos = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    if((dinoPos<=200 && dinoPos>=180) && (blockPos<=80 && blockPos>=50)) {
        alert(`You loose. your score is ${score}`);
        block.style.display = "none";
        window.location.reload();
    }

}


setInterval(checkGameStatus,10);



document.getElementById("startAgain").addEventListener("click",() => window.location.reload() );