function solution(a, b) {
  var answer = 0;
  const string_a = String(a);
  const string_b = String(b);

  const result_1 = Number(string_a + string_b);
  const result_2 = Number(string_b + string_a);
  console.log(result_1, result_2);
  if (result_1 > result_2) {
    answer = result_1;
  } else if (result_1 < result_2) {
    answer = result_2;
  } else if (result_1 === result_2) {
    answer = result_1;
  }
  return answer;
}
