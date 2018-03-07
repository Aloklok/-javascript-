// 实现二叉查找树
class Node{
    constructor(data,left,right){
        this.data = data;
        this.left = left;
        this.right =  right;
    }
    show(){
        console.log(this.data);
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    insert(data){
        let node = new Node(data,null,null);
        if(this.root === null){
            this.root = node;
        }else{
            let currNode = this.root;
            let parent;
            while(true){
                parent = currNode;
                if(data>currNode.data){
                    currNode = currNode.right;
                    if(currNode === null){
                        parent.right = node;
                        break;
                    }
                }else{
                    currNode = currNode.left;
                    if(currNode === null){
                        parent.left = node;
                        break;
                    }
                }
            }
        }
    }
    //中序遍历
    inOrder(node){
        if(!(node === null)){
            this.inOrder(node.left);
            node.show();
            this.inOrder(node.right);
        }
    }
    // 先序遍历
    preOrder(node){
        if(!(node === null)){
            node.show();
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    // 后序遍历
    postOrder(node){
        if(!(node === null)){
            this.postOrder(node.left);
            this.postOrder(node.right);
            node.show();
        }
    }
    getMin(){
        let currNode = this.root;
        while(!(currNode.left === null)){
            currNode = currNode.left;
        }
        return currNode.data;
    }
    getMax(){
        let currNode = this.root;
        while(!(currNode.right === null)){
            currNode = currNode.right;
        }
        return currNode.data;
    }
    find(data){
        let currNode = this.root;
        while(!(currNode === null)){
            if(currNode.data = data){
                return currNode;
            }else if(currNode.data<data){
                currNode = currNode.right;
            }else{
                currNode = currNode.left;
            }
        }
        return null;
    }
}

// 测试
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.inOrder(nums.root);
console.log('max = '+nums.getMax());
var value = 22;
var found = nums.find(value);
console.log(found);