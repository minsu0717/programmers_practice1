function solution(intStrs, k, s, l) {
  var answer = [];
  for (num of intStrs) {
    const a = Number([...num].splice(s, l).join(""));
    if (a > k) {
      answer.push(a);
    }
  }
  return answer;
}
