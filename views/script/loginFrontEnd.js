// var email = $("#usernameLogin").val();       // k được 20181109
// var password = ($("#passwordLogin")).val();  // k được 20181109
// $("#submitLogin").click                      // k được 20181109
(
    document.getElementById("submitLogin").onclick = 
    function() 
    {
        var email = document.getElementById("usernameLogin").value;
        // console.log(email);
        var password = document.getElementById("passwordLogin").value;
        // console.log(password);
        if (firebase.auth().currentUser) 
        {
            // [START signout]
            firebase.auth().signOut();
            // [END signout]
        } 
        else 
        {
            if (email.length < 2) 
            {
                JSAlert.alert("Email hoặc tên người dùng không hợp lệ!", null, JSAlert.Icons.Failed);
                return; 
            }
            if (password.length < 8) 
            {
                JSAlert.alert("Mật khẩu không hợp lệ!", null, JSAlert.Icons.Failed);
                return;
            }
            if  (validateEmail(email) == false)
            {
                email = LoginUserName[email];
                if (email == null)
                {
                    JSAlert.alert("Tên người dùng này chưa được đăng ký!", null, JSAlert.Icons.Failed);
                    return;
                }
            }
            JSAlert.alert("Đang kiểm tra...").dismissIn(1000 * 1);;
            // Sign in with email and pass.
            // [START authwithemail]
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode)
            {
                if (errorCode == 'auth/user-not-found') errorMessage = 'Không tìm thấy người dùng này!';
                else if (errorCode == 'auth/invalid-email')  errorMessage = 'Email không hợp lệ!';
                else if (errorCode == 'auth/wrong-password')  errorMessage = 'Email/Tên đăng nhập hoặc mật khẩu không đúng!';   
                else if (errorMessage.includes("network error")) errorMessage = "Lỗi mạng! Hãy kiểm tra kết nối và thử lại...";
                JSAlert.alert(errorMessage, null, JSAlert.Icons.Failed);
            }
            console.log(error);
            // document.getElementById('quickstart-sign-in').disabled = false;
            // [END_EXCLUDE]
            });
            // [END authwithemail]
        }
        // document.getElementById('quickstart-sign-in').disabled = true;
    }
);
// on auth change

    firebase.auth().onAuthStateChanged(function(user)
    {
        console.log('\nAuthState changed');
        // httpGet("/");
        if ( (user !== null && user !== undefined) )
        {
            // window.location = "/user"; 
            // return;
            console.log('current user: ', user.email);
            var pathUserType = '/UserInfo/' + user.uid + '/type';
            firebase.database().ref(pathUserType).on('value', function(userType)       
            {
                console.log(userType.val());
                JSAlert.alert("Đang đăng nhập...");
                try
                {
                    if (userType.val() == "Customer")
                    {
                        window.location = "/user"; 
                    }
                    else if (userType.val() == "AdminKV")
                    {
                        window.location = "/user/admin_2"; 
                    }
                    else if (userType.val() == "AdminTong")
                    {
                        window.location = "/user/admin_1"; 
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
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    // load login user name
    var LoginUserName = {};
    firebase.database().ref('/LoginUserName').once('value').then(function(snapshot) 
    {   
        // console.log(snapshot.val());
        LoginUserName = snapshot.val();
    });
