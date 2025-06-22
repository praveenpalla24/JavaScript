const fruitlist =["apple","mango","banana","pineapple","Kiwi","papaya"]
console.log(fruitlist);
console.log(fruitlist[4]);
let bestfruit =fruitlist[2]
console.log(bestfruit);
 
function RRR(val) {
    console.log(val(),"today sunday"); 
}
function NTR(){
    console.log("today not bad");
    return 'called'   
}
RRR(NTR);

