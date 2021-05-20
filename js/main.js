let matsList = '';
let elementAmount = {};

function copyMatsList() { // function to copy mats list to clipboard
    collectAmount();
    calculateTotalMats();
    toList();
    let copyList = document.createElement("textarea");
    document.body.appendChild(copyList);
    copyList.value = matsList;
    copyList.select();
    document.execCommand("copy");
    document.body.removeChild(copyList);
    reset();
}

function toList() {
    for (let key of Object.keys(collection)) {
        if (collection[key] === 0) {
            continue;
        }
        matsList += `${collection[key]}x ${key} \n`;
    }
}

function calculateTotalMats() {
    for (let value of Object.keys(crafting)) {
        for (let info of crafting[value]) {
            collection[info.material] += info.quantity * elementAmount[value];
        }
    }
}

function collectAmount() {
    for (let inputID of Object.keys(crafting)) {
        elementAmount[inputID] = document.getElementById(inputID).value;
    }
}

function reset() {
    for (let key of Object.keys(collection)) {
        collection[key] = 0;
    }
}