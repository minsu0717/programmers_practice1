function solution(my_string, target) {
  var answer = 0;
  answer = my_string.includes(target) === true ? 1 : 0;

  return answer;
}
