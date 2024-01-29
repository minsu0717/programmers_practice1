function solution(strArr) {
  var answer = 0;
  let dict = {};
  for (str of strArr) {
    if (!dict[str.length]) {
      dict[str.length] = 0;
    }

    dict[str.length] += 1;
  }
  const val = Object.values(dict);
  answer = Math.max(...val);
  return answer;
}
