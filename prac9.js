function solution(my_string, alp) {
  var answer = "";
  if (my_string.indexOf(alp) === -1) {
    answer = my_string;
  } else {
    answer = my_string.split(alp).join(alp.toUpperCase());
  }
  return answer;
}
