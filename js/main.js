function selectOption() {
    let select = document.getElementById("dropdown-select");
    let recipe = '';
    if (select.value !== 'none') {
        for (let matObj of crafting[select.value].materials) {
            recipe += `${ matObj.quantity }x ${ matObj.material } <br>`;
        }
    }
    document.getElementById("recipe-box").innerHTML = recipe;
}

function clearInput(htmlElement) {
    htmlElement.value = '';
}

function maxInput(htmlElement) {
    let id = htmlElement.id;
    htmlElement.value = crafting[id].max;
}

function copyMatsList() {
    let elementAmount = collectAmount();
    let collection = calculateTotalMats(elementAmount);
    let matsList = toList(collection);
    let copyList = document.createElement("textarea");
    document.body.appendChild(copyList);
    copyList.value = matsList;
    copyList.select();
    document.execCommand("copy"); // copies to clipboard
    document.body.removeChild(copyList);
}

function toList(collection) {
    let matsList = '';
    let displayList = '';
    for (let key of Object.keys(collection)) { // key = each key in collection Object
        matsList += `${ collection[key] }x ${ key } \n`;
        displayList += `${ collection[key] }x ${ key } <br>`;
    }
    document.getElementById("text-box").innerHTML = displayList;
    return matsList;
}

function calculateTotalMats(elementAmount) {
    let collection = {};
    for (let key of Object.keys(crafting)) { // key = key of crafting Object
        for (let matObj of crafting[key].materials) {
            let userInput = Number(elementAmount[key]); // userInput = each value associated with the key in elementAmount
            let matName = matObj.material;
            if (!Number.isInteger(userInput) || userInput <= 0) {
                continue;
            }
            if (!collection.hasOwnProperty(matName)) {
                collection[matName] = 0;
            }
            collection[matName] += matObj.quantity * userInput; // multiplies each key quantity against user input
        }
    }
    return collection;
}

function collectAmount() {
    let elementAmount = {};
    for (let inputID of Object.keys(crafting)) { // inputID = each key added to elementAmount Object
        elementAmount[inputID] = document.getElementById(inputID).value; // adds each input to elementAmount Object
    }
    return elementAmount;
}
