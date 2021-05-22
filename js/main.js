let matsList = ''; // final matList output
let displayList = ''; // final list for HTML display
let elementAmount = {}; // user input storeage

function copyMatsList() { // copies matsList to clipboard
    collectAmount();
    calculateTotalMats();
    toList();
    let copyList = document.createElement("textarea"); // creates textarea element
    document.body.appendChild(copyList); // attaches textarea element to HTML body
    copyList.value = matsList;
    copyList.select();
    document.execCommand("copy"); // copies to clipboard
    document.body.removeChild(copyList); // removes textarea from HTML body
    document.getElementById("textbox").innerHTML = displayList;
    reset();
}

function toList() { // converts collection Object to string matsList
    for (let key of Object.keys(collection)) { // key = each key in collection Object
        if (collection[key] === 0) { // if value of each key is 0 contiune (skips to next key)
            continue;
        }
        matsList += `${collection[key]}x ${key} \n`; // sets matsList formating for copy
        displayList += `${collection[key]}x ${key} <br>`;
    }
}

function calculateTotalMats() { // multiplies each key quantity against user input
    for (let key of Object.keys(crafting)) { // key = key of crafting Object
        for (let value of crafting[key]) { // value = value associated with key from crafting Object
            collection[value.material] += value.quantity * elementAmount[key]; // multiplies each quantity against elementAmount
        }
    }
}

function collectAmount() { // stores user input as Object
    for (let inputID of Object.keys(crafting)) { // inputID = each key added to elementAmount Object
        elementAmount[inputID] = document.getElementById(inputID).value; // adds each input to elementAmount Object
    }
}

function reset() { // resets all keys in collection to 0
    for (let key of Object.keys(collection)) { // key = each key in collection Object
        collection[key] = 0; // sets integer to 0
        matsList = ''; // resets matsList
        displayList = ''; // resets HTML display
    }
}
