/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (53.91%)
 * Likes:    833
 * Dislikes: 0
 * Total Accepted:    145.2K
 * Total Submissions: 269.2K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left  。请你反转从位置 left 到位置 right 的链表节点，返回
 * 反转后的链表 。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
 * 输出：[1,4,3,2,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [5], left = 1, right = 1
 * 输出：[5]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点数目为 n
 * 1 
 * -500 
 * 1 
 * 
 * 
 * 
 * 
 * 进阶： 你可以使用一趟扫描完成反转吗？
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
 * 穿针引线 - 头插法 
 * 一次遍历
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummyNode = new ListNode(-1)
    dummyNode.next = head
    let pre = dummyNode
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }
    let cur = pre.next
    for (let i = 0; i < right - left; i++) {
        const next = cur.next
        cur.next = next.next
        next.next = pre.next
        pre.next = next
    }
    return dummyNode.next
};

/**
 * 穿针引线
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    const dummyNode = new ListNode(-1)
    dummyNode.next = head
    let pre = dummyNode

    // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next
    }

    // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
    let rightNode = pre
    for (let i = 0; i < right - left + 1; i++) {
        rightNode = rightNode.next
    }
    let leftNode = pre.next, cur = rightNode.next


    // 第 3 步：切断出一个子链表（截取链表）
    pre.next = null
    rightNode.next = null

    // 反转子区间
    reverseLinkedList(leftNode)

    // 重新接上
    pre.next = rightNode
    leftNode.next = cur

    return dummyNode.next
};

var reverseLinkedList = function(head) {
    let pre = null, cur = head
    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
}

// @lc code=end

