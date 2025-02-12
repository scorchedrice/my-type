// // ./codes/sampleCode.ts
//
// // 단어 두개를 붙히는 함수
// function connectWord(x: string, y: string) : string {
//   return x + y
// }
//
// // 더하는 함수
// function plus(x: number, y: number): number {
//   return x + y
// }
//
// const stringX = 'Hello'
// const stringY = 'TypeScript!'
// const numberX = 1
// const numberY = 99
//
// // console.log(plus(stringX,stringY)) : 실행되긴함, IDE의 오류, 정확한 오류를 보고싶으면 tsc sampleCode.ts 실행으로 확인
// console.log(plus(numberX,numberY))
//
// const result = connectWord('Hello', 'World') // connectWord 함수의 return 타입이 string임이 명확하기에 다음처럼 정의할 필요 없다.
// const result2 : string = connectWord('Hello', 'TypeScript')
//
// // const obj : { name: 'han' } = { name: 'han'};
// // const arr : [1,3,'five'] = [1,3,'five'];
// // const func : (a : number, b : string) => string = (a,b) => a + b;
//
// // console.log('객체리터럴[object]',obj.name) // han
//
// const obj = { name : 'han'}; // const obj : {name:string}
// const arr = [1,3,'five']; // const arr : ( string| number )[];
//
// // 차이
// const name_string : string = 'ji-woong';
// const name_String1 : String = new String('ji-woong');
// const name_String2 : String = new String('Han');
// // 사용의 제한
// // console.log(name_String1 + name_String2)
//
// function test(a: number, b: number) {
//   return a+b;
// }
//
// const typeTest : typeof test = (x : number, y : number) => x+y;
//
//
// class Wizard {
//   power : number;
//   constructor(
//     hp : number,
//     mp : number,
//     int : number,
//     nickname : string
//   ) {
//     this.power = hp + mp + int;
//   }
// }
//
// const myCharacter : Wizard = new Wizard(100, 350, 200, '초보자');
// console.log(myCharacter); // Wizard { power: 650 }
//
//
// function toNumber(input : string | number) {
//   if (typeof input === 'string') {
//     // if문에 걸렸으니 자연스럽게 string으로 추론
//     return parseInt(input)
//   }
//
//   // if를 확인한 결과 아님이 판단되었으므로 number로 추론
//   return input;
// }
//

const a : number = '123' as unknown as number
// const b : number = '123' // 이건 오류임

const func: () => void = () => 3;
// const func1 = ():void => 3;


// const str2 : {} = { name : 'hi'};
// console.log(str2.name)


// function throwFunc1() {
//   throw new Error('error1')
// }
// const result1 : void = throwFunc1(); // 선언문(throw)
//
// const throwFunc2 = () => { throw new Error('error2'); }
// const result2 : never = throwFunc2(); // 표현문(throw)
//
// function infFunc1() {
//   while(true) {
//     console.log('infinite')
//   }
// }
// const result3 : void = infFunc1();
//
// const infFunc2 = () => { while(true) console.log('infinite') };
// const result4 : never = infFunc2();


type TestType = number; // 닉네임

// 조합
type TestUser = {
    name: string;
    age: number;
}

function testFunction({ name, age } : TestUser) : TestType {
    console.log(`my name is ${name} and age is ${age}`);
    return age;
}

type Base = {
    name: string;
    age: number;
    hobby: string[];
    language: string[];
}

type BasicInfo = Pick<Base, 'name'|'age'>

namespace Test {
    export interface InnerInterface {
        test : string;
    }

    export type InnerType = { test2 : string }
}

// const ex1 : Test.InnerInterface = {
//     test: 'hi'
// }
//
// const ex2 : Test.InnerType = { test2 : 'bye' }
//
// namespace MyConst {
//     export const a = 10;
// }
//
// console.log(MyConst.a)

// namespace A1 {
//     export interface B {
//         test: string
//     }
// }
//
// namespace A1 {
//     export interface B {
//         test1: string
//     }
// }
//
// const Test : A1.B = {
//     test: '1',
//     test1: '2'
// }
//
// console.log(Test)

// type Sample = {
//     normal : string;
//     optional? : string;
//     readonly onlyRead: string;
// }
//
// const sample : Sample = {
//     normal: 'normal',
//     onlyRead: 'onlyRead',
// }
//
// console.log(sample.optional) // undefined
// sample.onlyRead = 'change!'

// interface Money {
//     amount: number;
//     unit: string;
// }
//
// // const moneyErrorTest : Money = {amount: 200, unit: 'won', year: 1998} // year은 Money 타입에 존재하지 않는다는 에러
// const objectVariableMoney = {amount: 200, unit: 'won', year: 2024};
// const moneyErrorTest : Money = objectVariableMoney; // 에러가 발생하지 않음.
//
// function addMoney(money1: Money, money2: Money) : Money {
//     return {
//         amount: money1.amount + money2.amount,
//         unit: 'won'
//     }
// }
//
// // addMoney(objectVariableMoney, {amount: 200, unit: 'won', year: 1998}) // year은 Money 타입에 존재하지 않는다는 에러
// addMoney(objectVariableMoney, objectVariableMoney) // 에러가 발생하지 않음.

// const {props: {nested : string}} = {props: {nested : 'hi'}}
// // console.log(nested) // 찾을 수 없음.
// console.log(string) // hi, nested에 string이란 변수 이름을 대입한 것
// const { props : {nested} } : { props : {nested : string}} = { props : {nested : 'hello'}};
// console.log(nested)
//
// type rest1 = string
// type rest2 = {
//     a: string;
//     b: number;
// }
//
// const { props: {rest1, ...rest2}} = {props: {rest1: 'hello', a: 'a', b: 1}}

// const obj = {
//     a : '난a',
//     b: '난b',
//     c: 1,
// };
//
// type Keys = keyof typeof obj; // "a"|"b"|"c"
// type Values = typeof obj[Keys] // string|number
//
// type arrKeys = keyof [1,2,3]; // "length"|"toString"| ... |"0"|"1"|"2"
// type arr = [1,2,3]
// type arrLength = arr['length']; // 3
// let testArr : arrKeys;
// testArr = 5; // 모든 number은 배열의 key로 허용된다.
// // testArr = "3"; // 인덱스 밖의 범위로 제한

// type A = {
//     name: string
//     age: number;
// }
// type UNION = "hi"|"hello";
// type B = A['name']; // 인덱스 접근 타입
// type C = Pick<A, 'name'>; // Pick
// type D = {
//     [key in UNION] : string;
// } // 매핑된 객체 타입 ... { hi : string; hello : string}

// const weight : number & {__brand: 'lb'} = 60 as number & {__brand: 'lb'}
// const length : number & {__brand: 'km'} = 60 as number & {__brand: 'cm'}
//
// function showWeight(weight: number & {__brand: 'lb'}) {
//     console.log(`Weight : ${weight}`)
// }
//
// showWeight(weight)
// showWeight(length)

interface A {
    name: string;
    age: number;
    hobby: string[];
    language: string[];
}

interface B extends A {
    name: 'james';
} // name만 바꾸고 A와 형식 동일

type IndexType = A['name']; // string
type PickType = Pick<A, 'name'|'age'>;