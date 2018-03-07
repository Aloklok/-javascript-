// 1. 增加一个向列表中插入元素的方法，该方法只在待插元素大于列表中的所有元素时才执
// 行插入操作。这里的大于有多重含义，对于数字，它是指数值上的大小；对于字母，它
// 是指在字母表中出现的先后顺序。


// 实现列表
class List{
    constructor(){
        this.list = [];
        this.pos = 0;
        this.listSize = 0;
    }
    append(element){
        this.list[this.listSize++] = element;
    }
    find(element){
        for(let i = 0;i<this.list.length;i++){
            if(this.list[i] ===element){
                return i;
            }
            return -1;
        }
    } 
    remove(element){
        let foundAt=find(element);
        if(foundAt>-1){
            this.list.splice(foundAt,1);
            this.listSize--;
            return true;
        }
        return false;
    }
    clear(){
        this.list = [];
        this.pos = this.listSize = 0;
    }
    //迭代器
    front(){
        this.pos = 0;
    }
    end(){
        this.pos = this.listSize-1;
    }
    prev(){
        this.pos--;
    }
    next(){
        this.pos++;
    }
    moveTo(position){
        this.pos = position;
    }
    getElement(){
        return this.list[this.pos];
    }
    //比较函数，当a>b时，返回true  
    compareSequence(a,b){
        if(typeof(a)==='string' && typeof(b)==='string'){
            if(a.toLowerCase()>b.toLowerCase()){
                return true;
            }else{
                return false;
            }
        }
        if(typeof(a)==='number' && typeof(b)==='number'){
            if(a>b){
                return true;
            }else{
                return false;
            }
        }
        return true;
    }
    //增加的插入元素方法
    insert(position,element){
        for(this.front();this.pos<this.listSize;this.next()){
            if(!this.compareSequence(element,this.getElement())){
                return false;
            }
        }
        this.list.splice(position,0,element);
    };
}

let list = new List();
list.append(1);
list.append(2);
list.append('b');
list.insert(3,'a');
list.insert(2,5);
console.log(list.list)

