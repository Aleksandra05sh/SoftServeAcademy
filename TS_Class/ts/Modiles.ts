/*  Модули выполняются не в глобальной, а в своей собственной области видимости. Это означает, что переменные, функции, классы и т.д., объявленные в модуле, не видны вне модуля, за исключением тех случаев, когда они явно экспортированы с использованием одной из форм export. Также, чтобы использовать переменную, функцию, класс, интерфейс, и т.д., экспортированные из другого модуля, необходимо импортировать их с помощью одной из форм import. 
Модули импортируют друг друга, используя загрузчик модулей, который во время выполнения кода находит и выполняет все зависимости модуля перед его выполнением. В JavaScript широко используются такие загрузчики, как CommonJS для Node.js и require.js для веб-приложений.
В TypeScript, как и в ECMAScript 2015, любой файл, содержащий import или export верхнего уровня, считается модулем.*/

/* Export*/
 
// export class Phone {
//   name: string;
//   constructor(n:string){
//       this.name = n;
//   }
// }

// export function call(phone: Phone) : void{
//   console.log("Make a call by", phone.name);
// }

// class Phone implements Device {
//   name: string;
//   constructor(n:string){
//       this.name = n;
//   }
// }
   
// function call(phone: Phone) : void{
//   console.log("Make a call by", phone.name);
// }
// export {Phone, call};



/* Import*/

// import {Phone, call} from "./devices";
// let iphone: Phone = new Phone("iPhone X");
// call(iphone);



/* Псевдонимы */

// import {Phone, call as makeCall} from "./devices.js";
// let iphone: Phone = new Phone("iPhone X");
// makeCall(iphone);

// export {Phone, call as makeCall};

// import {Phone, makeCall} from "./devices.js";
// let iphone: Phone = new Phone("iPhone X");
// makeCall(iphone);

/* Import всего модуля*/

// import * as dev from "./devices.js";
// let iphone: dev.Phone = new dev.Phone("iPhone X");
// dev.makeCall(iphone);



/* Export Defalt*/

// export default class SmartWatch{
//   constructor(private model:string){}

//   printModel(){
//       console.log(`Model: ${this.model}`);
//   }
// }

// // import SmartWatch from "./smartwatch.js"; 
// import Watch from "./smartwatch.js";




