"use strict"

// HOME 페이지 - 재료 선택 // 

const list = document.getElementById('urIngredients');
const linkIngredient = document.querySelector('.link-ingredient');
const mainContainer2 = document.querySelector('.main-container-2');

//DOM 먼저 읽은 후 Javascript 코드 실행하게 하기 위해 DOMContentLoaded 이벤트 리스너 사용
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checkbox-class');
    
    // 체크박스가 체크 표시되면, 오른쪽 박스에 체크한 순서대로 리스트 띄우기
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', event => {
          const checked = event.target.checked;
          const label = event.target.nextElementSibling.textContent;

          if (checked) {
            const item = document.createElement('li');
            item.textContent = label;
            item.classList.add('checked-item');
            list.appendChild(item);
            linkIngredient.classList.remove('hidden');

            //휴지통 아이콘 만들기
            const trashBtn = document.createElement('button');
            trashBtn.classList.add('trash-icon');
            item.appendChild(trashBtn);

            //휴지통 아이콘 누르면 아이템 삭제하기
            trashBtn.addEventListener('click', event => {
              const listItem = event.target.closest('li');
              listItem.remove();

              //휴지통 누르면 체크 리스트에 체크된 재료도 체크 풀어주기
              checkbox.checked = !checkbox.checked; 
            })

          } else {
            const items = list.querySelectorAll('li');
            items.forEach(item => {
              if (item.textContent === label) {
                item.remove();
              }
            });
          }

          //체크된 것이 없으면 없다고 문구 띄우기
          if (list.children.length == 0) {
              const p = document.getElementById('noItem');
              p.style.display = 'block';
              linkIngredient.classList.add('hidden');
            } else {
              const p = document.getElementById('noItem');
              p.style.display = 'none';
              linkIngredient.classList.remove('hidden');
            }
      
            //체크아이템이 늘어날수록 컨테이너 높이 늘리기
            const listHeight = list.scrollHeight;
            mainContainer2.style.height = `${listHeight + 250}px`;
        });
      });
      
  });

  const toFridge = document.querySelector('.btn-to-fridge');
  const toRecipe = document.querySelector('.btn-recipe');

  //선택된 재료들 냉장고에 추가하기 
//   toFridge.addEventListener('click', function() {

//     const table = document.querySelector('.ingredient-table');
//     const tbody = document.createElement('tbody');
//     const row = document.createElement('tr');

//     const nameCell = document.createElement('td');
// nameCell.classList.add('td-1-1');
// nameCell.textContent = 'Avocado';

// row.appendChild(nameCell);  
//   })

  toFridge.addEventListener('click', function() {
    const table = document.querySelector('.ingredient-table');
  
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
  
    const row = document.createElement('tr');
    tbody.appendChild(row);
  
    const nameCell = document.createElement('td');
    nameCell.classList.add('td-1-1');
    nameCell.textContent = 'Avocado';
    row.appendChild(nameCell);
  });

// see more ingredients 재료 더보기 페이지(detail.html) //
// 더 많은 재료 보기

let condiment = ['Honey', 'Red pepper paste', 'Mayonnaise', 'Ketchup', 'Soy Sauce', 'Chilli Powder', 'Fish Sauce', 'Chilli Sauce', 'Barbeque Sauce', 'Hot Sauce', 'Mustard', 'Balsamic Vinegar', 'Vinegar', 'Apple Vinegar', 'Oriental Dressing'];
const sauceLen = condiment.length;

const category0 = document.getElementsByClassName('article-detail')[0];

function newCheck0() {
    for(let i = 0; i < sauceLen; i++) {
        const newDiv = document.createElement('div');
        category0.appendChild(newDiv);
    
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'condiment-checkbox' + i;
        input.classList.add('checkbox-class');
        newDiv.appendChild(input);
    
        const label = document.createElement('label');
        label.innerHTML = condiment[i];
        label.htmlFor = 'condiment-checkbox' + i;
        newDiv.appendChild(label);
    }
};

let canned = ['Beans', 'Tuna', 'Diced Tomatos', 'Tomato Sauce', 'Coconut Milk', 'Sweet Corn', 'Olives', 'Spam', 'Cream Sauce', 'Fruit Cocktail', 'Yellow Peaches'];
const cannedLen = canned.length;

const category1 = document.getElementsByClassName('article-detail')[1];

function newCheck1() {
    for(let i = 0; i < cannedLen; i++) {
        const newDiv = document.createElement('div');
        category1.appendChild(newDiv);
    
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'canned-checkbox' + i;
        input.classList.add('checkbox-class');
        newDiv.appendChild(input);
    
        const label = document.createElement('label');
        label.innerHTML = canned[i];
        label.htmlFor = 'canned-checkbox' + i;
        newDiv.appendChild(label);
    }
}

