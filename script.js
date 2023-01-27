"use strict"

//Check Box List

let condiment = ['Red pepper paste', 'Mayonnaise', 'Ketchup', 'Soy Sauce', 'Chilli Powder', 'Fish Sauce', 'Chilli Sauce', 'Barbeque Sauce', 'Hot Sauce', 'Mustard', 'Balsamic Vinegar', 'Vinegar', 'Apple Vinegar', 'Oriental Dressing'];
const sauceLen = condiment.length;

function newCheck() {

    for(let i = 0; i < sauceLen; i++) {
        const leftBox = document.getElementsByClassName('article-detail')[0];
        const newDiv = document.createElement('div');
        leftBox.appendChild(newDiv);
    
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'checkbox2';
        newDiv.appendChild(input);
    
        const label = document.createElement('label');
        label.innerHTML = condiment[i];
        label.htmlFor = 'checkbox2';
        newDiv.appendChild(label);
    }
}

newCheck();


