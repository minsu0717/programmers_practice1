function solution(n, k) {
  var answer = [];
  for (let i = n; i > 0; i--) {
    if (i % k === 0) {
      answer.push(i);
    }
  }
  return answer.reverse();
}
