const calculation = document.querySelector('.calculation');
const calculationBtn = document.getElementById('calculate-btn');

const square = document.getElementById('square');
const rectangle = document.getElementById('rectangle');
const triangle = document.getElementById('triangle');


// Event Listeners
square.addEventListener('click', squareCalculator);

rectangle.addEventListener('click', rectangleCalculator);

triangle.addEventListener('click', triangleCalculator);

// Square Selector
function squareCalculator() {
    clearBtn()
    if (square.classList.contains = 'btn white-text waves-effect') {
        square.className += ' active-link z-depth-0'

        calculationBtn.addEventListener('click', function (e) {
            let base = document.getElementById('base').value;
            let height = document.getElementById('height').value;
            if (base != 0 || height != 0) {
                calculation.innerText = base * height;

            } else {
                error('Please enter values for both the base and the height');
            }

            e.preventDefault();

            clearBtn();
            clearInput();
        })
    }
};

// Rectangle Selector
function rectangleCalculator() {
    clearBtn()
    if (rectangle.classList.contains = 'btn white-text waves-effect') {
        rectangle.className += ' active-link z-depth-0'

        calculationBtn.addEventListener('click', function (e) {
            let base = document.getElementById('base').value;
            let height = document.getElementById('height').value;
            if (base != 0 || height != 0) {
                calculation.innerText = base * height;

            } else {
                error('Please enter values for both the base and the height');
            }

            e.preventDefault();

            clearBtn();
            clearInput();
        })
    }
};

// Triangle Selector
function triangleCalculator() {
    clearBtn()
    if (triangle.classList.contains = 'btn white-text waves-effect') {
        triangle.className += ' active-link z-depth-0'

        calculationBtn.addEventListener('click', function (e) {
            let base = document.getElementById('base').value;
            let height = document.getElementById('height').value;
            if (base != 0 || height != 0) {
                calculation.innerText = base / 2 * height;

            } else {
                error('Please enter values for both the base and the height');

            }

            e.preventDefault();

            clearBtn();
            clearInput();
        })
    }
};

calculationBtn.addEventListener('click', clearBtn)

// Clear Button Selection
function clearBtn() {
    square.className = 'btn white-text waves-effect'
    rectangle.className = 'btn white-text waves-effect'
    triangle.className = 'btn white-text waves-effect'
};

// Create error message
function error(msg) {
    let error = document.querySelector('.error-msg')
    let h4 = document.createElement('h4')

    h4.innerText = msg;
    h4.className = 'error';
    error.appendChild(h4);

    setTimeout(deleteError, 3000);

    console.log(error);
    console.log(h4);
};

function deleteError() {
    let h4 = document.querySelector('.error');

    h4.remove();

    console.log(h4);
};

// Clear Input
function clearInput() {
    let base = document.getElementById('height').value;
    let height = document.getElementById('base').value;

    remove(base, height);
}
