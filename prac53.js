function solution(i, j, k) {
  var answer = 0;
  for (i; i <= j; i++) {
    for (let s = 0; s < String(i).length; s++) {
      if (String(i)[s].includes(k)) {
        answer++;
      }
    }
  }
  return answer;
}

function solution(i, j, k) {
  var answer = 0;
  for (i; i <= j; i++) {
    String(i)
      .split("")
      .forEach((e) => {
        if (e.includes(k)) answer++;
      });
  }
  return answer;
}
