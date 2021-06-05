#### 队列
##### Question
1. 了解 FIFO 和 LIFO 处理顺序的原理；
   1. FIFO（先进先出）：插入insert === 入队enqueue，删除delete === 出队dequeue
2. 实现这两个数据结构；
   1. 队列实现
   ```js
      class Queue {
         constructor() {
            this.headIndex = 0
            this.tailIndex = 0
            this.items = {}
         }
         enqueue(item) {
            this.items[this.tailIndex] = item
            this.tailIndex++
         }
         dequeue() {
            const item = this.items[this.headIndex]
            delete this.items[this.headIndex]
            this.headIndex++
            return item
         }
         get length() {
            return this.tailIndex - this.headIndex
         }
         peek() {
            return this.items[this.headIndex]
         }
      }
      // 测试
      const queue = new Queue()
      queue.enqueue(6)
      queue.enqueue(6)
      queue.enqueue(7)
      queue.enqueue(8)
      queue.enqueue(9)
      queue.dequeue()
      queue.peek()
   ```
   2. 循环队列实现
   ```js
   class CircularQueue {
      constructor(capacity) {
         this.cap = capacity
         this.head = -1
         this.tail = -1
         this.arr = []
      }
      enQueue(value) {
         if (this.isFull()) {
            return false
         }
         if (this.isEmpty()) {
            this.head = 0
         }
         this.tail = (this.tail + 1) % this.cap
         this.arr[this.tail+1] = value
         return true
      }
      deQueue() {
         if (this.isEmpty()) {
            return false
         }
         if (this.head === this.tail) {
            this.head = this.tail = -1
         } else {
            this.head = (this.head + 1) % this.cap
         }
      }
      rear() {
         if (this.isEmpty()) {
            return false
         }
         return this.arr[this.rail]
      }
      front() {
         if (this.isEmpty()) {
            return false
         }
         return this.arr[this.head]
      }
      isEmpty() {
         return this.head === -1
      }
      isFull() {
         return this.head === (this.tail + 1) % this.cap
      }
   }
   ```
3. 熟悉内置的队列和栈结构；
4. 解决基本的队列相关问题，尤其是 BFS（Breath First Search）广度优先搜索；
   - 广度优先搜索（BFS）是一种遍历或搜索数据结构（如树或图）的算法。
   - 我们可以使用 BFS 找到从起始结点到目标结点的路径，特别是最短路径。我们可以在更抽象的情景中使用 BFS 遍历所有可能的状态。在这种情况下，我们可以把状态看作是图中的结点，而以合法的过渡路径作为图中的边。