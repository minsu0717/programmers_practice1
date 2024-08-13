function solution(n) {
  let i = 0;
  let answer = 1;
  let arr = [];
  while (answer <= n) {
    i++;
    answer *= i;
    console.log(answer);
  }
  return i - 1;
}
