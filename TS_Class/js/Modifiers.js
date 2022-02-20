"use strict";
// // /* В TypeScript существует три модификатора доступа, указывающихся с помощью ключевых слов 
// // -public, 
// // -protected 
// // -private. 
// //  Когда класс состоит только из статических свойств и методов, как например класс Math, его конструктор можно пометить, как приватный, и тем самым запретить создавать его экземпляры. Класс, у которого конструктор объявлен с модификатором доступа private, нельзя расширять (extends).
// //  Класс, в котором конструктор объявлен с модификатором доступа protected, также, как и в случаи с модификатором доступа private, не позволит создать свой экземпляр, но открыт для расширения (extends).*/
// class Person {
//   public name: string; //default 
//   protected age: number;
//   private _password: string;
//   public constructor(name: string, age: number, password: string){
//     this.name = name;
//     this.age = age;
//     this._password = password;
//   }
//   public fullInfo(): string {
//     return `Name: ${this.name}, Age: ${this.age}`
//   }
//   protected growUp(): void {
//     this.age ++
//   }
//   private _changePassword(password: string): void {
//     this._password = password;
//   }
// }
// const tom = new Person('Tom', 30, '******');
// tom.name = 'Bob';
// tom.age = 25;  // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
// tom._password = '***'; //Property 'password' is private and only accessible within class 'Person'.
// tom.growUp() // Property 'growUp' is protected and only accessible within class 'Person' and its subclasses.
// tom.changePassword('**') //Property 'changePassword' is private and only accessible within class 'Person'.
// /*Использование модификаторов в параметрах конструктора позволяет сократить написание кода */
// class BirdEntity { // default
//   public name: string;
//   public age: number;
//   public isLife: boolean;
//   /*обычный способ инициализации полей класса*/
//   constructor( name: string, age: number, isLife: boolean ){
//     this.name = name;
//     this.age = age;
//     this.isLife = isLife;
//   }
// }
// // /* short сокращенный способ инициализации полей класса. Обязательным условием является указание одного из существующих модификатора доступа (либо модификатора readonly), без которого идентификатор является обычным параметром.*/ 
// class FishEntity { 
//   public constructor(
//     public name: string ,
//     public age: number,
//     public isLife: boolean
//   ){}
// }
// class HourseEntity {
//   constructor(
//       name: string, // param
//       public age: number, // field
//       isLife: boolean // param
//   ){}
// }
