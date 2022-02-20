"use strict";
// /* Перед названием поля можно указать модификатор readonly. Это запретит присваивать полю значения за пределами конструктора.
// Полям класса в процессе работы программы можно присваивать различные значения, которые соответствуют типу полей. Однако TypeScript также позволяет определять поля для чтения, значения которых нельзя изменить (кроме как в конструкторе). Для определения таких полей применяется ключевое слово readonly:
// Если есть геттер, но нет сеттера, свойство автоматически становится readonly. */
// interface IUser {
//   readonly name: string,
//   age: number
// }
// class User implements IUser {
//   private _name: string;
//   protected _age: string;
//   public constructor(userName: string, userAge: string) {
//     this._name = userName;
//     this._age = userAge;
//   }
//   get name(): string {
//     return this._name;
//   }
//   public get age(): number {
//     return Number(this._age);
//   }
//   public set name(name:string) {
//     this._name = name;  //Cannot assign to 'name' because it is a read-only property.
//   }
//   print() {
//     console.log(`name: ${this._name}  age: ${this.age}`);
//   }
// }
// const sam: IUser = new User('Sam', '36');
// sam.name = '26';
// // sam.name = 'Bob';       //  Cannot assign to 'name' because it is a read-only property.
// sam.print();                    // name: Tom  age: 36
/*Если полям, помеченным “только для чтения”, не указан тип данных, а присвоение примитивного значения происходит в месте объявления, то для таких полей, вывод типов укажет принадлежность к литеральному типу.*/
// class Animal {
//            // isLifeDefault: boolean
//   public constructor (
//     public readonly nameReadonly = 'animal',// nameReadonly: "animal"
//     public nameDefault = 'animal',          // nameDefault: string
//     public readonly ageReadonly = 0, // ageReadonly: 0
//     public ageDefault = 0,          // ageDefault: number
//     public readonly isLifeReadonly = true,// isLifeReadonly: true
//     public isLifeDefault = true
//    ) {}
// }
// const an = new Animal();
// console.log(an.nameReadonly) 
