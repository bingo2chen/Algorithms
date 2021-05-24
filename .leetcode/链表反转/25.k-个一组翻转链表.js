/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (64.37%)
 * Likes:    1091
 * Dislikes: 0
 * Total Accepted:    172.2K
 * Total Submissions: 265.5K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 进阶：
 * 
 * 
 * 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 3
 * 输出：[3,2,1,4,5]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 1
 * 输出：[1,2,3,4,5]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：head = [1], k = 1
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 列表中节点的数量在范围 sz 内
 * 1 
 * 0 
 * 1 
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
 * @param {number} k
 * @return {ListNode}
 */

 var myReverse = function(head, tail) {
    //  前一个节点 指向尾节点的下一个节点
    let prev = tail.next
    let curr = head
    while (prev !== tail) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return [tail, head]
}
var reverseKGroup = function(head, k) {
    const hair = new ListNode(-1)
    hair.next = head
    let pre = hair
    while (head) {
        let tail = pre
        for (let i = 0; i < k; ++i) {
            // 计算尾节点位置
            tail = tail.next;

            // 末尾不足k
            if (!tail) {
                return hair.next;
            }
        }
        const nex = tail.next;

        // 反转子链表
        [head, tail] = myReverse(head, tail)

        // 子链表重新接回原链表
        pre.next = head
        tail.next = nex
        pre = tail
        head = tail.next
    }
    return hair.next
};
// @lc code=end

