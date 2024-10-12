


const increment = document.getElementById("increment") as HTMLButtonElement;
const decrement = document.getElementById("decrement") as HTMLButtonElement;
const numberZero = document.getElementById("numberZero") as HTMLHeadingElement;


let counterNumber: number = 0;
decrement.disabled = true;

function handleFunction(clickOn: "plus" | "minus") {
    if (clickOn == "plus") counterNumber++;
    if (clickOn == "minus") counterNumber--;

    numberZero.innerText = counterNumber.toString();
    if (counterNumber === 0) {
        decrement.disabled = true;
    } else {
        decrement.disabled = false
    };
}

increment.addEventListener("click", () => {
    handleFunction("plus")
});

decrement.addEventListener("click", () => {
    handleFunction("minus")
});