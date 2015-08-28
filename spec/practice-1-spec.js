var Person = require('../practice_1/person.js');

describe('Person', function () {

    var person;
    beforeEach(function () {
        person = new Person('Jim',21);
    });
    
    it('should have attribute called name', function () {
        expect(person.name).toBe('Jim');
    });

    it('should have attribute called age', function () {
        expect(person.age).toBe(21);
    });

    describe('#introduce', function () {

        it('should return correct string', function () {
            expect(person.introduce()).toBe('My name is Jim. I am 21 years old.');
        });
    });
});
