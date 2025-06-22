                ==== arrow fuction ====  
const test =(Number) => Number+50;
let sum = test(10);
console.log(sum);


                     CLASSES
class test {
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }
    addition(){
    console.log(this.num1 + this.num2);

    }
}
new test(10,20).addition(); 
              destucturing
const num1=[10,20,40,60];
const[frist,second,third,four] = num1;
console.log(frist);
console.log(second);



