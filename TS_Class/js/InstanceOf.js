"use strict";
/*Преобразование ссылочных типов
   instanceOf*/
class FrontendDev {
    constructor(frondendTechnology) {
        this.frondendTechnology = frondendTechnology;
    }
}
class FullStackDeveloper extends FrontendDev {
    constructor(frondendTechnology, backendTechnology) {
        super(frondendTechnology);
        this._backendTechnology = backendTechnology;
    }
    get backendTechnology() {
        return this._backendTechnology;
    }
}
/* // восходящиие преобразования, от более конкретного типа к более общему - от призводного типа FullStackDeveloper к базовому типу FrontendDev */
const mike = new FullStackDeveloper(['HTML', 'JS'], ['NodeJS']);
console.log(mike);
// mike.backendTechnology //Property 'backendTechnology' does not exist on type 'FrontendDev'.
// const mike: FullStackDeveloper = new FullStackDeveloper(['HTML', 'JS'], ['NodeJS']);  
// console.log(mike);
// mike.backendTechnology //Property 'backendTechnology' does not exist on type 'FrontendDev'.
// const mikeInGoogle: FrontendDev = mike
/* нисходящее преобразования  от более общего типа к более конкретному; */
// const mikeFullstack: FullStackDeveloper = <FullStackDeveloper>mike;  // преобразование к типу FullStackDeveloper;
// mikeFullstack.backendTechnology // нет ошибки 
// //или
// console.log((<FullStackDeveloper>mike).backendTechnology);
// const mikeFullstack: FullStackDeveloper = mike as FullStackDeveloper;
// mikeFullstack.backendTechnology; // нет ошибки 
////или
// console.log((mike as FullStackDeveloper).backendTechnology);
/*Оператор instanceof проверяет, принадлежит ли объект к определённому классу. Оператор instanceof проверяет, присутствует ли объект constructor.prototype в цепочке прототипов object.*/
// console.log(mike instanceof FrontendDev) //true
// console.log(mike instanceof FullStackDeveloper) //true
// const nina: FrontendDev = new FrontendDev(['HTML', 'CSS', 'JS']);
// console.log(nina instanceof FrontendDev) //true
// console.log(nina instanceof FullStackDeveloper) //false
