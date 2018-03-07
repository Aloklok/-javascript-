// 实现集合

class Set{
    constructor(){
        this.dataStore = [];
    }
    add(element){
        if(this.dataStore.indexOf(element)<0){
            this.dataStore.push(element);
            return true;
        }
        else{
            return false;
        }
    }
    remove(element){
        let index = this.dataStore.indexOf(element);
        if(index>-1){
            this.dataStore.splice(index,1);
        }
        else{
            return false;
        }
    }
    show(){
        return this.dataStore;
    }
    size(){
        return this.dataStore.length;
    }
    contains(element){
        if(this.dataStore.indexOf(element)>-1){
            return true;
        }else{
            return false;
        }
    }
    // 并集
    union(set){
        let temSet = new Set();
        for(let i = 0;i<this.dataStore.length;i++){
            temSet.add(this.dataStore[i]);
        }
        for(let i = 0;i<set.size();i++){
            if(!this.contains(set.dataStore[i])){
                temSet.add(set.dataStore[i]);
            }
        }
        return temSet;
    }
    // 交集
    intersect(set){
        let temSet = new Set();
        for(let i = 0;i<set.size();i++){
            if(this.contains(set.dataStore[i])){
                temSet.add(set.dataStore[i]);
            }
        }
        return temSet;       
    }
    // 是set的子集
    subset(set){
        if(this.size()>set.size()){
            return false;
        }else{
            for(let i = 0;i<this.size();i++){
                if(!set.contains(this.dataStore[i])){
                    return false;
                }
            }
        }
        return true;
    }
}

let it= new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
let dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");

// 测试子集

if (dmp.subset(it)) {
console.log("DMP is a subset of IT.");
}
else {
console.log("DMP is not a subset of IT.");
}

//测试交集
dmp.add("Ryan");
let inter = it.intersect(dmp);
console.log(inter.show());

//测试并集
let union = it.union(dmp);
console.log(union.show());

// ES6新数据类型 Set
// let a = new Set(['a','b','c']);
// let b = new Set(['a','c','d']);
// let unionSet = new Set([...a,...b]);
// let intersectSet = new Set([...a].filter(item=>b.has(item)));