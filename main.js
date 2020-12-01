function editRow(element) {

    var row = element.parentNode.parentNode;

    row.cells[3].firstElementChild.style.display = "none";
    row.cells[3].firstElementChild.nextElementSibling.style.display = "inline-block";

    var name = row.cells[0];
    var age = row.cells[1];
    var city = row.cells[2];

    var nameData = row.cells[0].innerHTML;
    var ageData = row.cells[1].innerHTML;
    var cityData = row.cells[2].innerHTML;

    name.innerHTML = "<input type='text' value='" + nameData + "'>";
    city.innerHTML = "<input type='text' value='" + cityData + "'>";
    age.innerHTML = "<input type='text' value='" + ageData + "'>";
}

function saveRow(element) {

    var row = element.parentNode.parentNode;

    var nameValue = row.cells[0].firstElementChild.value;
    var ageValue = row.cells[1].firstElementChild.value;
    var cityValue = row.cells[2].firstElementChild.value;

    if (nameValue || ageValue || cityValue) {
        row.cells[0].innerHTML = nameValue;
        row.cells[1].innerHTML = ageValue;
        row.cells[2].innerHTML = cityValue;

        row.cells[3].firstElementChild.style.display = "inline-block";
        row.cells[3].firstElementChild.nextElementSibling.style.display = "none";
    } else {
        alert('Preencha todos os campos!');
    }
}

function deleteRow(element) {

    var table = document.getElementById("dataTable");
    var row = element.parentNode.parentNode;
    var index = row.rowIndex;
    var name = '';

    if (row.cells[0].firstElementChild) {
        name = "uma linha em edição";
    } else {
        name = row.cells[0].innerHTML;
    }

    var answer = confirm("Você está deletando " + name + ". \nDeseja continuar ?");
    if (answer == true) {

        table.deleteRow(index);
    }

}

function addRow() {

    var table = document.getElementById("dataTable");
    var tableLen = (table.rows.length);
    table.insertRow(tableLen).outerHTML = "<tr><td><input type='text' value=''></td><td><input type='text' value=''></td><td><input type='text' value=''></td><td><input type='button' value='Alterar' class='btn btn-outline-primary edit' onclick='editRow(this)'> <input type='button' value='Salvar' class='btn btn-outline-success save' onclick='saveRow(this)'> <input type='button' value='Deletar' class='btn btn-outline-danger delete' onclick='deleteRow(this)'></td></tr>";

    table.rows[tableLen].cells[3].firstElementChild.style.display = "none";
    table.rows[tableLen].cells[3].firstElementChild.nextElementSibling.style.display = "inline-block";
}