/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
var reverseList = function(head) {
    var node = head; 
    var prev = null; 
    
    while (node != null) {
        // make a copy of node.next 
        var temp = node.next 
        node.next = prev
        prev = node 
        node = temp 
    }
    
    return prev 
};





