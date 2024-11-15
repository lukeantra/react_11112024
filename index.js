// oop 
// function PersonFn(name, age){
//     this.name = name;
//     this.age = age;
// }

// const dio = new PersonFn('Dio', 20);
// console.log(dio);

// PersonFn.prototype.run = function(){
//     console.log(`${this.name} is running`);
// }

// dio.run();

// es6 class 
// class Person {
//     #name;
//     #age;
//     height;
//     constructor(name, age, height){
//         this.#name = name;
//         this.#age = age;
//         this.height = height;
//     }

//     get name() {
//         return this.#name;
//     }

//     set name(newName){
//         this.#name = newName;
//     }

//     run() {
//         console.log(`${this.name} is running`);
//         // console.log(this.#name + 'is running');
//     }
// }

// const dio = new Person('Dio', 20, 6);
// console.log(dio);
// console.log(dio.name);
// dio.name = 'Jojo';
// console.log(dio.name);

// // Inheritance -> keyword: extends

// class Employee extends Person {
//     #company;
//     constructor(name, age, height, company){
//         super (name, age, height);
//         this.#company = company;
//     }

//     get company(){
//         return this.#company
//     }

//     jump() {
//         console.log(`${this.name} is jumping`);
//     }

// }

// const e = new Employee('Dio', 20, 6, 'Apple');
// e.jump();
// e.run();
// e.run();
// console.log(e);


// loop

const arr = [1, 2, 3];
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for (let index in arr){
//     console.log(arr[index]);
//     console.log(typeof index);
// }

// for (const index in arr){
//     console.log(index, arr[index]);
// }

// const obj = {name: 'Dio', age: 20}
// console.log(obj.name, obj['name'])

// arr.forEach((ele, i, array)=> {
//     array[i] = ele + 1;
//     console.log(ele, i, array, arr);
//     console.log(arr === array);
// })

// Array.prototype.myForEach = function (cbFn) {
//     for(let i = 0; i < this.length; i++) {
//         cbFn(this[i], i, this)
//     }
// }

// forEach vs map
console.log(arr.forEach(function(ele){
    return ele;
}))
console.log(arr.map(function(ele){
    return ele;
}))





