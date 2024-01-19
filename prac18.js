function solution(myString, pat) {
  var answer = 0;
  let newStr = "";
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "A") {
      newStr += "B";
    } else {
      newStr += "A";
    }
  }
  answer = newStr.indexOf(pat) !== -1 ? 1 : 0;
  return answer;
}
