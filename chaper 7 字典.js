// 实现字典
// 用数组代替简单对象来实现字典，可利用sort()函数进行键的有序排列
class Dictionary{
    constructor(){
        this.dataStore = new Array();
    }
    add(key,value){
        this.dataStore[key] = value;
    }
    increase(key){
        this.dataStore[key]++;
    }
    find(key){
        return this.dataStore[key];
    }
    remove(key){
        delete this.dataStore[key];
    }
    showAll(){
        let key_arr = Object.keys(this.dataStore);
        key_arr.forEach((key)=>{
            console.log(key+':'+this.dataStore[key])}
        )
    }
    count(){
        return Object.keys().length;
    }
    clear(){
        this.dataStore = [];
    }
}

// 2. 使用Dictionary 类写一个程序，该程序用来存储一段文本中各个单词出现的次数。该程
// 序显示每个单词出现的次数，但每个单词只显示一次。比如下面一段话“the brown fox
// jumped over the blue fox”，程序的输出应为：
// the: 2
// brown: 1
// fox: 2
// jumped: 1
// over: 1
// blue: 1
function countWord(str){
    let wordbook = new Dictionary();
    let str_arr = str.split(" ");
    str_arr.forEach(function(word){
        if(typeof(wordbook.dataStore[word])==='undefined'){
            wordbook.add(word,1);
        }else{
            wordbook.increase(word);
        }
    });
    wordbook.showAll();
}
countWord("the brown fox jumped over the blue fox");