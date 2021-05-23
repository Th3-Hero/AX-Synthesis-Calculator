function copyMatsList() { // copies matsList to clipboard
    let elementAmount = collectAmount();
    let collection = calculateTotalMats(elementAmount);
    let matsList = toList(collection);
    let copyList = document.createElement("textarea"); // creates textarea element
    document.body.appendChild(copyList); // attaches textarea element to HTML body
    copyList.value = matsList;
    copyList.select();
    document.execCommand("copy"); // copies to clipboard
    document.body.removeChild(copyList); // removes textarea from HTML body
}

function toList(collection) { // converts collection Object to string matsList
    let matsList = '';
    let displayList = '';
    for (let key of Object.keys(collection)) { // key = each key in collection Object
        matsList += `${collection[key]}x ${key} \n`; // sets matsList formating for copy
        displayList += `${collection[key]}x ${key} <br>`;
    }
    document.getElementById("textbox").innerHTML = displayList;
    return matsList;
}

function calculateTotalMats(elementAmount) { // multiplies each key quantity against user input
    let collection = {};
    for (let key of Object.keys(crafting)) { // key = key of crafting Object
        for (let value of crafting[key]) { // value = value associated with key from crafting Object
            let userInput = elementAmount[key];
            if (userInput <= 0) {
                continue;
            }
            if (!collection.hasOwnProperty(userInput)) {
                collection[value.material] = 0;
            }
            collection[value.material] += value.quantity * userInput; // multiplies each quantity against elementAmount
        }
    }
    return collection;
}

function collectAmount() { // stores user input as Object
    let elementAmount = {};
    for (let inputID of Object.keys(crafting)) { // inputID = each key added to elementAmount Object
        elementAmount[inputID] = document.getElementById(inputID).value; // adds each input to elementAmount Object
    }
    return elementAmount;
}
