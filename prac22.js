function solution(arr) {
  let answer = [];
  let i = 0;

  while (i < arr.length) {
    if (answer.length === 0 || answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
      i += 1;
    } else if (answer[answer.length - 1] === arr[i]) {
      answer.pop();
      i += 1;
    }
  }

  if (answer.length === 0) {
    return [-1];
  } else {
    return answer;
  }
}
