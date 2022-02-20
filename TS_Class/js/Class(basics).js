"use strict";
// // создаем как в ES6
// /* Настройка strictPropertyInitialization определяет, должны ли поля класса инициализироваться в конструкторе.
// Убедитесь, что свойства класса, имеющие значения undefined, получают новые значения внутри конструктора.
// избежать:
// - напрямую инициализируя свойства, 
// - инициализируя их в конструкторе, 
// - добавляя оператор утверждения определённого присваивания (! Если вы намерены инициализировать поле вне конструктора)*/
// class User {
//   _name: string | undefined;
//   _age: number;
//   gender!: string;       
//   constructor(userName: string , userAge: number) { 
//     // this._name = userName;
//     this._age = userAge;
//   }
//   get name (): string | undefined {
//     return this._name;
//   }
//   set name(name: string | undefined)/*:void*/ {
//     this._name = name;
//   }
//   growUp(): void {
//     this._age++
//   }
//   toString(): string {
//     return `Name: ${this._name}. Age: ${this._age}.`
//   }
// }
// class User3 {
//   _name: string;
//   _age: number;
//   constructor(userName: string = 'User', userAge = 28) {  //default
//     this._name = userName;
//     this._age = userAge
//   }
// }
// let sasha = new User3();
// // sasha.gender = 'f';
// //let masha = new User('Sasha', '28'); //Argument of type 'string' is not assignable to parameter of type 'number'.
