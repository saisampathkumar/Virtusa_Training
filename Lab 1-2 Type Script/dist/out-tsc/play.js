class Product {
    constructor(id) {
        this.id = id;
    }
    printDetails() {
        console.log(`Title: ${this.title}
        Id: ${this.id}
        Price: ${this.price}`);
    }
}
class Tour extends Product {
    constructor(id, duration) {
        super(id);
        this.duration = duration;
    }
    printDetails() {
        super.printDetails();
        console.log(`Duration: ${this.duration}`);
    }
}
function test(p) {
    p.printDetails();
}
var t = new Tour(1, "8 Hours");
t.title = "Trip to Dubai";
t.price = 1200.000000;
test(t);
// class Student {
//     name: String;
//     age: number;
//     display() {
//         console.log("Hi " + this.name);
//         console.log("Your age is " + this.age);
//     }
// }
// var sai = new Student();
// sai.name = "Sai Sampath Kumar";
// sai.age = 23;
// sai.display();
//# sourceMappingURL=play.js.map