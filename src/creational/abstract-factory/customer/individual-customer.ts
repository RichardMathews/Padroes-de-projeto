import { Customer } from "../customer/customer";

export class IndividualCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' (INDIVIDUAL)'
  }
}