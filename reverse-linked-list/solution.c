/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


int countNodes(struct ListNode *head);

struct ListNode* reverseList(struct ListNode* head) {
    
    if (head == NULL) return NULL;
    
    int count = countNodes(head);
    
    struct ListNode *arr[count + 1]; 
    
    struct ListNode *next = head; 
    count = 0; 
    arr[0] = next; 
    
    while ((next = next->next) != NULL) {
        count += 1;
        arr[count] = next; 
    }
    
    int i; 
    arr[0]->next = NULL;
    
    for (i=1;i<=count;i++) {
        arr[i]->next = arr[i-1];
    }
    
    return arr[count];
}

int countNodes(struct ListNode *head) {
    int count = 0;
    struct ListNode *next = head;
    
    while ((next = next->next) != NULL) {
        count += 1;
    }
    
    return count; 
}
