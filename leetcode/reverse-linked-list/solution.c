/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

 struct ListNode* reverseList(struct ListNode* head) {
   struct ListNode* node = head;
   struct ListNode* prev = NULL;

   while (node) {
     struct ListNode* temp = node->next;
     node->next = prev;
     prev = node;
     node = temp;
   }

   return prev;
 }
 
