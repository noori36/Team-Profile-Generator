const Manager = require('../lib/Manager');
 
test('creates an Manager object', () => {
    const manager = new Manager('ManagerName', 111, 'managername@gmail.com', 2);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole()
test('gets role of employee and it should return "Manager"', () => {
    const manager = new Manager('ManagerName', 111, 'managername@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 
