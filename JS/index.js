
const elements = document.getElementsByClassName('buttons');

let listArray = [];


for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
        const text = elements[i].parentNode.childNodes[1].innerText;
        elements[i].disabled = true;
        const listField = document.getElementById("list-field");
        const tr = document.createElement("tr");
        console.log(tr);
        tr.innerHTML = `
        <td>${(listArray.length) + 1}</td>
        <td>${text}</td>`
        listField.appendChild(tr);

        listArray.push(tr);

    });
}

document.getElementById('player-calc-btn').addEventListener('click', function () {
    setElementsById('player-expenses', getPlayerExpenses());

})

document.getElementById('total-calc-btn').addEventListener('click', function () {
    setElementsById('total-expense', getTotalExpenses());
})