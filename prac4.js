function solution(strArr) {
  var answer = [];
  for (str of strArr) {
    if (!str.includes("ad")) {
      answer.push(str);
    }
  }
  return answer;
}
