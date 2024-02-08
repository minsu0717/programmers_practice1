function solution(arr, n) {
  var answer = [];
  const startIndex = arr.length % 2 !== 0 ? 0 : 1;
  for (let i = startIndex; i < arr.length; i += 2) {
    arr[i] = arr[i] + n;
  }

  return arr;
}
