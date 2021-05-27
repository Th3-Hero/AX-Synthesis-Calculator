function selectOption() {
    let select = document.getElementById("dropdown-select");
    let selected = select.value;
    recipesViewer(selected);
}

function recipesViewer(selected) {
    let recipe = '';
    for (let value of crafting[selected]) {
        recipe += `${ value.quantity }x ${ value.material } <br>`;
    }
    document.getElementById("recipebox").innerHTML = recipe;
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
    document.getElementById("textbox").innerHTML = displayList;
    return matsList;
}

function calculateTotalMats(elementAmount) {
    let collection = {};
    for (let key of Object.keys(crafting)) { // key = key of crafting Object
        for (let value of crafting[key]) { // value = value associated with key from crafting Object
            let userInput = elementAmount[key]; // userInput = each key in elementAmount
            if (userInput <= 0) {
                continue;
            }
            if (!collection.hasOwnProperty(userInput)) {
                collection[value.material] = 0;
            }
            collection[value.material] += value.quantity * userInput; // multiplies each key quantity against user input
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
