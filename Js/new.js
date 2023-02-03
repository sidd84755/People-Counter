let ansCount = document.getElementById("count")
let numCount = 0
let saveEl = document.getElementById("save-el")
function increment(){
    numCount += 1
    ansCount.innerHTML = numCount
}

function save(){
    let newans = numCount + " - "
    saveEl.innerHTML += newans
}



