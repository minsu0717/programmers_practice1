function solution(hp) {
  var answer = 0;
  answer += Math.floor(hp / 5);
  hp = hp % 5;
  if (Math.floor(hp / 3) >= 1) {
    answer += Math.floor(hp / 3);
    hp = hp % 3;
  }
  if (hp / 3 < 1) {
    answer += hp / 1;
  }
  return answer;
}
