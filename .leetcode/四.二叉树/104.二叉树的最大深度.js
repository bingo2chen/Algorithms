/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (75.91%)
 * Likes:    902
 * Dislikes: 0
 * Total Accepted:    434.9K
 * Total Submissions: 570.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
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
 * DFS
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    const leftMaxDepth = maxDepth(root.left)
    const rightMaxDepth = maxDepth(root.right)
    return 1 + Math.max(leftMaxDepth, rightMaxDepth)
};

/**
 * BFS
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    let depth = 1
    const queue = [root]
    while (queue.length > 0) {
        const queueLength = queue.length
        for (let i = 0; i < queueLength; i++) {
            const curNode = queue.shift()
            if (curNode.left) queue.push(curNode.left)
            if (curNode.right) queue.push(curNode.right)
        }
        if (queue.length) depth++
    }
    return depth
}


// @lc code=end

