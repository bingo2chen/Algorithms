/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (71.47%)
 * Likes:    1616
 * Dislikes: 0
 * Total Accepted:    479K
 * Total Submissions: 670.2K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 递归
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 存在最小子问题 递归终止条件
    if (head == null || head.next == null) return head
    // 记录反转后的子链表 递
    let ret = reverseList(head.next)
    // 实现反转 归 
    head.next.next = head
    head.next = null
    return ret
};

/**
 * 迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
   let pre = null, cur = head
   while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
   }
   return pre
};
// @lc code=end

