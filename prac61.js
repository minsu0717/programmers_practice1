function solution(s) {
  let obj = {};
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]] += 1;
    } else {
      obj[s[i]] = 1;
    }
  }
  for (const [key, val] of Object.entries(obj)) {
    if (val === 1) {
      arr.push(key);
    }
  }

  return arr.sort().join("");
}
