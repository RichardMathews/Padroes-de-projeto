import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Richard', age: 21 });
myDatabaseClassic.add({ name: 'John', age: 30 });

export { myDatabaseClassic };
