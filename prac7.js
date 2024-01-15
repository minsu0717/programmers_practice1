function solution(myString) {
  var answer = "";
  for (str of myString) {
    if (str === "a" || str === "A") {
      answer += str.toUpperCase();
    } else {
      answer += str.toLowerCase();
    }
  }
  return answer;
}
