import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Marcos', age: 51 });
myDatabaseClassic.add({ name: 'Maria', age: 40 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
