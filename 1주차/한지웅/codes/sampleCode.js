// ./codes/sampleCode.ts
// 단어 두개를 붙히는 함수
function connectWord(x, y) {
    return x + y;
}
// 더하는 함수
function plus(x, y) {
    return x + y;
}
var stringX = 'Hello';
var stringY = 'TypeScript!';
var numberX = 1;
var numberY = 99;
console.log(plus(stringX, stringY)); // 실행되긴 한다!(Node의 특징) 하지만 IDE에서 에러를 확인할 수 있다.
console.log(plus(numberX, numberY));
