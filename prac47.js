function solution(date1, date2) {
  var answer = 0;
  let one = new Date(date1);
  let two = new Date(date2);
  if (one < two) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}
