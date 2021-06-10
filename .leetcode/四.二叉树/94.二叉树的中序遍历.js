/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (75.05%)
 * Likes:    980
 * Dislikes: 0
 * Total Accepted:    445.6K
 * Total Submissions: 591K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = [1]
 * 输出：[1]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：root = [1,2]
 * 输出：[2,1]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：root = [1,null,2]
 * 输出：[1,2]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [0, 100] 内
 * -100 
 * 
 * 
 * 
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
 * @param {TreeNode} root
 * @return {number[]}
 */
/**
 * 1、申请一个stack，将当前遍历节点保存在栈中
 * 2、对当前节点的左子树重复过程1，直到左子树为空
 * 3、出栈当前节点，对当前节点的右子树重复过程1
 * 4、直到遍历完所有节点
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const ret = []
    const stack = []
    while(root || stack.length) {
        // ------ 核心代码 --------
       if (root) {
           stack.push(root)
           root = root.left
       } else {
           root = stack.pop()
           ret.push(root.val)
           root = root.right
       }
        // ------ 核心代码 --------
    }
    return ret
 }



/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const ret = []
    const traversal = (node, arr) => {
        if (!node) return
        traversal(node.left, ret)
        arr.push(node.val)
        traversal(node.right, ret)
    }
    traversal(root, ret)
    return ret
 }
// @lc code=end

