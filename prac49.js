function solution(n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(i === j ? 1 : 0);
    }
    answer.push(row);
  }
  return answer;
}
