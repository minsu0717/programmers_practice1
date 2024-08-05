function solution(quiz) {
  var result = [];
  let realAnswer = 0;
  for (let question of quiz) {
    const siq = question.split("=")[0];
    const answer = Number(question.split("=")[1]);

    if (siq.split(" ").slice(0, 3)[1] === "-") {
      realAnswer =
        Number(siq.split(" ").slice(0, 3)[0]) -
        Number(siq.split(" ").slice(0, 3)[2]);
    } else {
      realAnswer =
        Number(siq.split(" ").slice(0, 3)[0]) +
        Number(siq.split(" ").slice(0, 3)[2]);
    }
    console.log(realAnswer);
    if (realAnswer === answer) {
      result.push("O");
    } else {
      result.push("X");
    }
  }
  return result;
}

function solution(quiz) {
  var result = [];

  quiz.forEach((e) => {
    if (eval(e.split("=")[0]) === Number(e.split("=")[1])) {
      result.push("O");
    } else {
      result.push("X");
    }
  });

  return result;
}
