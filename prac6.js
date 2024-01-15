function solution(myString) {
  var answer = [];
  let answer2 = [];
  answer = myString.split("x").sort();
  for (str of answer) {
    if (str !== "") {
      answer2.push(str);
    }
  }
  return answer2;
}
