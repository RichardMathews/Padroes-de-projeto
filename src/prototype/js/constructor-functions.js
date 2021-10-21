function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

//Objeto default
const personPrototype = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'Olá';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Richard', 'Mathews', 21);
console.log(person1);
console.log(person1.fullName());

const person2 = new SubPerson('Mike', 'Lins', 21);
console.log(person2);
console.log(person2.fullName());