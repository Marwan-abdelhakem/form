// const form = document.getElementById("userform");
// const table = document.getElementById("userTable");
// const tbody = table.querySelector("tbody");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const userData = {
//         name: document.getElementById("name").value,
//         phone: document.getElementById("phone").value,
//         address: document.getElementById("address").value,
//         date: document.getElementById("date").value,
//         job: document.getElementById("job").value
//     };

//     table.classList.remove("hidden");

//     const row = document.createElement("tr");
//     row.innerHTML = `
//     <td>${userData.name}</td>
//     <td>${userData.phone}</td>
//     <td>${userData.address}</td>
//     <td>${userData.date}</td>
//     <td>${userData.job}</td>
//     <td><button class="delete-btn">Delete</button></td>
//   `;

//     tbody.appendChild(row);
//     form.reset();
// });

// table.addEventListener("click", function (e) {
//     if (e.target.classList.contains("delete-btn")) {
//         e.target.closest("tr").remove();

//         if (tbody.children.length === 0) {
//             table.classList.add("hidden");
//         }
//     }
// });



const form = document.getElementById("userform");
const table = document.getElementById("userTable");
const tbody = table.querySelector("tbody");

window.onload = function () {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length > 0) {
        table.classList.remove("hidden");
        users.forEach(user => addRow(user));
    }
};

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const userData = {
        id: Date.now(),
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        date: document.getElementById("date").value,
        job: document.getElementById("job").value
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    table.classList.remove("hidden");
    addRow(userData);

    form.reset();
});

function addRow(user) {
    const row = document.createElement("tr");
    row.setAttribute("data-id", user.id);

    row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.address}</td>
        <td>${user.date}</td>
        <td>${user.job}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    tbody.appendChild(row);
}

table.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        const row = e.target.closest("tr");
        const id = row.getAttribute("data-id");

        row.remove();
        deleteFromLocalStorage(id);

        if (tbody.children.length === 0) {
            table.classList.add("hidden");
        }
    }
});

function deleteFromLocalStorage(id) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.filter(user => user.id != id);
    localStorage.setItem("users", JSON.stringify(users));
}
