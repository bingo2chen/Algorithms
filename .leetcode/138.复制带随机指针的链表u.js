/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 *
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/description/
 *
 * algorithms
 * Medium (60.41%)
 * Likes:    570
 * Dislikes: 0
 * Total Accepted:    73.7K
 * Total Submissions: 120K
 * Testcase Example:  '[[7,null],[13,0],[11,4],[10,2],[1,0]]'
 *
 * 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。
 * 
 * 构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 next 指针和 random
 * 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。
 * 
 * 例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random
 * --> y 。
 * 
 * 返回复制链表的头节点。
 * 
 * 用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：
 * 
 * 
 * val：一个表示 Node.val 的整数。
 * random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
 * 
 * 
 * 你的代码 只 接受原链表的头节点 head 作为传入参数。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：head = [[1,1],[2,1]]
 * 输出：[[1,1],[2,1]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 
 * 
 * 输入：head = [[3,null],[3,0],[3,null]]
 * 输出：[[3,null],[3,0],[3,null]]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：head = []
 * 输出：[]
 * 解释：给定的链表为空（空指针），因此返回 null。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * -10000 
 * Node.random 为空（null）或指向链表中的节点。
 * 
 * 
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 递归
 * Map作哈希表（对象的key不能为对象，Map可以），以节点为键存节点的副本
 * 先跟随next指针递归，哈希表中存入全部节点的副本
 * next递归回溯阶段，当前节点作键查哈希表，将random指针当前节点的副本
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head, h = new Map()) {
    // return head === null ? null : h.has(head) ? h.get(head) : 
    //     (h.set(head, {val: head.val}), 
    //     Object.assign(h.get(head), {
    //         next: copyRandomList(head.next, h), 
    //         random: copyRandomList(head.random, h)
    // }))
};


/**
 * 迭代
 * 第一次迭代，复制链表每个节点到被复制节点右侧，连起来。
原来 A → B → C，复制后 A → 副本A → B → 副本B → C → 副本C
 * 第二次迭代，把副本的random指向左侧本尊.random.next，即本尊.random的副本
 * 第三次迭代，恢复A → B → C...，副本A → 副本B → 副本C...，返回 副本A
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head, p = head) {
    while(head) {
        head.next = {val: head.val, next: head.next}
        head = head.next.next
    }
    head = p
    while(head) {
        head.next.random = head.random ? head.random.next : null
        head = head.next.next
    }
    head = p, head && (p = head.next)
    while(head && head.next) {
        var t = head.next.next
        head.next.next = t ? t.next : null
        head = head.next = t
    }
    return p
}
// @lc code=end

