function solution(rank, attendance) {
  var answer = 0;
  let obj = {};
  let threeArr = [];
  for (let i = 0; i < rank.length; i++) {
    if (attendance[i] === true) {
      obj[rank[i]] = i;
    }
  }
  threeArr = Object.values(obj).slice(0, 3);
  answer = threeArr[0] * 10000 + threeArr[1] * 100 + threeArr[2];
  return answer;
}
