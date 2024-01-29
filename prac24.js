function solution(n_str) {
  var answer = "";
  let startIdx = 0;
  while (startIdx < n_str.length) {
    if (n_str.slice(startIdx, startIdx + 1) === "0") {
      startIdx += 1;
    } else {
      answer = n_str.slice(startIdx, n_str.length);
      break;
    }
  }
  return answer;
}
