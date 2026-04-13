
async function getUserData(){
    const response = await fetch('/api/users');
    return response.json();
}

function loadTable(users){
    const table = document.querySelector('#result');
    for(let user of users){
        table.innerHTML += `<tr>
            <td>${user.id}</td>
            <td>${user.username}</td>
        </tr>`;
    }
}

async function main(){
    const users = await getUserData();
    loadTable(users);
}

main();

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const res = await fetch("/api/todos");
        const todos = await res.json();

        const table = document.getElementById("result");
        table.innerHTML = "";

        todos.forEach(todo => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${todo.id}</td>
                <td>${todo.text}</td>
                <td>${todo.done ? "✅" : "❌"}</td>
            `;

            table.appendChild(row);
        });

    } catch (err) {
        console.error("Error loading todos:", err);
    }
});