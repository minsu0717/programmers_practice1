function solution(array, n) {
  var answer = [];
  array.sort((a, b) => a - b);
  answer = array.map((e) => Math.abs(e - n));
  let idx = answer.indexOf(Math.min(...answer));
  return array[idx];
}
