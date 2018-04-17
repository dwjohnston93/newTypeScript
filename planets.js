var Planet = /** @class */ (function () {
    function Planet(w, c) {
        this.width = w;
        this.color = c;
    }
    return Planet;
}());
var mercury = new Planet(100, "red");
var venus = new Planet(200, "green");
var earth = new Planet(200, "blue");
console.log(mercury, venus, earth);
