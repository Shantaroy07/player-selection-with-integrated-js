

const elements = document.getElementsByClassName('buttons');


for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
        const text = elements[i].parentNode.childNodes[1].innerText;
        elements[i].disabled = true;
        const listField = document.getElementById("list-field");
        const li = document.createElement("li");
        li.innerText = text;
        listField.appendChild(li);




    });
}