const grades =[20,30,40,5,60,4,12,90];
const maximum =grades.reduce(getmax);
const mininum =grades.reduce(getmin);

function getmax(accumulator,element) {
    return Math.max(accumulator,element)
}
function getmin(accumulator,element){
    return Math.min(accumulator,element)
}
console.log(maximum);
console.log(mininum);
