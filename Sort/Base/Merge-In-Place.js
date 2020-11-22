/**
 * 归并排序
 * 排序前 left right 需先排序
 * @param {*} arr 
 * @param {*} lo 
 * @param {*} mid 
 * @param {*} hi 
 */
function mergeInPlace(arr, lo, mid, hi) {
  let i = lo,
      j = mid + 1
  const aux = []
  for (let k = lo; k <= hi; k++) {
    aux[k] = arr[k]
  }
  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      arr[k] = aux[j++]
    } else if (j > hi) {
      arr[k] = aux[i++]
    } else if (aux[i] > aux[j]) {
      arr[k] = aux[j++]
    } else {
      arr[k] = aux[i++]
    }
  }
  return arr
}

mergeInPlace([3,4,3,9,8,6,6,3,1,0], 1, 4, 9)