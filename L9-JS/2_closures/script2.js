function fungenerator(){
let a=1;
function innerfun()
{
    a++;
    function imf()
    {
        a++;
    console.log(a);
    }
    return imf;
}
return innerfun;
}

let fun=fungenerator();
let fun1=fun();
let fun2=fun();

fun1();
fun1();
fun2();
fun2();
fun1();
