const student = require('../exam');

describe('Exam', () => {
    it(`Exam of ${student.firstName} ${student.secondName}`, () => {
        const { task: func } = student;

        /* Correct input */
        expect(func(1, 10)).toEqual(5);
        expect(func(1, 300)).toEqual(34);
        expect(func(500, 800)).toEqual(9);
        expect(func(356, 1342)).toEqual(19);

        /* Not correct input */
        expect(func(1, 1)).toBe(false);
        expect(func(59, 64)).toBe(false);
        expect(func(800, 994)).toBe(false);
    });
});

