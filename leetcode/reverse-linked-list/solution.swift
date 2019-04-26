/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *     }
 * }
 */

class Solution {

    func reverseList(_ head: ListNode?) -> ListNode? {
        var lastFlag: ListNode? 
        var nextFlag = head 
        
        while var next = nextFlag {
            var temp = next.next 
            next.next = lastFlag 
            lastFlag = next 
            nextFlag = temp 
        }
        
        return last 
    }

}
