function solution(rny_string) {
  let arr = rny_string.split("").map((e) => (e === "m" ? "rn" : e));
  return arr.join("");
}
