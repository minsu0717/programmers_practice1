function solution(num_list) {
  var answer = 0;
  let answer2 = 0;
  for (let i = 0; i < num_list.length; i++) {
    answer = num_list[i];
    let cnt = 0;
    while (answer !== 1) {
      if (answer % 2 === 0) {
        answer = answer / 2;
        cnt += 1;
      } else {
        answer = (answer - 1) / 2;
        cnt += 1;
      }
    }
    answer2 += cnt;
  }
  return answer2;
}
