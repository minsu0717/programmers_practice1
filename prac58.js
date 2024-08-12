function solution(array) {
  var answer = 0;
  for (let num of array) {
    for (let str of String(num)) {
      if (str === "7") answer++;
    }
  }
  return answer;
}
