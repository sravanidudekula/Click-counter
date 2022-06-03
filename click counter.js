let counterValue = document.getElementById("counterValue");
let clickCount = localStorage.getItem("clickCount");

if (clickCount === null) {
    counterValue.textContent = 0;
} else {
    counterValue.textContent = clickCount;
}

function onIncrementBy() {
    let previousValue = counterValue.textContent;
    let updatedValue = parseInt(previousValue) + 1;
    localStorage.setItem("clickCount", updatedValue);
    counterValue.textContent = updatedValue;
}