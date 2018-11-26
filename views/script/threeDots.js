// <!-- script dấu 3 chấm -->
var threeDots = document.getElementById("threeDots");
var countLoop = 0;
myLoopThreeDots();    // có cái này mới chạy loop
function myLoopThreeDots()  
{
    setTimeout(function()
    {
        // console.log(countLoop);
        countLoop ++;
        if (countLoop%4 == 0)
        {
            threeDots.innerHTML = "";
        }
        else if (countLoop%4 == 1)
        {
            threeDots.innerHTML = ".";
        }
        else if (countLoop%4 == 2)
        {
            threeDots.innerHTML = "..";
        }
        else
        {
            threeDots.innerHTML = "...";
        }
        if (document.getElementById("myWait").hidden != true)
        {
            myLoopThreeDots();
        }
    }, 300)
}
