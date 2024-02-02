function solution(arr1, arr2) {
  var answer = 0;
  let sum1 = 0;
  let sum2 = 0;
  if (arr1.length !== arr2.length) {
    if (arr1.length > arr2.length) {
      answer = 1;
    } else {
      answer = -1;
    }
  } else {
    arr1.forEach((num) => {
      sum1 += num;
    });
    arr2.forEach((num) => {
      sum2 += num;
    });
    if (sum1 > sum2) {
      answer = 1;
    } else if (sum1 < sum2) {
      answer = -1;
    } else if (sum1 === sum2) {
      answer = 0;
    }
  }
  return answer;
}
