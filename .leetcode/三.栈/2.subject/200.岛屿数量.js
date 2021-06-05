/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 *
 * https://leetcode-cn.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (52.95%)
 * Likes:    1178
 * Dislikes: 0
 * Total Accepted:    260.1K
 * Total Submissions: 481.6K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：grid = [
 * ⁠ ["1","1","1","1","0"],
 * ⁠ ["1","1","0","1","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","0","0","0"]
 * ]
 * 输出：1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：grid = [
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["1","1","0","0","0"],
 * ⁠ ["0","0","1","0","0"],
 * ⁠ ["0","0","0","1","1"]
 * ]
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == grid.length
 * n == grid[i].length
 * 1 
 * grid[i][j] 的值为 '0' 或 '1'
 * 
 * 
 */

/**
 * dfs 广度优先搜索 递归
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // 遍历遇到 1 就是遇到土地，它肯定在一个岛上，统计计数 +1
            if (grid[i][j] === '1') {
                count++
                turnZero(i, j, grid)
            }
        }
    }
    return count
};
var turnZero = function(i, j, grid) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') return
    // 访问过标记为0，防止重复遍历
    grid[i][j] = '0'
    turnZero(i, j + 1, grid)
    turnZero(i, j - 1, grid)
    turnZero(i - 1, j, grid)
    turnZero(i + 1, j, grid)
}


/**
 * dfs 深度优先搜索
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0
    let queue = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++
                grid[i][j] = '0'
                queue.push([i, j])
                turnZero(queue, grid)
            }
        }
    }
    return count
};
var turnZero = function(queue, grid) {
    const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    while (queue.length) {
        const cur = queue.shift()
        for (const dir of direction) {
            // 改变坐标 上下左右
            const x = cur[0] + dir[0]
            const y = cur[1] + dir[1]
            if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== '1') continue
            grid[x][y] = '0'
            queue.push([x, y])
        }
    }

}
 // @lc code=end

