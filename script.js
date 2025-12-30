
const form = document.getElementById("userform")
const table = document.getElementById("userTable");


form.addEventListener("submit", function (ev) {
    ev.preventDefault()

    const userDate = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        date: document.getElementById("date").value,
        job: document.getElementById("job").value
    }
    table.style.display

    const row = table.insertRow();
    row.insertCell(0).innerText = userDate.name;
    row.insertCell(1).innerText = userDate.phone;
    row.insertCell(2).innerText = userDate.address;
    row.insertCell(3).innerText = userDate.date;
    row.insertCell(4).innerText = userDate.job;

    const deleteCell = row.insertCell(5);
    deleteCell.innerHTML = `<button class="delete-btn">Delete</button>`;

    deleteCell.querySelector(".delete-btn").addEventListener("click", function () {
        table.deleteRow(row.rowIndex);
        if (table.rows.length === 1) {
            table.style.display = "none";
        }
    });
    form.reset();
})