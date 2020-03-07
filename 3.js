function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}

function f()
{
    i = prompt("ведите i:");
    if(parseInt(i) && !((i ^ 0) === i))
        alert(fib(i));
    else 
    alert("неправильный ввод")
    
}