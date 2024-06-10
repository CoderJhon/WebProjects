const decreaseBtn = document.getElementById("btnDecrease");
const resetBtn = document.getElementById("btnReset");
const increaseBtn = document.getElementById("btnIncrease");
const countLabel = document.getElementById("counterLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}