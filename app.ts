// let num1 = 23;
// let num2 = 45;
// function calculate(num1: number , num2:number){
//     return num1 + num2;
// }

// console.log(calculate(num1 , num2));


// function getTotal(numbers : number[]){
//     return numbers.reduce((acc , item)=>{
//         return acc + item;
//     } ,0)
// }

// console.log(getTotal([2,3,4]));


// Yoc can also do that in another way like
// function getTotal(numbers : Array<number>){
//     return numbers.reduce((acc , item)=>{
//         return acc + item;
//     } ,0)
// }

// console.log(getTotal([5,3,2]));

// const user = {
//     name : "Mudassir",
//     lastName : "Arif",
//     designation : "Front-End"
// }

// console.log(user.name);

// Number 
// String
// Boolean 
// Array

// Type ALIAS
// Question mark mean optional
type User = {
    name : string;
    age : number;
    address ?: string;
}

// const user : User ={
//     name : "Mudassir",
//     age : 22,
//     // address : "Garden West"
// }

// console.log(user)

// function login(userData : User) : User{
//     return userData;
// }

// console.log(login({name : "Arif" , age : 22 }))

// Union
// type ID = number | string ;
// const userId : ID = "hello";



// Interface 
// interface Transaction {
//     payerAccountNumber : number;
//     payeeAccountNumber : number;
// }

// interface BankAccount {
//     accountNumber : number;
//     accountHolder : string;
//     balance : number;
//     isActive : boolean;
//     transaction : Transaction[];
// }

// const transaction1 : Transaction = {
//     payerAccountNumber : 123,
//     payeeAccountNumber : 456,
// }

// const transaction2 : Transaction = {
//     payerAccountNumber : 123,
//     payeeAccountNumber : 789,
// }

// const bankAccount : BankAccount = {
//     accountNumber : 123,
//     accountHolder : "Mudassir",
//     balance : 25000,
//     isActive : true,
//     transaction : [transaction1 , transaction2]
// }


// Another Example 
// interface Book {
//     name : string;
//     price : number;
// }

// const book : Book = {
//     name : "Atomic Habits",
//     price : 500,
// }

// interface Ebook {
//     name : string;
//     price : number;
//     fileSize : number;
//     format : string;
// }

// const eBook : Ebook = {
//     name : "Atomic Habits",
//     price : 300,
//     fileSize : 25,
//     format : "pdf"
// }

// interface AudioBook {
//     name : string;
//     price : number;
//     fileSize : number;
//     format : string;
//     duration : number;
// }

// const audioBook : AudioBook = {
//     name : "Atomic Habits",
//     price : 600,
//     fileSize : 12,
//     format : "mp3",
//     duration : 60
// }

// interface Book {
//     name : string;
//     price : number;
// }

// interface Ebook extends Book {
//     fileSize : number;
//     format : string;
// }

// interface Audiobook extends Ebook {
//     duration : number
// }

// const book : Audiobook = {
//     name : "Programming Fundamentals",
//     price : 500,
//     fileSize : 34,
//     format : "pdf",
//     duration : 45
// }

// type alias can not be extendable however it only for single values not for objects 
type sanitizestring = string;
type EvenNumber = number;

// interface sanitizestring extends string {

// }


// type ID = number | string ;
// function printId(id : ID){
//     if(typeof id === "string"){
//         console.log(id.toLowerCase());
//     }
//     else{
//         console.log(id);
//     }
// }

// printId("1");


// 
// function getFirstThree(x: string | number[]){
//     return x.slice(0 , 3);
// }


// console.log(getFirstThree("hello"));
// console.log(getFirstThree([1,2,3,4,5]));



// Example of Generics
// function logString(arg: string){
//     console.log(arg);
//     return arg;
// }

// logString("Logged in");

// function logNumber(arg: number){
//     console.log(arg);
//     return arg;
// }

// logNumber(123);

// function logArray(arg :any[]){
//     console.log(arg);
//     return arg;
// }

// logArray([1,2,3,4,5]);



// function logAnything<T>(arg : T):T{
//     console.log(arg);
//     return arg;
// }

// logAnything(1);


interface HasAge {
    age : number;
}

function getOldets(people: HasAge[]): HasAge{
    return people.sort((a,b)=> b.age - a.age)[0];
}

const people = [{age : 40} , {age : 300} , {age : 20}]
console.log(getOldets(people));