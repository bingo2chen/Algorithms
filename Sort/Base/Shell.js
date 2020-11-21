/**
 * 希尔排序
 * @param {*} arr 
 */
function shell(arr) {
  const len = arr.length
  let h = 1,
      temp
  while (h < len / 3) {
    h = h * 3 + 1    // 增量 1,4,13,40....
    console.log(h)
  }
  while (h >= 1) {
    // 插入排序
    for (let i = 0; i < len; i++) {
      for (let j = i; j >= h && arr[j] < arr[j - h]; j-=h) {
        temp = arr[j]
        arr[j] = arr[j - h]
        arr[j - h] = temp      
      }
    }
    h = Math.floor(h / 3)
    console.log('lst', h);
    
  }
  return arr
}

shell([3,2,6,7,8,5,9,2,6,6,1,2,10])