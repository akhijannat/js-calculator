let showNum = document.getElementById("show-number");
let numberBtn = document.querySelectorAll(".numbers");
let plus = document.getElementById("plus");
let equal = document.getElementById("equal");
let clearAll = document.getElementById("clear-all");
let minus = document.getElementById("subtract");

let abc = "";

function xyz() {
  showNum.innerHTML = abc;
}

// Click Number
for (let i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener("click", () => {
    if (final) {
      clear();
    }

    abc += numberBtn[i].textContent;
    xyz();
  });
}

// Click Plus Button
plus.addEventListener("click", () => {
  abc += plus.innerText;
  xyz();
});

// Click Minus Button
minus.addEventListener("click", () => {
  abc += minus.innerText;
  xyz();
});

// Calculate All Value
equal.addEventListener("click", () => {
  abc += equal.innerText;
  calculate();
});

let final = null;
function calculate() {
  let abcArr = abc.split("+");
  let result = 0;

  for (let i = 0; i < abcArr.length; i++) {
    result += parseInt(abcArr[i]);
  }

  // Subtract ( - )

  final = abc += result;
  showNum.innerHTML = final;
}

// C Clear All Value
function clear() {
  final = null;
  abc = "";
  showNum.innerHTML = "";
}
clearAll.addEventListener("click", clear);
