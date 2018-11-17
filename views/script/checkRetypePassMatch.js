var newPass = document.getElementById("newPass");
var newPassRetype = document.getElementById("newPassRetype");
newPass.oninput =
newPassRetype.oninput = 
function()
{
    if (newPass.value == newPassRetype.value || (newPassRetype.value == "") ) // trùng hoặc // chưa nhập lại
    { 
        console.log("Match"); 
        document.getElementById("notMatch").hidden = "hidden";  // ẩn chữ đỏ 
    } 
    else 
    {
        console.log("Not Match");
        document.getElementById("notMatch").hidden = ""; // hiện chữ đỏ
    }
};