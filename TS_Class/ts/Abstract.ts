// /* abstract. Они во многом похожи на обычные классы за тем исключением, что мы не можем создать напрямую объект абстрактного класса, используя его конструктор 
// Абстрактный класс, который расширяет другой абстрактный класс, не обязан переопределять все абстрактные члены своего суперкласса. В отличии от абстрактных классов, обычные классы, которые расширяют абстрактные классы, обязанные переопределить все поля, свойства и методы, находящиеся в иерархической цепочке и помеченные ключевым */


// // interface Ifigure {
// //   getArea(): void
// // }

// abstract class Figure1 { }
// // let someFigure = new Figure1()    // Cannot create an instance of an abstract class.

// abstract class Figure  {
//   protected name: string;
//   // protected abstract name: string;
//   abstract getArea(): void;

//   public constructor(name: string) {
//     this.name = name;
//   }

//   // getArea(): void{
//   //   console.log("Not Implemented")
//   // }
// }

// class Rectangle extends Figure {
//   public width: number;
//   public height: number;

//   constructor(name: string, width: number, height: number) { 
//     super(name);
//     this.width = width;
//     this.height = height;
//   }
   
//   getArea(): void{
//     let square = this.width * this.height;
//     console.log("area =", square);
//   }
// }

// let someFigure: Figure = new Rectangle('Rectangle', 20, 30)
// someFigure.getArea();   // area = 600


/* When a class doesn’t have any abstract members, it is said to be concrete. */