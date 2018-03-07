// 1. 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。
const grade_obj={
    grade_arr:[80,70,60],
    addGrade(grade){
        this.grade_arr.push(grade)
    },
    showAverage(){
        let average = this.grade_arr.reduce(function(acc,item,index,array){
            let sum = acc+item;
            if(index === array.length-1){
                return sum/array.length;
            }
            return sum;
        },0);
        console.log(average);
    }
};

// 2. 将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词。
let text_arr = ['bingo','that','is','the','spirit'];
console.log(text_arr.join("")); //正
console.log(text_arr.reverse().join("")); //反

