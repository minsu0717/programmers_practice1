function solution(num_list) {
  var answer = 0;
  if (num_list.length >= 11) {
    for (num of num_list) {
      answer += num;
    }
  } else {
    for (let i = 0; i < num_list.length; i++) {
      if (i === 0) {
        answer += num_list[i];
      } else {
        answer *= num_list[i];
      }
    }
  }
  return answer;
}
