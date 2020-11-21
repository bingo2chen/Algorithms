/**
 * 选择排序
 * @param {*} arr 
 */
function selection(arr) {
  const length = arr.length
  let temp
  for (let i = 0; i < length; i++) {
    let min = i
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j
        temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}

selection(['s', 'o', 'r', 't', 'e', 'x', 'a']) // ["a", "e", "o", "r", "s", "t", "x"]