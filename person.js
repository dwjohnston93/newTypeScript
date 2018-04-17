var Person = /** @class */ (function () {
    function Person(fN, lN, a, iA) {
        this.firstName = fN;
        this.lastName = lN;
        this.age = a;
        this.isAlive = iA;
    }
    return Person;
}());
var john = new Person("John", "Doe", 45, true);
console.log(john);
