var person = {
  name: "Nick",
  year: 1988,
  family: ["Alan", "Patrick"],
  car: {
    year: 2020,
    model: "Kia",
  },
  calculateAge: function () {
    var age = 2018 - this.year; // = person.year
    console.log("Age:", age);
  },
};

console.log(person);

console.log(person.name);
console.log(person["year"]);
console.log(person.car["model"]);

var field = "car";
console.log(person[field].year);

person.year = 2000;
console.log(person);

person.calculateAge();

console.log(person);
