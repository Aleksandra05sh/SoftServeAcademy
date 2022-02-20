"use strict";
// class Animal {
//   protected name: string;
//   public constructor(theName: string) {
//     this.name = theName;
//   }
//   public move(distanceInMeters: number): string {
//       return `${this.name} moved ${distanceInMeters}m.`;
//   }
// }
// class Snake extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters: number): string {
//     return `Slithering... ${this.name} moved ${distanceInMeters}m.`;   // 
//   }
// }
// class Horse extends Animal {
//   protected age: number;
//   constructor(name: string, age: number) {
//      super(name);
//      this.age = age;
//   }
//   move(distanceInMeters: number): string {
//     const parentmove = super.move(distanceInMeters); //Pony moved 34m.
//     return `Galloping... ${parentmove}`
//   }
// }
// let snake = new Snake('Python');
// let horse: Animal = new Horse('Pony', 25);
// console.log(snake.move(5)); //Slithering... Python moved 5m. 
// console.log(horse.move(34)); //Galloping... Pony moved 34m.
