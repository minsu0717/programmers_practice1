function solution(myString) {
  var answer = [];
  for (str of myString.split("x")) {
    answer.push(str.length);
  }
  return answer;
}
