// const2.js
let s1 = "hello world";
const s2 = "hello world";

console.log(s1); // 지역변수 s1의 값은 변경할 수 있다.
console.log(s2); // const 변수의 값은 변경할 수 없으므로, 에러가 발생한다.

s1 = "안녕하세요";
console.log(s1); // 지역변수 s1의 값은 변경할 수 있다.

s2 = "안녕하세요";
console.log(s2); // const 변수의 값은 변경할 수 없으므로, 에러가 발생한다.