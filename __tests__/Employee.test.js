const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('EmployeeName', 123, 'employeename@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getName() 
test('get employee name', () => {
    const employee = new Employee('EmployeeName', 123, 'employeename@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

// getId() 
test('get employee ID', () => {
    const employee = new Employee('EmployeeName', 123, 'employeename@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

// getEmail()
test('get employee email', () => {
    const employee = new Employee('EmployeeName', 123, 'employeename@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// getRole()
test('gets role of employee', () => {
    const employee = new Employee('EmployeeName', 123, 'employeename@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
});