// let num1 = 23;
// let num2 = 45;
// function calculate(num1: number , num2:number){
//     return num1 + num2;
// }
function getOldets(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
var people = [{ age: 40 }, { age: 300 }, { age: 20 }];
console.log(getOldets(people));
