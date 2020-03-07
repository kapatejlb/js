function isInteger(num) 
{
    return (num ^ 0) === num;
}

function f()
{
    var isWrongInput = true;

    while(isWrongInput)
    {
        var flors = prompt("введите количество этажей");
        var numOfPorches = prompt("введите количество подъездов");
        var numOfFlatsOnFloor = prompt("введите количество квартир на этаже");
        var numOfFlat = prompt("введите номер квартиры");

        if(!parseInt(flors) || !parseInt(numOfPorches) || !parseInt(numOfFlatsOnFloor) || !parseInt(numOfFlat))
        {
            alert("введите еще раз");
        }
        else
            isWrongInput= false;
    }      

    var flatsPerPorches = flors * numOfFlatsOnFloor / numOfPorches;

    if(!isInteger(flatsPerPorches))
    {
        alert("неврные данные, число квартир не делится подъездами нацело!");
    }
    else
    {
        var currentPorch = 1;
        for(; flatsPerPorches < numOfFlat;i++)
        {
            flatsPerPorches*=2;
            currentPorch +=1;
        }
        alert(currentPorch);
    }
    //номер подъезда
}
