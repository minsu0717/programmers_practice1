function solution(arr, delete_list) {
  var answer = [];
  for (let i = 0; i < delete_list.length; i++) {
    // console.log(arr.indexOf(delete_list[i]))
    if (arr.indexOf(delete_list[i]) !== -1) {
      arr.splice(arr.indexOf(delete_list[i]), 1);
    }
  }
  answer = arr;
  return answer;
}
