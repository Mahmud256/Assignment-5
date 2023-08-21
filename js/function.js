function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

function addToCalculationEntry(product) {
    console.log(product)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${product}`;

    calculationEntry.appendChild(p);
}