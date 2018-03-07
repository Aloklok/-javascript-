// 实现循环链表

class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class LList{
    constructor(){
        this.head = new Node('head');
        this.head.next = this.head;
        this.currentNode = this.head;
    }
    find(item){
        let currNode = this.head;
        while(currNode.element !== item){
            currNode = currNode.next;
        }
        return currNode;
    }
    findPrev(item){
        let currNode = this.head;
        while(!(currNode.next.element === item) && !(currNode.next === null)){
            currNode = currNode.next;
        }
        return currNode;
    }
    insert(newElement,item){
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }
    display(){
        let currNode = this.head;
        while(!(currNode.next === null) && !(currNode.next.element === 'head')){
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
    remove(item){
        let prevNode = this.findPrev(item);
        prevNode.next = prevNode.next.next;
    }
    // 当前数组的元素个数
    count(){
        let node = this.head;
        let num = 0;
        while(!(node.next.element === 'head')){
            node = node.next;
            num++
        }
        return num;
    }
    //向前移动n个节点
    advance(n){
        while(n>0){
            if(this.currentNode.next.element === 'head'){
                this.currentNode = this.currentNode.next.next;
            }else{
                this.currentNode = this.currentNode.next;
            }           
            n--; 
        }
    }
}
// 传说在公元1 世纪的犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的40 个同胞
// 被罗马士兵包围。犹太士兵决定宁可自杀也不做俘虏，于是商量出了一个自杀方案。他
// 们围成一个圈，从一个人开始，数到第三个人时将第三个人杀死，然后再数，直到杀光
// 所有人。约瑟夫和另外一个人决定不参加这个疯狂的游戏，他们快速地计算出了两个位
// 置，站在那里得以幸存。写一段程序将n 个人围成一圈，并且第m 个人会被杀掉，计算
// 一圈人中哪两个人最后会存活。使用循环链表解决该问题。
function survivor(n,m){
    let list = new LList();
    list.insert(1,'head')
    for(let i=2;i<=n;i++){
        list.insert(i,i-1);
    }
    while(list.count()>2){
        list.advance(m);
        list.remove(list.currentNode.element);
    }
    list.display();
}

survivor(40,3)