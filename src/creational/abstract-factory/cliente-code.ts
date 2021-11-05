import { EnterpriseCreateVehicleCustomerFactory } from "./factories/enterprise-customer-vehicle-factory";
import { IndividualCreateVehicleCustomerFactory } from "./factories/individual-vehicle-factory";

const enterpriseFactory =  new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('S15', 'Jhon');
const car2 = individualFactory.createVehicle('R34', 'Mike');

car1.pickUp();
car2.pickUp();