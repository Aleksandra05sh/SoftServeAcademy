// class Person {
//   protected age: number;
//   protected name: string;
   
//   public static retirementAge: number = 65;
//   static calculateYears(age: number): number{
//       return Person.retirementAge - age;
//   }
  
//   constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//   }
// }

// let ira = new Person('Ira', 36);
// let years = Person.calculateYears(36);
// console.log(Person.retirementAge);
// console.log(`До пенсии осталось: ${years} лет`);

// /*в статических методах мы можем обращаться к статическим полям или другим статическим методам класса, но мы не можем обращаться к нестатическим полям и методам и использовать ключевое слово this. Например, в следующем случае мы столкнемся с ошибкой при компиляции:*/

// // static calculateYears(): number{
// //   return Person.retirementAge - this.age; // ! Ошибка - this.age - обращение к нестатическому полю
// // }

// /*Также статические поля и методы могут наследоваться, что позволяет обращаться к ним через имя производного класса:*/

// class Employee extends Person {}
// let yearsEmployee = Employee.calculateYears(36);
// console.log(Employee.retirementAge);


