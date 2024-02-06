
const scr1 = document.getElementById("p1")
const scr2 = document.getElementById("p2")
const reset = document.getElementById("rst-btn")
const p1 = document.getElementById("p1-btn")
const p2 = document.getElementById("p2-btn")
const dice = document.getElementById("dice")
const announce = document.getElementById("announce")
const win = document.getElementById("win")

let x = 0;
let y = 0;

win.style.visibility = "hidden";

function generateRandom(){
    let val = Math.floor(Math.random() * 6) + 1

    return val
}

p1.addEventListener("click", function(){
    
    const val = generateRandom()
    const src = val + ".png"
    dice.src = src
    x = val + x;

    if(x == 30){
        console.log("Player 1 Wins")
        announce.textContent = "Player 1 Wins"
        win.style.visibility = "visible";
        scr1.textContent = x;

        p1.disabled = true;
        p2.disabled = true;
        return
        
    }else if(x>30){
        x = x - val
    }

    scr1.textContent = x;

    p1.disabled = true;
    p2.disabled = false;



})

p2.addEventListener("click", function(){

    const val = generateRandom()
    const src = val + ".png"
    dice.src = src
    y = val + y;

    if(y == 30){
        console.log("Player 2 Wins")
        announce.textContent = "Player 2 Wins"
        win.style.visibility = "visible";
        scr2.textContent =y;
        p1.disabled = true;
        p2.disabled = true;
        return
    }else if(y>30){
        y = y - val
    }

    scr2.textContent =y;
    p2.disabled = true;
    p1.disabled = false;
    
})

reset.addEventListener("click", function resetNow(){
    scr1.textContent = 0
    scr2.textContent = 0
    x = 0 
    y = 0

    p1.disabled = false;
    p2.disabled = true;
    win.style.visibility = "hidden";
})

