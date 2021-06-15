/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (55.25%)
 * Likes:    1414
 * Dislikes: 0
 * Total Accepted:    339.6K
 * Total Submissions: 614.6K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 你可以运用递归和迭代两种方法解决这个问题吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * BFS
 * 队列
 * 迭代
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true
    const queue = []
    queue.push(root.left, root.right) // 初始
    while (queue.length) {
        const queueLen = queue.length
        for (let i = 0; i < queueLen; i += 2) {
            const leftNode = queue.shift()
            const rightNode = queue.shift()
            if (leftNode && rightNode === null) {
                return false
            }
            if (rightNode && leftNode === null) {
                return false
            }
            if (leftNode && rightNode) {
                if (leftNode.val != rightNode.val) {
                    return false
                }
                queue.push(leftNode.left, rightNode.right)
                queue.push(leftNode.right, rightNode.left)
            }
        }
    }
    return true
};

/**
 * 递归
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true
    const check = (left, right) => {
        if (left === null && right === null) {
            return true
        }
        if (left && right) {
            return left.val === right.val && check(left.left, right.right) && check(left.right, right.left)
        }
        return false
    }
    return check(root.left, root.right)
};
// @lc code=end

