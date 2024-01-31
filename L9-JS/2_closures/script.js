function fungenerator()
{
    let a=1;
    function fun()
    {
        a++;
        console.log(a);
    }
    return fun;
}

let func=fungenerator();
console.log(func());
func();