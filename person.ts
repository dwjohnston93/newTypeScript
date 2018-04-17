class Person{
    firstName: string;
    lastName: string;
    age: number;
    isAlive: boolean; 
    constructor(fN: string, lN: string, a: number, iA: boolean){
        this.firstName = fN;
        this.lastName = lN;
        this.age = a;
        this.isAlive = iA; 
    }
}

let john = new Person ("John", "Doe", 45, true); 
console.log(john);