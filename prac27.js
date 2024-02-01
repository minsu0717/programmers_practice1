function solution(arr) {
  function transformArray(arr) {
    return arr.map((num) => {
      if (num >= 50 && num % 2 === 0) {
        return num / 2;
      } else if (num < 50 && num % 2 === 1) {
        return num * 2 + 1;
      } else {
        return num;
      }
    });
  }

  let x = 0;
  while (true) {
    const arrX = transformArray(arr.slice());
    if (JSON.stringify(arrX) !== JSON.stringify(arr)) {
      x += 1;
    } else {
      return x;
    }
    arr = arrX;
  }
}
