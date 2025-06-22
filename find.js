const pepole =[
    {name:"Ragu",age:27, position:"manager",id:1},
    {name:"Rama",age:25, position:"HR",id:2},
    {name:"Ravi",age:30, position:"worker",id:3}
];
const newnames=["rr"]



const val=pepole.find(function(person){
    return person.id===2;
});
console.log(val);