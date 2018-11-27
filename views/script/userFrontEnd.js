

// config cho Firebase đã chuyển qua init.js // 20181109

// var userServer = JSON.parse(document.getElementById('userServer').innerHTML);
// 20181109
var userServer = firebase.auth().currentUser; 
console.log("userServer", userServer);
console.log("firebase.auth().currentUser", firebase.auth().currentUser);

var customerId = document.getElementById('customerId');
var displayName = document.getElementById('displayName');
var address = document.getElementById('address');
var phoneNumber = document.getElementById('phoneNumber');
var email = document.getElementById('email');

var loginUserName = document.getElementById("loginUserName");

var voltage = document.getElementById('voltage');
var current = document.getElementById('current');
var power = document.getElementById('power');
var energy = document.getElementById('energy');

var customerId_payment = document.getElementById('customerId_payment');
var phoneNumber_payment = document.getElementById('phoneNumber_payment');

var user = {customerId:""};
function getInfo()
{
    getDisplayName();
    getCustomerId();
    getAddress();
    getEmail();
    getPhoneNumber();
    getNotification();
}
function getCustomerId()
{
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid + "/customerId").on('value', function(snapshot) 
    {   
        user.customerId = snapshot.val();
        customerId_payment.value = 
        customerId.innerHTML = user.customerId;
        getElec();
        getEnergyChartData();
        getLimit();
    });
}
function getAddress()
{
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid + "/address").on('value', function(snapshot) 
    {   
        user.address = snapshot.val();
        address.innerHTML = user.address;
    });
}
function getDisplayName()
{
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid + "/displayName").on('value', function(snapshot) 
    {   
        user.displayName = snapshot.val();
        displayName.innerHTML = user.displayName;
    });
}
function getEmail()
{
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid + "/email").on('value', function(snapshot) 
    {   
        user.email = snapshot.val();
        var email__ = document.getElementById("email__"); // email for change pass
        email__.value = 
        email.innerHTML = user.email;
        getLoginUserName();
    }); 
}
function getPhoneNumber()
{
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid + "/phoneNumber").on('value', function(snapshot) 
    {   
        user.phoneNumber = snapshot.val();
        phoneNumber_payment.value = 
        phoneNumber.innerHTML = user.phoneNumber;
        getElec();
        getEnergyChartData();
    });
}
displayInfo = function(user)
{
    customerId_payment.value = 
    customerId.innerHTML = user.customerId;
    displayName.innerHTML = user.displayName;
    address.innerHTML = user.address;
    phoneNumber_payment.value = 
    phoneNumber.innerHTML = user.phoneNumber;
    email.innerHTML = user.email;
    var email__ = document.getElementById("email__");
    email__.value = user.email;
}

