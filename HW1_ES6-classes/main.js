class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value.trim().toLowerCase();
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  get salary() {
    return this._salary;
  }
  set salary(value) {
    this._salary = value;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this.lang = lang;
  }
  get lang() {
    return this._lang;
  }
  set lang(value) {
    this._lang = value.trim().split(" ");
  }
  set salary(value) {
    this._salary = value * 3;
  }
}

const programmerVlad = new Programmer(
  "         vLaD",
  25,
  3200,
  " english, ukraine, spain "
);
const programmerMariya = new Programmer(
  "         MaRiya  ",
  30,
  22000,
  " ukraine, spain"
);
const programmerKatya = new Programmer(
  "      KaTe  ",
  27,
  2000,
  " ukraine, arabic"
);
console.log(programmerVlad);
console.log(programmerMariya);
console.log(programmerKatya);

const checkParams = (...params) => console.log(typeof params);
checkParams("first", "second", "third");
