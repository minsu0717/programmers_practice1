function solution(order) {
  var answer = 0;
  for (let bev of order) {
    if (bev.includes("cafe")) {
      answer += 5000;
    } else {
      answer += 4500;
    }
  }
  return answer;
}
