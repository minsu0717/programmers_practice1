function solution(my_string) {
  var answer = [];
  let answer2 = [];
  answer = my_string.split(" ");
  for (str of answer) {
    if (str.length > 0) {
      answer2.push(str);
    }
  }
  return answer2;
}
