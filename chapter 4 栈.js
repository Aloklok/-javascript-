//实现栈
class Stack{
    constructor(){
        this.top = 0;
        this.dataStore = [];
    }
    pop(){
        return this.dataStore[--this.top];
    }
    push(element){
        this.dataStore[this.top++] = element;
    }
    peek(){
        return this.dataStore[this.top-1];
    }
    clear(){
        this.top=0;
    }
    length(){
        return this.top;
    }
}

// 1. 栈可以用来判断一个算术表达式中的括号是否匹配。编写一个函数，该函数接受一个算
// 术表达式作为参数，返回括号缺失的位置。下面是一个括号不匹配的算术表达式的例
// 子：2.3 + 23 / 12 + (3.14159×0.24。


// 考虑只有右括号缺失的情况
//遇到(将其位置推入栈，遇到）则弹出栈
// 最后栈的长度不为0，说明表达式括号不匹配，返回缺失位置
function spellCheck(exp_str){
    let stack = new Stack();
    for(let i = 0;i<exp_str.length;i++){
        if(exp_str[i] === '('){
            stack.push(i);
        }
        if(exp_str[i] === ')'){
            stack.pop();
        }
    }
    if(stack.length()>0){
        return stack.dataStore.join(",")
    }else{
        return true;
    }
}

console.log(spellCheck("2.3 + 23 / 12 + (3.14159×0.24"));
console.log(spellCheck("3+(3*6+1+(1"));


