import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../utils/random-numbers";
import { Vehicle } from "../vehicle/vehicle";

export function randomCar(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle('RX-7');
  const car2 = carFactory.getVehicle('R34');
  const bicycle = bicycleFactory.getVehicle('Montain');
  const cars = [car1, car2, bicycle];

  return cars[randomNumbers(cars.length)]
}