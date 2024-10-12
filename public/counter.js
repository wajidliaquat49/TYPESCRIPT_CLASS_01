
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const numberZero = document.getElementById("numberZero");
let counterNumber = 0;
decrement.disabled = true;
function handleFunction(clickOn) {
    if (clickOn == "plus")
        counterNumber++;
    if (clickOn == "minus")
        counterNumber--;
    numberZero.innerText = counterNumber.toString();
    if (counterNumber === 0) {
        decrement.disabled = true;
    }
    else {
        decrement.disabled = false;
    }
    ;
}
increment.addEventListener("click", () => {
    handleFunction("plus");
});
decrement.addEventListener("click", () => {
    handleFunction("minus");
});
