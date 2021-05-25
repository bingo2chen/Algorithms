/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/**
 * 快慢指针
 * slow 慢指针
 * fast 快指针
 * @param {头节点} head
 */
var hasCycle = function(head) {
    if (!head || !head.next) return false;
    let slow = head, fast = head.next
    while (slow != fast) {
        if (!fast || !fast.next) return false
        fast = fast.next.next
        slow = slow.next
    }
    return true
};

/**
 * 标记法
 * @param {头节点} head 
 * @returns 
 */
var hasCycle = function(head) {
    while (head) {
        if (head.flag) return true
        head.flag = true
        head = head.next
    }
    return false
}

/**
 * JSON.stringify
 * 序列化报错
 */
 var hasCycle = function(head) {
   try {
       JSON.stringify(head)
   } catch (error) {
       return true
   }
   return false
}

/**
 * 哈希表
 * @param {头节点} head 
 * @returns 
 */
 var hasCycle = function(head) {
    const visited = new Set()
    while (head) {
        if (visited.has(head)) return true
        visited.add(head)
        head = head.next
    }
    return false
}


// @lc code=end

