const shapeSelector = document.getElementById('shape-selector');
const calculator = document.getElementById('calculator');
const calculate = document.getElementById('calculate');
const calculation = document.querySelector('.calculation');
const calculationBtn = document.getElementById('calculate-btn');

const square = document.getElementById('square');
const rectangle = document.getElementById('rectangle');
const triangle = document.getElementById('triangle');


// Event Listeners
square.addEventListener('click', squareCalculator);

rectangle.addEventListener('click', rectangleCalculator);

triangle.addEventListener('click', triangleCalculator);

calculationBtn.addEventListener('click', calculating)

// Square Selector
function squareCalculator() {
    clearBtn()
    if(square.classList.contains = 'btn white-text waves-effect'){
    square.className += ' active-link z-depth-0'
    }
};

// Rectangle Selector
function rectangleCalculator() {
    clearBtn()
    if(rectangle.classList.contains = 'btn white-text waves-effect'){
    rectangle.className += ' active-link z-depth-0'
    }
};

// Triangle Selector
function triangleCalculator() {
    clearBtn()
    if(triangle.classList.contains = 'btn white-text waves-effect'){
    triangle.className += ' active-link z-depth-0'
    }
};

// Clear Button Selection
function clearBtn(){
    square.className = 'btn white-text waves-effect'
    rectangle.className = 'btn white-text waves-effect'
    triangle.className = 'btn white-text waves-effect'
};

// Calculate Area
function calculating(e) {
    let base = document.getElementById('base').value

    console.log(base);
    if(square.classList.contains = 'active-link') {

    }
    
    e.preventDefault();
}