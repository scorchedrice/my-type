// ./codes/sampleCode.ts

// 단어 두개를 붙히는 함수
function connectWord(x: string, y: string) : string {
  return x + y
}

// 더하는 함수
function plus(x: number, y: number): number {
  return x + y
}

const stringX = 'Hello'
const stringY = 'TypeScript!'
const numberX = 1
const numberY = 99

// console.log(plus(stringX,stringY)) : 실행되긴함, IDE의 오류, 정확한 오류를 보고싶으면 tsc sampleCode.ts 실행으로 확인
console.log(plus(numberX,numberY))

const result = connectWord('Hello', 'World') // connectWord 함수의 return 타입이 string임이 명확하기에 다음처럼 정의할 필요 없다.
const result2 : string = connectWord('Hello', 'TypeScript')

// const obj : { name: 'han' } = { name: 'han'};
// const arr : [1,3,'five'] = [1,3,'five'];
// const func : (a : number, b : string) => string = (a,b) => a + b;

// console.log('객체리터럴[object]',obj.name) // han

const obj = { name : 'han'}; // const obj : {name:string}
const arr = [1,3,'five']; // const arr : ( string| number )[];