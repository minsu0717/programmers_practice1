function solution(myString, pat) {
  var answer = 0;
  const str = myString.toLowerCase();
  const p = pat.toLowerCase();
  answer = str.includes(p) ? 1 : 0;
  return answer;
}
