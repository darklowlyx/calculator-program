// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
	display.value += input;
}

function clearDisplay() {
	display.value = "";
}

function calculate() {
	try {
		display.value = eval(display.value);
	}
	catch (error) {
		displayUndo = display.value;
		display.value = "Error";
		setTimeout(() => display.value = `${displayUndo}`, 1000);
	}
}