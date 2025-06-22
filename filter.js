const pepole =[
    {name:"Ragu",age:27, position:"manager"},
    {name:"Rama",age:25, position:"HR"},
    {name:"Ravi",age:32, position:"worker"},
    {name:"Ron",age:22, position:"worker"},
];
const youngpeople =pepole.filter(function(person){
    return person.age<= 30;
    
});
console.log(youngpeople);
const newArray =pepole.filter(function(person){
    return person.position === "manager"
});
console.log(newArray);