var allLoginUserName = {};
function getLoginUserName()     
{
    // firebase.database().ref('/LoginUserName').once('value').then(function(snapshot) 
    firebase.database().ref('/LoginUserName').on('value', function(snapshot) 
    {   
        // console.log(snapshot.val());
        allLoginUserName = snapshot.val();
        for (var name in allLoginUserName)
        {
            if (allLoginUserName[name] == user.email)
            {
                loginUserName.innerHTML = name;
                loginUserNameInput.value = name;
            }
        }
    });
}


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
                    // do not redirect, it's here now
                    // window.location = "/user"; 
                    document.getElementById("myMain").hidden="";
                    document.getElementById("myWait").hidden="hidden";
                    getInfo();
                }
                else if (userType.val() == "AdminKV")
                {
                    JSAlert.alert("Đang mở trang quản trị viên khu vực...").dismissIn(1000*5);
                    window.location = "/user/admin_2"; 
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

function getElec()
{
    const pathRealtimeValue = "/" + user.customerId + "/RealtimeValue";
    database_Elec.ref(pathRealtimeValue).on('value', function(snapshot) 
    {   
        console.log("RealtimeValue on value called"); 
        var nowMils = Date.now();
        var sec = moment(nowMils).format('ss');
        console.log(pathRealtimeValue);
        if (snapshot.val() != null)
            displayElec(snapshot.val());
        else
        displayElec({"Current":"0", "Energy":"0","Power":"0","Voltage":"0"});
    });
}

displayElec = function(elecData)
{
    if (elecData == null) return;
    voltage.innerHTML = elecData.Voltage + " (V)";
    current.innerHTML = elecData.Current + " (A)";
    power.innerHTML = elecData.Power + " (W)";
    energy.innerHTML = elecData.Energy + " (kWh)";

    voltage.style.color = 
    current.style.color = 
    power.style.color = 
    energy.style.color = "#FFD700";

    setTimeout(function () 
    {
        voltage.style.color = 
        current.style.color = 
        power.style.color = 
        energy.style.color = "#000000";    
    }, 200);    
}

var energyChartData = {}; 
// getEnergyChartData(); 
function getEnergyChartData()  
{
    var path = "/" + user.customerId + "/energyChartData";
    // 20181109
    // var path = "/" + firebase.auth().currentUser.uid + "/energyChartData";
    // database_Elec.ref(path).once('value').then(function(snapshot) 
    database_Elec.ref(path).on('value', function(snapshot) 
    {   
        energyChartData = snapshot.val();
        // console.log(energyChartData[myYear.toString()][myMonth.toString()]["03"]);
        if (chart == null || chart == undefined) 
        {
            chartLoad();
        }
        else
        {
            updateChartData();
            chart.render();
            console.log("chart.render() running");
        }
    });
}
//{"2018":{"11":{"03":23, "04":22, "05":24}}}
// {"01":12,"02":20,"03":20,"04":24,"05":28,"06":20,"07":20,"08":20,"09":20,"10":20,"11":20,"12":20,"13":20,"14":20,"15":20,"16":20,"17":20,"18":20,"19":20,"20":20,"21":20,"22":20,"23":20,"24":20,"25":20,"26":20,"27":20}
// {"01":0,"02":0,"03":0,"04":0,"05":0,"06":0,"07":0,"08":0,"09":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0}

// getRealtimeData = functions.database.ref("/" + user.customerId + "/RealtimeValue")
// .onUpdate((change) => {
//     const before = change.before  // DataSnapshot before the change
//     const after = change.after  // DataSnapshot after the change
//     console.log(before, after);
// })

var submitLoginUserName = document.getElementById("submitLoginUserName");
var loginUserNameInput = document.getElementById("loginUserNameInput");
submitLoginUserName.onclick = function()
{
    console.log("submitLoginUserName clicked");
    console.log(loginUserNameInput.value);
    if (checkNewLoginUserName(loginUserNameInput.value) == false) 
    {
        JSAlert.alert("Tên này đã tồn tại, vui lòng chọn tên khác!");
        return;
    }
    deleteOldLoginUserName();
    updateNewLoginUserName(loginUserNameInput.value);
    JSAlert.alert("Cập nhật tên đăng nhập thành công: " + loginUserNameInput.value);
    loginUserName.innerHTML = loginUserNameInput.value;
    console.log("Update Success");
}
function checkNewLoginUserName(inputName)
{
    for (var name in allLoginUserName)
    {
        if (inputName == name)
        {
            return false;
        }
    }
}
function deleteOldLoginUserName()
{
    firebase.database().ref("/LoginUserName/" + loginUserName.innerHTML).set(null, function(error) {
        if (error) {
          // The write failed...
        } else {
          // Data saved successfully!
        }
    });
}


function updateNewLoginUserName(inputName)
{
    firebase.database().ref("/LoginUserName/" + inputName).set(user.email, function(error) {
            if (error) {
                // The write failed...
                // console.log("Update False");
                // return false;
            } else {
                // Data saved successfully!
                // console.log("Update Success");
                // return true;
            }
    });
    $("#loginUserNameForm").modal("hide");
}   
function mySize(obj)
{
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}
var allNotification = {};
function getNotification()
{
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid + "/notification").on('value', function(snapshot) 
    {   
        // $("#audioAlert_Notification")[0].play(); // không ổn // 20181127
        console.log("/notification change");
        user.notification = null;
        user.notification = snapshot.val();
        user.notification.size = mySize(user.notification)
        var count = user.notification.size - 1;
        for (var time in user.notification)
        {
            allNotification[count] = user.notification[time];
            allNotification[count].time = time;
            count--;
            // if 
        }        
        // $('#buttonNotification_0').text(allNotification["0"].title);
        for (i = 0; i < 100; i++)
        {  
            if(allNotification[i*1])
            {
                $('#divForEachNotification_' + i)["0"].hidden="";
                $('#buttonNotification_' + i).text(allNotification[i*1].title);
                $('#buttonNotification_' + i).data("title", allNotification[i*1].title);
                $('#buttonNotification_' + i).data("content", allNotification[i*1].content);
                $('#buttonNotification_' + i).data("sender", allNotification[i*1].sender);
                $('#buttonNotification_' + i).data("time", allNotification[i*1].time);
                $('#buttonNotification_' + i).text(allNotification[i*1].title);
                if (allNotification[i*1].read == 1)
                {
                    $('#buttonNotification_' + i).css({'color' : 'grey', 'font-size': '90%'});
                }
                else
                {
                    $('#buttonNotification_' + i).css({'color' : 'black', 'font-size': '100%'});
                }
            }
            else
            {
                $('#divForEachNotification_' + i)["0"].hidden="hidden";
            }
        }
    });
}
$('#Modal_xemthongbao').on('show.bs.modal', function (event) 
{
    console.log("Modal_xemthongbao event...");
    var button = $(event.relatedTarget) // Button that triggered the modal
    var time = button.data("time");
    var timeFormated = moment(time*1).format("HH:mm:ss, DD-MM-YYYY");
    var modal = $(this)
    modal.find('.card-header').text(button.data("title"));
    modal.find('.card-text').text(button.data("content"));
    modal.find('.card-footer').text("Được gửi bởi: " 
                        + button.data("sender")
                        + ". Vào lúc: " 
                        + timeFormated);
    markRead(time);
})
function markRead(time)
{
    var path = '/UserInfo/' + firebase.auth().currentUser.uid + "/notification/" + time + "/read"
    firebase.database().ref(path).set(1, function(error) {});
}
function markUnRead(time)
{
    var path = '/UserInfo/' + firebase.auth().currentUser.uid + "/notification/" + time + "/read"
    firebase.database().ref(path).set(0, function(error) {});
}
    
