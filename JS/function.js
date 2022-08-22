function getValueById(inputId) {
    const inputField = document.getElementById(inputId);

    if (inputField.value == '') {
        alert('Please Provide Input');
        return;
    }
    else if (isNaN(inputField.value) == true) {
        alert('Please Provide Number');
        return;
    }
    else if (inputField.value <= 0) {
        alert('Please Provide Positive Number');
        return;
    }

    else {
        const inputValue = parseFloat(inputField.value);
        return inputValue;
    }
}

function getInnerTextById(inputId) {
    const textField = document.getElementById(inputId);
    const text = textField.innerText;
    return text;

}

function setElementsById(inputId, value) {
    const elementField = document.getElementById(inputId);
    elementField.innerText = value;

}

function getPlayerExpenses() {
    const playerNumber = listArray.length;
    const perPlayerExpense = parseFloat(getValueById('per-player-field'));
    const playersExpense = perPlayerExpense * playerNumber;
    return playersExpense;

}

function getTotalExpenses() {
    const playersExpense = parseFloat(getPlayerExpenses());
    const managerExpense = parseFloat(getValueById('manager-field'));
    const coachExpense = parseFloat(getValueById('coach-field'));

    const totalExpenses = playersExpense + managerExpense + coachExpense;
    return totalExpenses;

}