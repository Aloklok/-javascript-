// 使用散列显示该字符串出现的单词和它们出现的次数。
class HashTable{
    constructor(){
        this.table = new Array(137);
    }
    hash(data){
        let total = 0;
        for(let i = 0;i<data.length;i++){
            total = 37*total+data[i].charCodeAt();
        }
        return total % this.table.length;
    }
    // 开链法，记录单词名和单词重复次数
    buildChain(){
        for(let i = 0;i<this.table.length;i++){
            this.table[i] = [];
        }
    }
    put(data){
        let pos = this.hash(data);
        if(this.table[pos][0] === undefined){
            this.table[pos][0] = data;
            this.table[pos][1] = 1;
        }
        else{
           this.table[pos][1]++;
        }
    }
    showTable(){
        for(let i = 0;i<this.table.length;i++){
            if(this.table[i][0] !== undefined){
                console.log(this.table[i]);
            }
        }
    }
}

function hashWord(str){
    let hashtable = new HashTable();
    let str_arr = str.split(" ");
    hashtable.buildChain();
    str_arr.forEach(word => {
        hashtable.put(word);
    });
    hashtable.showTable();
}
hashWord("the brown fox jumped over the blue fox")