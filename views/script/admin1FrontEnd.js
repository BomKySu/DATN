
firebase.auth().onAuthStateChanged(function(user)
{
    console.log("\nonAuthStateChanged");
    if (user != null)
    {
        console.log('current user: ', user.email);
        var pathUserType = '/UserInfo/' + user.uid + '/type';
        firebase.database().ref(pathUserType).on('value', function(userType)       
        {
            console.log(userType.val());
            try
            {
                if (userType.val() == "Customer")
                {
                    JSAlert.alert("Đang mở trang khách hàng...").dismissIn(1000*5);
                    window.location = "/user"; 
                }
                else if (userType.val() == "AdminKV")
                {
                    JSAlert.alert("Đang mở trang quản trị viên khu vực...").dismissIn(1000*5);
                    window.location = "/user/admin_2"; 
                }
                else if (userType.val() == "AdminTong")
                {
                    // do not redirect, it's here now
                    // window.location = "/user/admin_1"; 
                    document.getElementById("myMain").hidden="";
                    document.getElementById("myWait").hidden="hidden";
                }
                else
                {
                    JSAlert.alert("Thông tin tài khoản không đầy đủ, liên hệ quản trị viên để biết thêm thông tin.");
                }
            }
            catch(error) { console.log(error.message)};
        });
    };
});