let dairy = ['Milk', 'Chocolate Flavor Millk', 'Banana Flavor Milk', 'Strawberry Flavor Milk', 'Coffee Flavor Milk', 'Soy Milk', 'Cheddar Cheese', 'American Cheese', 'Blue Cheese', 'Burrata Cheese', 'Cheddar Cheese', 'Camembert Cheese', 'Butter', 'Cream', 'Yoghurt', 'Egg', 'Whipped Cream', 'Ice Cream'];
let dairyLen = dairy.length;

const category2 = document.getElementsByClassName('article-detail')[2];

function newCheck2() {
    for(let i = 0; i < dairyLen; i++) {
        const newDiv = document.createElement('div');
        category2.appendChild(newDiv);
    
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'dairy-checkbox' + i;
        input.classList.add('checkbox-class');
        newDiv.appendChild(input);
    
        const label = document.createElement('label');
        label.innerHTML = dairy[i];
        label.htmlFor = 'dairy-checkbox' + i;
        newDiv.appendChild(label);
    }
}

let drink = ['Beer', 'Whiskey', 'Vodka', 'Gin', 'Rum', 'Tequila', 'White Wine', 'Red Wine', 'Apple Juice', 'Orange Juice', 'Tomato Juice', 'Mango Juice', 'Cranberry', 'Coke', 'Sprite'];
let drinkLen =drink.length;

const category3 = document.getElementsByClassName('article-detail')[3];

function newCheck3() {

    for(let i = 0; i < drinkLen; i++) {
        const newDiv = document.createElement('div');
        category3.appendChild(newDiv);
    
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'drink-checkbox' + i;
        input.classList.add('checkbox-class');
        newDiv.appendChild(input);
    
        const label = document.createElement('label');
        label.innerHTML = drink[i];
        label.htmlFor = 'drink-checkbox' + i;
        newDiv.appendChild(label);
    }
}

let fruit = ['Apple', 'Pear', 'Orange', 'Strawberry', 'Banana', 'Grape', 'Grapefruit', 'Cherry', 'Melon', 'Watermelon', 'Kiwi', 'Mandarin', 'Lime', 'Lemon', 'Mango'];
let fruitLen = fruit.length;

const category4 = document.getElementsByClassName('article-detail')[4];

function newCheck4() {

    for(let i = 0; i < fruitLen; i++) {
        const newDiv = document.createElement('div');
        category4.appendChild(newDiv);
    
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'fruit-checkbox' + i;
        input.classList.add('checkbox-class');
        newDiv.appendChild(input);
    
        const label = document.createElement('label');
        label.innerHTML = fruit[i];
        label.htmlFor = 'fruit-checkbox' + i;
        newDiv.appendChild(label);
    }
}

let meat = ['chicken', 'Beef', 'Turkey', 'Duck', 'Pork', 'Lamb', 'Goat', 'Ham', 'Sausage', 'Fish', 'Crab', 'Lobster'];
let meatLen = meat.length;

const category5 = document.getElementsByClassName('article-detail')[5];

function newCheck5() {

    for(let i = 0; i < meatLen; i++) {
        const newDiv = document.createElement('div');
        category5.appendChild(newDiv);
    
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'meat-checkbox' + i;
        input.classList.add('checkbox-class');
        newDiv.appendChild(input);
    
        const label = document.createElement('label');
        label.innerHTML = meat[i];
        label.htmlFor = 'meat-checkbox' + i;
        newDiv.appendChild(label);
    }
}

let other = ['Paste', 'Granola', 'Cereal', 'Rice Cake', 'Tofu', 'Chocolate', 'Baking Powder', 'Rice Paper', 'Corn Soup', 'Curry Paste'];
let otherLen = other.length;

const category6 = document.getElementsByClassName('article-detail')[6];

function newCheck6() {

    for(let i = 0; i < otherLen; i++) {
        const newDiv = document.createElement('div');
        category6.appendChild(newDiv);
    
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'other-checkbox' + i;
        input.classList.add('checkbox-class');
        newDiv.appendChild(input);
    
        const label = document.createElement('label');
        label.innerHTML = other[i];
        label.htmlFor = 'other-checkbox' + i;
        newDiv.appendChild(label);
    }
}

// 더 많은 재료 보기 함수들은 'see more ingredients' 페이지에서만 실행
if (window.location.pathname.endsWith('detail.html')) {
    newCheck0();
    newCheck1();
    newCheck2();
    newCheck3();
    newCheck4();
    newCheck5();
    newCheck6();
}
