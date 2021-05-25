/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (69.33%)
 * Likes:    913
 * Dislikes: 0
 * Total Accepted:    257.6K
 * Total Submissions: 369.9K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1]
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中节点的数目在范围 [0, 100] 内
 * 0 
 * 
 * 
 * 
 * 
 * 进阶：你能在不修改链表节点值的情况下解决这个问题吗?（也就是说，仅修改节点本身。）
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
 * 迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const dummyNode = new ListNode(-1)
    dummyNode.next = head
    let pre = dummyNode
    while (pre.next && pre.next.next) {
        let node1 = pre.next, 
            node2 = pre.next.next
        node1.next = node2.next
        pre.next = node2
        node2.next = node1
        pre = node1
    }
    return dummyNode.next
};

/**
 * 递归
 * 返回值：交换完成的子链表
 * 调用单元：设需要交换的两个点为 head 和 newHead，head 连接后面交换完成的子链表，newHead 连接 head，完成交换
 * 终止条件：head 为空指针或者 next 为空指针，也就是当前无节点或者只有一个节点，无法进行交换
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    //  终止条件
    if (!head || !head.next) return head

    // 调用单元
    let newHead = head.next
    head.next = swapPairs(newHead.next)
    newHead.next = head

    返回值
    return newHead
};


// @lc code=end

