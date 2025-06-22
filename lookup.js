let gobalvar ="this is global";
function outerfunction(){
    var outervar ="i'm from outer";
    function innerfunction(){
        console.log(outervar);
        console.log(gobalvar);     
    }
    innerfunction();
}
outerfunction();
console.log(gobalvar);
