// 修改Queue 类，形成一个Deque 类。这是一个和队列类似的数据结构，允许从队列两端
// 添加和删除元素，因此也叫双向队列。


// 实现队列
class Deque{
    constructor(){
        this.dataStore = [];
    }
    enqueFront(element){
        this.dataStore.unshift(element);
    }
    enqueBack(element){
        this.dataStore.push(element);
    }
    dequeFront(){
        return this.dataStore.shift();
    }
    dequeBack(){
        return this.dataStore.pop();
    }
    front(){
        return this.dataStore[0];
    }
    back(){
        return this.dataStore[this.dataStore.length-1];
    }
}

// 使用前面完成的Deque 类来判断一个给定单词是否为回文。
function isPalindrome(str){
    let str_queue = new Deque();
    let str_out='';
    for(let i = 0;i<str.length;i++){
        str_queue.enqueBack(str[i]);
    }
    let len = str_queue.dataStore.length;
    for(let i = 0;i<len;i++){
        str_out += str_queue.dequeBack();    
    }
    if(str===str_out) {
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome('liveonnoevil'))