myLoopAdmin2();    // có cái này mới chạy loop
function myLoopAdmin2()  
{
    setTimeout(function () 
    {
        // if (user.email == null)
        if (firebase.auth().currentUser == null)
        {
            // khởi tạo firebase chưa ổn định
            console.log("haven't got currentUser");
            myLoopAdmin2(); 
        }
        else 
        {
            document.getElementById("myMain").hidden="";
            document.getElementById("myWait").hidden="hidden";
            console.log("myLoopAdmin2 done.");
        }
    }, 1000)
};  
