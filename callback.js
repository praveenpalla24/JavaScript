function myfunc(val) {
    console.log("callback functions-1"); 
    val()  ;
}
function callback() {
    console.log("i am callback function-2");
    return 'called'  
}
myfunc(callback);