const employees = [{
  id: 1,
  name: "John Doe",
  job: "Developer"
}, {
  id: 2,
  name: "Jane Smith",
  job: "Designer"
}, {
  id: 3,
  name: "Mike Brown",
  job: "Manager"
}, {
  id: 4,
  name: 'Mill Brown',
  job: 'Asst.Manager'
}];
const root = document.getElementById("root");
if (root) {
  root.innerHTML = `
    <h1>Employees</h1>
    <ul>
      ${employees.map(emp => `<li>${emp.name} - ${emp.job}</li>`).join("")}
    </ul>
  `;
}
