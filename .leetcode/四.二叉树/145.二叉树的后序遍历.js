/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Medium (74.30%)
 * Likes:    604
 * Dislikes: 0
 * Total Accepted:    239.8K
 * Total Submissions: 321.8K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [3,2,1]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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
 * 迭代 方式一
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const ret = [], stack = []
    if (root) stack.push(root)
    while (stack.length) {
        const curNode = stack.pop()
        ret.unshift(curNode.val)
        if (curNode.left) {
            stack.push(curNode.left)
        }
        if (curNode.right) {
            stack.push(curNode.right)
        }
    }
    return ret
};



/**
 * 迭代 方式二
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const ret = [], stack = []
    while (root || stack.length) {
        if (root) {
            stack.push(root)
            ret.unshift(root.val) // 头插法
            root = root.right
        } else {
            root = stack.pop()
            root = root.left
        }
    }
    return ret
};


/**
 * 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const ret = []
    const traversal = (node, arr) => {
        if (!node) return
        traversal(node.left, ret)
        traversal(node.right, ret)
        arr.push(node.val)
    }
    traversal(root, ret)
    return ret
};
// @lc code=end

