function solution(num_str) {
  var answer = 0;
  let arr = [];
  arr = [...num_str].map(Number);
  for (num of arr) {
    answer += num;
  }
  return answer;
}
