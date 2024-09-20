function solution(score) {
  var answer = [];
  for (let arr of score) {
    let avg = (arr[0] + arr[1]) / 2;
    answer.push(avg);
  }
  let arr2 = answer.slice();
  answer.sort((a, b) => b - a);
  let lst = arr2.map((e) => answer.indexOf(e) + 1);
  return lst;
}
