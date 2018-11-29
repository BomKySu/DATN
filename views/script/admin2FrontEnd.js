

firebase.auth().onAuthStateChanged(function(userChanged)
{
    console.log("\nonAuthStateChanged");
    if (userChanged != null)
    {
        console.log('current user: ', userChanged.email);
        var pathUserType = '/UserInfo/' + userChanged.uid + '/type';
        firebase.database().ref(pathUserType).on('value', function(userType)       
        {
            console.log(userType.val());
            try
            {
                if (userType.val() == "Customer")
                {
                    JSAlert.alert("Đang mở trang khách hàng...").dismissIn(1000*5);
                    window.location = "/user"; 
                    // document.getElementById("myMain").hidden="";
                    // document.getElementById("myWait").hidden="hidden";
                    // getInfo();
                }
                else if (userType.val() == "AdminKV")
                {
                    // JSAlert.alert("Đang mở trang quản trị viên khu vực...").dismissIn(1000*5);
                    // window.location = "/user/admin_2"; 
                    // do not redirect, it's here now
                    document.getElementById("myMain").hidden="";
                    document.getElementById("myWait").hidden="hidden";
                    getElec();
                    getInfo();
                }
                else if (userType.val() == "AdminTong")
                {
                    JSAlert.alert("Đang mở trang quản trị viên tổng công ty...").dismissIn(1000*5);
                    window.location = "/user/admin_1"; 
                }
                else
                {
                    JSAlert.alert("Thông tin tài khoản không đầy đủ, liên hệ quản trị viên để biết thêm thông tin.");
                }
            }
            catch(error) { console.log(error.message)};
        });
    }
    else
    {
        JSAlert.alert("Đang mở trang đăng nhập...").dismissIn(1000*5);
        window.location = "/login";
    }

});
////
var Elec = {};
function getElec()
{
    const pathElec = "/";
    database_Elec.ref(pathElec).on('value', function(snapshot) 
    {   
        console.log("getElec on value called"); 
        Elec = snapshot.val();
        var Total = Elec.Total;
        if (Total)  // != null
        {
            $("#current").text(Total.pha1.current + " (A)");
            $("#power").text(Total.pha1.power + " (kW)");
            $("#energy").text(Total.pha1.energy + " (kWh)");

            $("#current_2").text(Total.pha2.current + " (A)");
            $("#power_2").text(Total.pha2.power + " (kW)");
            $("#energy_2").text(Total.pha2.energy + " (kWh)");

            $("#current_3").text(Total.pha3.current + " (A)");
            $("#power_3").text(Total.pha3.power + " (kW)");
            $("#energy_3").text(Total.pha3.energy + " (kWh)");
        }
        else
        {
            console.log("Total elec data read null");
        }
    });
}
////
var user = {};
function getInfo()
{
    getCompany();
    getCompanyId();
    // getDisplayName();
    // getCustomerId();
    // getAddress();
    // getEmail();
    // getPhoneNumber();
    // getNotification();
}
var customerId = document.getElementById('customerId');
var displayName = document.getElementById('displayName');
var titleKhuVuc = document.getElementById('titleKhuVuc');
var address = document.getElementById('address');
var phoneNumber = document.getElementById('phoneNumber');
var email = document.getElementById('email');
function getCompany()
{
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid + "/displayName").on('value', function(snapshot) 
    {   
        user.displayName = snapshot.val();
        titleKhuVuc.innerHTML = user.displayName;
        $("title").text(user.displayName);
    });
}
function getCompanyId()
{
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid + "/companyId").on('value', function(snapshot) 
    {   
        user.companyId = snapshot.val();
        getAllCustomer(); 
    });
}
function mySize(obj)
{
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}
var allCustomer = {};
var allCustomer_Filtered = {};
function getAllCustomer()
{
    firebase.database().ref("/UserInfo").on('value', function(snapshot) 
    {   
        // $("#audioAlert_Notification")[0].play(); // không ổn // 20181127
        console.log("/notification change");
        allCustomer = null;
        allCustomer = snapshot.val();
        allCustomer.size = mySize(allCustomer);
        var count = 0;
        for (var idid in allCustomer)
        {
            if (allCustomer[idid].companyId == user.companyId)
            {
                if (allCustomer[idid].type == "Customer")
                {
                    allCustomer_Filtered[count*1] = allCustomer[idid];
                    count++;
                }
            }
            // if 
        }        
        // $('#buttonNotification_0').text(allNotification["0"].title);
        for (i = 0; i < 99; i++)
        {  
            var i_ = i + 1;
            if(allCustomer_Filtered[i*1])       // tồn tại
            {
                allCustomer_Filtered[i*1].energy = Elec[allCustomer_Filtered[i*1].customerId].RealtimeValue.Energy;
                allCustomer_Filtered[i*1].money = Elec[allCustomer_Filtered[i*1].customerId].RealtimeValue.Energy*1549;

                $('#trForEachCustomer_' + i_)["0"].hidden="";
                $('#customerId_' + i_).text(allCustomer_Filtered[i*1].customerId);
                $('#customerName_' + i_).text(allCustomer_Filtered[i*1].displayName);
                $('#customerEnergy_' + i_).text(allCustomer_Filtered[i*1].energy);
                $('#customerMoney_' + i_).text(allCustomer_Filtered[i*1].money);
                $('#customerStatus_' + i_).text(allCustomer_Filtered[i*1].status);
            }
            else
            {
                $('#trForEachCustomer_' + i_)["0"].hidden="hidden";
            }
        }
    });
}



