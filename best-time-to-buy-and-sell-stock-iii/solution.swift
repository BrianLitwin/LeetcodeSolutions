/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
*/

class Solution {
    func maxProfit(_ prices: [Int]) -> Int {
        guard prices.count > 0 else { return 0 }
        var k = 2
        var row = Array.init(repeating: 0, count: prices.count)
        var profits = Array.init(repeating: row, count: k + 1)

        for  i in 1..<k + 1 {
            var maxP = Int.min

            for j in 1..<prices.count {
                maxP = max(maxP, profits[i - 1][j - 1] - prices[j - 1])
                profits[i][j] = max(profits[i][j - 1], maxP + prices[j])
            }
        }

        return profits.last!.last!
    }
}