//// limit
var energyLimit;
function getLimit()
{
    var path = "/" + user.customerId + "/limitValue/Energy";
    database_Elec.ref(path).on('value', function(snapshot) 
    {   
        energyLimit = snapshot.val();
        $("#iLimitValue").val(energyLimit);  
        $("#textLimitValue")[0].innerHTML = energyLimit + " (kWh)";
        getEnergy();
    });
}

$("#Modal_limit").find(".btn-primary").click(function()
{
    var limitValue = $("#iLimitValue").val();
    var path = "/" + user.customerId + "/limitValue/Energy";
    database_Elec.ref(path).set(limitValue*1, function(error) {});
    JSAlert.alert("Đang lưu...").dismissIn(1000*.5);
    $("#Modal_limit").modal("hide");
});

var energyRealTime;
function getEnergy()
{
    const pathRealtimeValue = "/" + user.customerId + "/RealtimeValue/Energy";
    database_Elec.ref(pathRealtimeValue).on('value', function(snapshot) 
    {   
        energyRealTime = snapshot.val();
        energy.innerHTML = energyRealTime + " (kWh)";
        $("#thangNay_DienNang").text(energyRealTime);
        $("#thangNay_Tien").text(energyRealTime*1549);
        checkLimit();
    });
}

function checkLimit()
{
    if (energyRealTime/energyLimit >= 1)
    {
        var beep500 = setInterval(function(){ $("#audioAlert")[0].play() }, 500);
        JSAlert.alert("Điện năng tiêu thụ đã đạt tới định mức đặt trước!", null, JSAlert.Icons.Failed)
        .then(function() {
            clearInterval(beep500);     
        });;
    }
    else if (energyRealTime/energyLimit >= 0.8)
    {
        var beep1000 = setInterval(function(){ $("#audioAlert")[0].play() }, 1000);
        JSAlert.alert("Điện năng tiêu thụ đã đạt 80% so với định mức đặt trước!", null, JSAlert.Icons.Failed)
        .then(function() {
            clearInterval(beep1000);     
        });;
    }
    else 
    {   
    }   
}

