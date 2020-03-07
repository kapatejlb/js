function f(){
    while(true)
    {
        var first = prompt("введите первое число");
        if(!parseInt(first))
        {
            alert("первый ввод - не число");
            break;
        }
        var second = prompt("введите второе чило");
        if(!parseInt(second))
        {
            alert("второй ввод - не число");
            break;
        }

        first < second ? alert("первое число меньше") :
            first > second ? alert("второе число меньше") : alert("числа равны");
    }
}
