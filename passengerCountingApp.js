let count = 0

let countEl = document.getElementById('count')
document.getElementById('increment-btn').addEventListener('click', addCount)
function addCount(){
    count += 1
    countEl.textContent = count
}

let saveEl = document.getElementById('save-el')
document.getElementById('save-btn').addEventListener('click', save)
function save (){
    let countStr = count + "-"
    // const pre = 'Previous entries: '
    saveEl.textContent += countStr 
    countEl.textContent = 0
    count = 0
}



