const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('InternName', 333, 'internname@gmail.com', 'UCB');
    expect(intern.school).toEqual(expect.any(String));
});

// getSchool()
test('get employee school', () => {
    const intern = new Intern('InternName', 333, 'internname@gmail.com', 'UCB');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// getRole()
test('get role of employee and it should return "Intern"', () => {
    const intern = new Intern('InternName', 333, 'internname@gmail.com', 'UCB');

    expect(intern.getRole()).toEqual("Intern");
});