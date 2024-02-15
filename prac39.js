function solution(a, b) {
  var answer = 0;
  if (a % 2 !== 0 && b % 2 !== 0) {
    answer = a * a + b * b;
  } else if (a % 2 !== 0 || b % 2 !== 0) {
    answer = 2 * (a + b);
  } else {
    answer = a - b;
    if (answer < 0) {
      answer = -answer;
    }
  }
  return answer;
}