function solution(array) {
  var answer = 0;
  for (let num of array) {
    for (let str of String(num)) {
      if (str === "7") answer++;
    }
  }
  return answer;
}

function solution(array) {
  var answer = 0;
  answer = array
    .join("")
    .split("")
    .filter((e) => e === "7");

  return answer.length;
}
