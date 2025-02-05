const sym1 = Symbol('status');
const sym2 = Symbol('status');
console.log(sym1 === sym2) // false;

const globalSym1 = Symbol.for('global')
const globalSym2 = Symbol.for('global')
console.log(globalSym1 === globalSym2) // true

const KEY1 = Symbol()
const secretObj = {
  [KEY1] : '비밀이에요',
  normalKey: '공개되어있어요',
}

console.log(secretObj[KEY1]) // '비밀이에요'
console.log(Object.keys(secretObj)) // ['normalKey'], 심볼인 경우 일반적인 열거에서 제외된다.

const secretKey = Symbol('secret')
class Test {
  constructor() {
    this[secretKey] = 'secret!'
    this.key = 'normal key!'
  }
  getKey() {
    return this[secretKey]
  }
}

const test = new Test();
console.log(test) // 직접 값에 접근 불가 : Test { key: 'normal key!', [Symbol(secret)]: 'secret!' }
console.log(test.getKey()) // secret!
