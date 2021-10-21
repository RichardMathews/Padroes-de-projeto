const personPrototype = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Mike';

console.log(anotherPerson.fullName())