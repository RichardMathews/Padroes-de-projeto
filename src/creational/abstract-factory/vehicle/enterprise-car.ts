import { Customer } from "../customer/customer";
import { VehicleProtocol } from "../vehicle/vehicle-protocol";

export class EnterpriseCar implements VehicleProtocol {
  constructor(public name: string, private readonly costumer: Customer) {}

  pickUp(): void {
    console.log(`${this.name} está buscando ${this.costumer.name} (ENTERPRISE)`);
  }
}