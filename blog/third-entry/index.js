let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let firstCountSaved = false;

function increment() {
    countEl.textContent = ++count;
}

function save() {
    let saveStrPrefix = ' - ';
    if (!firstCountSaved) {
        saveStrPrefix = ' ';
        firstCountSaved = true;
    }
    saveEl.textContent += saveStrPrefix + countEl.textContent;
    countEl.textContent = count = 0;
}