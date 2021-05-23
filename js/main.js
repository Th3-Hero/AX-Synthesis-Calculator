let collection = {};

function copyMatsList() { // copies matsList to clipboard
    let elementAmount = collectAmount();
    calculateTotalMats(elementAmount);
    let matsList = toList();
    let copyList = document.createElement("textarea"); // creates textarea element
    document.body.appendChild(copyList); // attaches textarea element to HTML body
    copyList.value = matsList;
    copyList.select();
    document.execCommand("copy"); // copies to clipboard
    document.body.removeChild(copyList); // removes textarea from HTML body
    // document.getElementById("textbox").innerHTML = displayList;
    reset();
}

function toList() { // converts collection Object to string matsList
    let matsList = '';
    let displayList = '';
    for (let key of Object.keys(collection)) { // key = each key in collection Object
        // if (collection[key] === 0) { if value of each key is 0 contiune (skips to next key)
        //     continue;
        // }
        matsList += `${collection[key]}x ${key} \n`; // sets matsList formating for copy
        displayList += `${collection[key]}x ${key} <br>`;
    }
    document.getElementById("textbox").innerHTML = displayList;
    return matsList;
}

function calculateTotalMats(elementAmount) { // multiplies each key quantity against user input
    // let collection = {};
    for (let key of Object.keys(crafting)) { // key = key of crafting Object
        for (let value of crafting[key]) { // value = value associated with key from crafting Object
            if (elementAmount[key] === 0) {
                continue;
            }
            else if (elementAmount[key] > 0) {
                if (collection.hasOwnProperty(elementAmount[key]) === false) {
                    collection[value.material] = 0;
                }
                collection[value.material] += value.quantity * elementAmount[key]; // multiplies each quantity against elementAmount
            }
        }
    }
}

function collectAmount() { // stores user input as Object
    let elementAmount = {};
    for (let inputID of Object.keys(crafting)) { // inputID = each key added to elementAmount Object
        elementAmount[inputID] = document.getElementById(inputID).value; // adds each input to elementAmount Object
    }
    return elementAmount;
}

function reset(matsList) { // resets all keys in collection to 0
    for (let key of Object.keys(collection)) { // key = each key in collection Object
        // collection[key] = 0; sets integer to 0
    }
}
