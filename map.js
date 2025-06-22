const pepole =[
    {name:"Ragu",age:27, position:"manager"},
    {name:"Rama",age:25, position:"HR"},
    {name:"Ravi",age:30, position:"worker"}
];
const ages =pepole.map(function(person){
    console.log(person);
    return person.name;
});
console.log(ages);


