class Planet {
    color: string;
    width: number;
    constructor(w: number, c: string){
        this.width = w;
        this.color = c;
    }
}

let mercury = new Planet(100, "red");
let venus = new Planet(200, "green");
let earth = new Planet(200, "blue");

console.log(mercury, venus, earth); 

// Planet { width: 100, color: 'red' } Planet { width: 200, color: 'green' } Planet { width: 200, color: 'blue' }


