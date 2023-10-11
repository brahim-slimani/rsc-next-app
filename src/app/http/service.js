
const getEmployees = async () => {
    const employees = await fetch("https://jsonplaceholder.typicode.com/todos/");
    return employees.json()
}

const getEmployee = async (id) => {
    const employee = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return employee.json()
}

const main = async () => {
    const employeePromise = getEmployee(1);
    const employeesPromise = getEmployees();

    const [employee, employees] = await Promise.all([employeePromise, employeesPromise]);
    console.log(employees.some(item => item.id == employee.id));
}

main();