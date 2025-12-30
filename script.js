const form = document.getElementById("userform");
const table = document.getElementById("userTable");
const tbody = table.querySelector("tbody");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        date: document.getElementById("date").value,
        job: document.getElementById("job").value
    };

    table.classList.remove("hidden");

    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${userData.name}</td>
    <td>${userData.phone}</td>
    <td>${userData.address}</td>
    <td>${userData.date}</td>
    <td>${userData.job}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

    tbody.appendChild(row);
    form.reset();
});

table.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest("tr").remove();

        if (tbody.children.length === 0) {
            table.classList.add("hidden");
        }
    }
});

