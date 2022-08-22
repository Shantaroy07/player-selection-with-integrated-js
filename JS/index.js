
const elements = document.getElementsByClassName('buttons');

let listArray = [];


for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
        const text = elements[i].parentNode.childNodes[1].innerText;
        elements[i].disabled = true;
        const listField = document.getElementById("list-field");
        const li = document.createElement("li");
        li.innerText = text;
        listField.appendChild(li);

        listArray.push(li);

    });
}

document.getElementById('player-calc-btn').addEventListener('click', function () {
    const listNumber = listArray.length;




})