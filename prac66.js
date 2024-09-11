function solution(my_str, n) {
  var answer = [];
  let i = 0;
  let a = 1;
  while (i < my_str.length) {
    answer.push(my_str.slice(i, n * a));
    i += n;
    a++;
  }
  return answer;
}
