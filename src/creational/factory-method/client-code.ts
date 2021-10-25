import { CarFactory } from "./factories/car-factory";
import { randomCar } from "./main/random-vehicle";
import { randomNumbers } from "./utils/random-numbers";

const carFactory = new CarFactory();
const customerNames = ['Ana', 'Jhon', 'Mike', 'V']

for(var i = 0; i < 10; i++) {
  const vehicle = randomCar();
  const name = customerNames[randomNumbers(customerNames.length)];
  
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `S15 - ${randomNumbers(100)}`);
  newCar.stop();
  console.log('------------------------------------')
}