function solution(num, k) {
  var answer = 0;
  answer = String(num).indexOf(k) + 1;
  if (answer === 0) answer = -1;
  return answer;
}
