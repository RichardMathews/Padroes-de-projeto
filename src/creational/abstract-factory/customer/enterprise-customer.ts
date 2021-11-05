import { Customer } from "../customer/customer";

export class EnterpriseCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' (ENTERPRISE)'
  }
}