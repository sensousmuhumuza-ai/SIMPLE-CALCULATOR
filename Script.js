function getNumbers() {
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;

```
if (num1 === "" || num2 === "") {
    document.getElementById("result").textContent =
        "Please enter both numbers.";
    return null;
}

return [Number(num1), Number(num2)];
```

}

function add() {
let numbers = getNumbers();

```
if (numbers === null) return;

let result = numbers[0] + numbers[1];

document.getElementById("result").textContent =
    "Result: " + result;
```

}

function subtract() {
let numbers = getNumbers();

```
if (numbers === null) return;

let result = numbers[0] - numbers[1];

document.getElementById("result").textContent =
    "Result: " + result;
```

}

function multiply() {
let numbers = getNumbers();

```
if (numbers === null) return;

let result = numbers[0] * numbers[1];

document.getElementById("result").textContent =
    "Result: " + result;
```

}

function divide() {
let numbers = getNumbers();

```
if (numbers === null) return;

if (numbers[1] === 0) {
    document.getElementById("result").textContent =
        "Cannot divide by zero.";
    return;
}

let result = numbers[0] / numbers[1];

document.getElementById("result").textContent =
    "Result: " + result;
```

}
