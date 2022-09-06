const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('EngineerName', 222, 'engineername@gmail.com', 'Engineer22');
    expect(engineer.github) .toEqual(expect.any(String));
});

// getGithub()
test('get engineer github value', () => {
    const engineer = new Engineer('EngineerName', 222, 'engineername@gmail.com', 'Engineer22');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// getRole() 
test('get role of employee and it should return "Engineer"', () => {
    const engineer = new Engineer('EngineerName', 222, 'engineername@gmail.com', 'Engineer22');
    expect(engineer.getRole()).toEqual("Engineer");
});