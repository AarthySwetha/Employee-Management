const API =
"http://localhost:5000/employees";

async function loadEmployees() {

  const res =
  await fetch(API);

  const employees =
  await res.json();

  const list =
  document.getElementById(
    "employeeList"
  );

  list.innerHTML = "";

  employees.forEach(emp => {

    list.innerHTML += `
      <li>
        ${emp.name} -
        ${emp.department}

        <button
        onclick="deleteEmployee('${emp._id}')">
        Delete
        </button>
      </li>
    `;
  });
}

async function addEmployee() {

  const employee = {

    name:
    document.getElementById("name").value,

    email:
    document.getElementById("email").value,

    department:
    document.getElementById(
      "department"
    ).value
  };

  await fetch(API, {

    method: "POST",

    headers: {
      "Content-Type":
      "application/json"
    },

    body: JSON.stringify(employee)
  });

  loadEmployees();
}

async function deleteEmployee(id) {

  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  loadEmployees();
}

loadEmployees();