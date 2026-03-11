// loop1.js
let i = 0;

for (;;) {
  // 무한 루프
  ++i;
  if (i % 2 == 1) continue; //홀수는 건너뛰고 짝수만 출력
  console.log(i); // 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
  if (i >= 20) {
    break;
  }
}
