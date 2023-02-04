let ansCount = document.getElementById("count")
let numCount = 0
let saveEl = document.getElementById("save-el")
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

function increment(){
    numCount += 1
    ansCount.innerHTML = numCount
}

function save(){
    let newans = time + " :- " + numCount + " || "
    saveEl.innerText += newans
    ansCount.innerText = 0
    numCount = 0
}



