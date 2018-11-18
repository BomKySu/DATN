var submitChangePass = document.getElementById("submitChangePass");
submitChangePass.disabled = true;
var notifyOldPassWrong = document.getElementById("notifyOldPassWrong");
var notify8Char = document.getElementById("notify8Char");
var notifySuccess = document.getElementById("notifySuccess");
var email__ = document.getElementById("email__");
var oldPass = document.getElementById("oldPass");
var newPass = document.getElementById("newPass");
var newPassRetype = document.getElementById("newPassRetype");
// SỰ KIỆN NHẬP MK CŨ   
oldPass.oninput = 
function()
{
    notifyOldPassWrong.hidden = "hidden";   // ẩn TB mk không đúng
    notifySuccess.hidden = "hidden";   // ẩn TB thành công
}
// SỰ KIỆN NHẬP MK MỚI
newPass.oninput = 
newPassRetype.oninput = 
function() 
{ 
    notifyOldPassWrong.hidden = "hidden";   // ẩn TB mk không đúng
    notifySuccess.hidden = "hidden";   // ẩn TB thành công
    if (newPass.value.length < 8)   // chưa nhập đủ 8 ký tự
    {
        notify8Char.hidden = "";
        submitChangePass.disabled = true;
    }
    else
    {
        notify8Char.hidden = "hidden"; 
        if (newPassRetype.value == "") // chưa nhập lại 
        { 
            // console.log("Match"); 
            document.getElementById("notMatch").hidden = "hidden";  // ẩn TB không khớp
        } 
        else if (newPass.value != newPassRetype.value) // nhập lại rồi nhưng không khớp
        {
            // console.log("Not Match"); 
            document.getElementById("notMatch").hidden = ""; // hiện TB không khớp 
        }
        else
        {
            document.getElementById("notMatch").hidden = "hidden";  // ẩn TB không khớp
            submitChangePass.disabled = false; 
        }
    }
};
// SỰ KIỆN NHẤN NÚT
submitChangePass.onclick = 
function()
{
    // firebase.auth().currentUser.reauthenticateWithCredential(
    firebase.auth().currentUser.reauthenticateAndRetrieveDataWithCredential(
        firebase.auth.EmailAuthProvider.credential(
            firebase.auth().currentUser.email, 
            oldPass.value
        )
    )
    .then(function() {
        // User re-authenticated.
        firebase.auth().currentUser.updatePassword(newPass.value)
        .then(function()
        {
            notifyOldPassWrong.hidden = "hidden";   // ẩn TB mk không đúng
            notify8Char.hidden = "hidden";    // ẩn TB 8 ký tự
            notifySuccess.hidden = ""; // hiện TB thành công
            submitChangePass.disabled = true;
        })
        .catch(function(error)
        {
            console.log("Lỗi khi cập nhật mật khẩu mới.");
        }); 
    })
    .catch(function(error) {
        // An error happened.
        notifyOldPassWrong.hidden = "";
    })
};
