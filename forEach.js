const pepole =[
    {name:"Ragu",age:27, position:"manager"},
    {name:"Rama",age:25, position:"HR"},
    {name:"Ravi",age:30, position:"worker"}
];
function showname(person){
    console.log(person.name); 
}
pepole.forEach(showname);
