function solution(emergency) {
  var answer = [];
  let arr = emergency.slice();
  arr.sort((a, b) => b - a);
  answer = emergency.map((e) => arr.indexOf(e) + 1);
  return answer;
}
