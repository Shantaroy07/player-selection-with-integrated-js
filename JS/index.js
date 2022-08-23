//---------add players name in the selected field---------
const elements = document.getElementsByClassName('buttons');

const listArray = [];


for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
        const text = elements[i].parentNode.childNodes[1].innerText;
        const listBodyField = document.getElementById("list-field");
        // ------   using list------
        const li = document.createElement("li");
        li.innerText = (listArray.length + 1) + "." + " " + text;

        //  ----- using table----- 
        // const tr = document.createElement("tr");
        // tr.innerHTML = `
        // <td>${(listArray.length) + 1}.</td>
        // <td>${text}</td>`;

        listArray.push(li);

        if ((listArray.length) <= 5) {
            listBodyField.appendChild(li);
            elements[i].disabled = true;
            return;

        }
        else {
            listArray.pop();
            alert('Can not select more than Five players.')
            return;
        }

    });
}


//------- calculate button click------------
document.getElementById('player-calc-btn').addEventListener('click', function () {
    setElementsById('player-expenses', getPlayerExpenses());
})


//------- Total calculate button click------------
document.getElementById('total-calc-btn').addEventListener('click', function () {
    setElementsById('total-expense', getTotalExpenses());
})