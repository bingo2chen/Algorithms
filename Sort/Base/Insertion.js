/**
 * 插入排序
 * @param {*} arr 
 */
function insertion(arr) {
  const length = arr.length
  let temp
  for (let i = 0; i < length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      temp = arr[j]
      arr[j] = arr[j - 1]
      arr[j - 1] = temp
    }
  }
  return arr
}

insertion(['s', 'o', 'r', 't', 'e', 'x', 'a']) // ["a", "e", "o", "r", "s", "t", "x"]