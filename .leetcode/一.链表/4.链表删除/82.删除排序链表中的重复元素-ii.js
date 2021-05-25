/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (50.44%)
 * Likes:    617
 * Dislikes: 0
 * Total Accepted:    142K
 * Total Submissions: 271.5K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 返回同样按升序排列的结果链表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,1,1,2,3]
 * 输出：[2,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目在范围 [0, 300] 内
 * -100 
 * 题目数据保证链表已经按升序排列
 * 
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
 * @param {ListNode} head
 * @return {ListNode}
 */

 var deleteDuplicates = function(head) {
    if (!head || !head.next) return head
    if (head.val === head.next.val) {
        while (head.next && head.next.val === head.val)  head.next = head.next.next
        return deleteDuplicates(head.next)
    }else {
       head.next = deleteDuplicates(head.next)
    }
    return head
}


/**
 * 迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const dummyHead = new ListNode(-1)
    dummyHead.next = head
    let pre = dummyHead
    while (pre.next && pre.next.next) {
        if (pre.next.val === pre.next.next.val) {
            //记录重复元素的值 因为pre.next是会变动的，它的val会发生改变
            const repeatVal = pre.next.val
            while (pre.next && pre.next.val === repeatVal) {
                pre.next = pre.next.next
            }
        } else {
            pre = pre.next
        }
    }
    return dummyHead.next
};


/**
 * 递归
 * 
 * 如果 head.val != head.next.val ，说明头节点的值不等于下一个节点的值，所以当前的 head 节点必须保留；但是 head.next 节点要不要保留呢？我们还不知道，需要对 head.next 进行递归，即对 head.next 作为头节点的链表，去除值重复的节点。所以 head.next = deleteDuplicates(head.next)
 * 如果 head.val == head.next.val ，说明头节点的值等于下一个节点的值，所以当前的 head 节点必须删除；但是 head.next 节点要不要删除呢？我们还不知道，需要一直向后遍历寻找到与 head.val 不等的节点。与 head.val 相等的这一段链表都要删除，因此返回 deleteDuplicates(head.move);
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    // 递归终止条件
    if (!head || !head.next) return head
    if (head.val === head.next.val) {
        while (head.next && head.next.val === head.val) {
            head.next = head.next.next
        }
        return deleteDuplicates(head.next)
    } else {
        head.next = deleteDuplicates(head.next)
    }
    return head
}

// @lc code=end

