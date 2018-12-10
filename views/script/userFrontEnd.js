

// config cho Firebase đã chuyển qua init.js // 20181109

// var userServer = JSON.parse(document.getElementById('userServer').innerHTML);
// 20181109
var userServer = firebase.auth().currentUser; 
// console.log("userServer", userServer);
// console.log("firebase.auth().currentUser", firebase.auth().currentUser);

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
var email_payment = document.getElementById('email_payment');
var user = {customerId:""};
function getInfo()
{
    getCompanyId(); // 20181205
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
        email_payment.value = 
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
    // console.log("\nonAuthStateChanged");
    if (userChanged != null)
    {
        // console.log('current user: ', userChanged.email);
        var pathUserType = '/UserInfo/' + userChanged.uid + '/type';
        firebase.database().ref(pathUserType).on('value', function(userType)       
        {       
            // console.log(userType.val());
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

function getCompanyId()
{
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid + "/companyId").on('value', function(snapshot) 
    {   
        user.companyId = snapshot.val();
        getDatabaseElec();
    });
}
var database_Elec; 
function getDatabaseElec()
{
    if (user.companyId == "GoVap")
    {
        database_Elec = database_Elec_GV;
        // getElec_GV();
    }
    else if  (user.companyId == "ThuDuc")
    {
        database_Elec = database_Elec_TD;
        // getElec_TD();
    }
    getElec();
    // getAllCustomer(); 
}

function getElec()
{
    const pathRealtimeValue = "/" + user.customerId + "/RealtimeValue";
    database_Elec.ref(pathRealtimeValue).on('value', function(snapshot) 
    {   
        // console.log("RealtimeValue on value called"); 
        // var nowMils = Date.now();
        // var sec = moment(nowMils).format('ss');
        // console.log(pathRealtimeValue);
        if (snapshot.val() != null)
            displayElec(snapshot.val());
        else
        displayElec({"Current":"0", "Energy":"0","Power":"0","Voltage":"0"});
    });
}

displayElec = function(elecData)
{
    for (para in elecData)
    {
        if (elecData[para]*1 <= 0) elecData[para] = 0;  // bỏ số âm // 20181203
        // console.log(elecData[para]);
    }
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
            // console.log("chart.render() running");
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
function getNotification_old()
{
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid + "/notification").on('value', function(snapshot) 
    {   
        // $("#audioAlert_Notification")[0].play(); // không ổn // 20181127
        // console.log("/notification change");
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

function checkReadUnread(pathRead)
{
    firebase.database().ref(pathRead).on('value', function(snapshot, prev) 
    {
        // console.log(snapshot);
        if (snapshot.val()*1 == 1)
        {
            $("#" + snapshot.ref.parent.key ).css({'color' : 'grey', 'font-size': '100%'});
        }
        else
        {
            $("#" + snapshot.ref.parent.key ).css({'color' : 'black', 'font-size': '100%'});
        }
    });
}
function getNotification()
{
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid + "/notification").on('child_added', function(snapshot, prev) 
    {
        // console.log("/notification change");
        currentNotification = snapshot.val();
        // console.log(currentNotification);
        time = snapshot.key;
        if (currentNotification) 
        {
            divForEachNotification = document.createElement('div');
            $(divForEachNotification)
                // .slideToggle(500)
                // .show()
                .hide()
                // .slideToggle(500)
                .attr("id", time)
                .attr("class","header-hover")
                .attr("href", "#")
                .attr('data-target', '#Modal_xemthongbao')
                .attr('data-toggle', 'modal' )
                .html("<label><span class='fas fa-angle-double-right'></span><b class='titleNotification'></b><br></label>")
            // thêm các thông số khác
                .data("title", currentNotification.title)
                .data("content", currentNotification.content)
                .data("sender", currentNotification.sender)
                .data("time", time)
                .prependTo($("#thongBaoDaNhan"))    // hiển thị nó lên
                .slideToggle("slow");
            titleNotification = $(divForEachNotification).find('.titleNotification') // con của cái div
            $(titleNotification).text(currentNotification.title)

            var pathRead = "/UserInfo/" + firebase.auth().currentUser.uid + "/notification/" + time + "/read";
            checkReadUnread(pathRead);  
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
        displayTable();
    });
}

$("#Modal_limit").find(".btn-primary").click(function()
{
    var limitValue = $("#iLimitValue").val();
    if (limitValue <= 0)
    {
        JSAlert.alert("Vui lòng nhập số lớn hơn 0");
        return;
    }
    var path = "/" + user.customerId + "/limitValue/Energy";
    database_Elec.ref(path).set(limitValue*1, function(error) {});
    JSAlert.alert("Đang lưu...").dismissIn(1000*.5);
    $("#Modal_limit").modal("hide");
});

var energyRealTime;
function getEnergy()
{
    var pathRealtimeValue = "/" + user.customerId + "/RealtimeValue/Energy";
    database_Elec.ref(pathRealtimeValue).on('value', function(snapshot) 
    {   
        energyRealTime = snapshot.val();
        if (energyRealTime*1 <= 0)  energyRealTime = 0;
        energy.innerHTML = energyRealTime + " (kWh)";
        $("#thangNay_DienNang").text(energyRealTime);
        $("#thangNay_Tien").text(Math.round(LuyKe(energyRealTime)));
        checkLimit();
    });
}
 
function checkLimit()
{
    // console.log("energyRealTime = " + energyRealTime);
    // console.log("energyLimit = " + energyLimit);
    // console.log("energyRealTime/energyLimit = " + energyRealTime/energyLimit);
    
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

// xử lý thanh toán
var Payment;
function displayTable()
{
    var pathPayment = "/" + user.customerId + "/Payment";
    database_Elec.ref(pathPayment).on('value', function(snapshot) 
    {   
        var count = 0;
        Payment = snapshot.val();
        for(year in Payment)
        {
            for(month in Payment[year])
            {
                // console.log(Payment[year][month]);
                count ++;
                if (count >= 4) return;
                $("#rowMonth" + month + year).remove();
                trForEachMonth = document.createElement('tr');
                $(trForEachMonth)
                    .slideToggle(500)
                    .show()
                    // .hide()
                    .slideToggle(500)
                    .html("<td id='month'></td> <td id='energy'></td> <td id='money'></td> <td id='paid'></td>")
                    .attr("id", "rowMonth" + month + year)
                $(trForEachMonth).find('#month').text("Tháng " + month);
                $(trForEachMonth).find('#energy').text(Payment[year][month].TotalEnergy);
                $(trForEachMonth).find('#money').text(Payment[year][month].Debt);
                $(trForEachMonth).find('#paid').text(Payment[year][month].Paid);
                if (Payment[year][month].Paid == 1)
                {
                    $(trForEachMonth).find('#paid').text("Đã thanh toán")
                }
                else
                {
                    // $(trForEachMonth).find('#paid')[0].innerHTML = ("<b>Chưa thanh toán</b>")
                    $(trForEachMonth).find('#paid')
                        .text("Chưa thanh toán")
                        .css({"font-weight": "bold", "color":"orangered"});
                }
                // $(trForEachMonth).prependTo($("#bangTT3Thang"))    // hiển thị nó lên
                ($("#trThangNay")).after($(trForEachMonth))    // hiển thị nó lên
            }
        }
    })
}

function getDebt()
{
    var pathPayment = "/" + user.customerId + "/Payment";
    database_Elec.ref(pathPayment).on('value', function(snapshot) 
    {   
        user.debt = 0;
        Payment = snapshot.val();
        for(year in Payment)
        {
            for(month in Payment[year])
            {
                if (Payment[year][month].Paid*1 != 1)   // chưa thanh toán
                {
                    user.debt += Payment[year][month].Debt; 
                }
                $("#payment_Money").text(user.debt + " (VNĐ)");
                if (user.debt <= 0)
                {
                    $('#xacNhanThanhToan').attr("disabled", "disabled");
                }
                else
                {
                    $('#xacNhanThanhToan').removeAttr("disabled");
                }
            }
        }
        return user.debt;
    });
}
function removeDebt()
{
    var pathPaid = "/" + user.customerId + "/Payment/";
    for(year in Payment)
    {
        for(month in Payment[year])
        {
            pathPaid = "/" + user.customerId + "/Payment/" + year + "/" + month + "/Paid";
            database_Elec.ref(pathPaid).set(1, function(error) {});
        }
    }
}
/*
{
"Debt":173195,
"Paid":0,
"TotalEnergy":100
}
*/

$('#payment_SumitButton').on('click', function()
{
    $('#payment_Name')[0].innerHTML = $('#displayName')[0].innerHTML;
    $('#payment_Address')[0].innerHTML = $('#address')[0].innerHTML;
    $('#payment_CustomerId')[0].innerHTML = $('#customerId_payment')[0].value;
    $('#payment_PhoneNumber')[0].innerHTML = $('#phoneNumber_payment')[0].value;
    $('#payment_Email')[0].innerHTML = $('#email_payment')[0].value;
    $('#payment_Bank').attr("src", $('.mx-auto.d-block.selected')[0].currentSrc);
    getDebt();
})
$('#xacNhanThanhToan').on('click', function()
{
    var money = $("#payment_Money").text();
    removeDebt();
    JSAlert.alert("Đang xử lý...").dismissIn(1000*.5);
    JSAlert.alert("Đã thanh toán thành công số tiền " + money + "!");
})

function LuyKe(energy)
{
    var price1 =1549;
    var price2 =1600;
    var price3 =1858;
    var price4 =2340;
    var price5 =2615;
    var price6 =2701;

    var money = 0;
    if (energy <= 50)
    {
        money = energy*price1;
    }
    else if (energy <= 100)
    {
        money = 50*price1;
        money = money + (energy-50)*price2;
    }
    else if (energy <= 200)
    {
        money = 50*price1;
        money += 50*price2;
        money += (energy-100)*price3;
    }
    else if (energy <= 300)
    {
        money = 50*price1;
        money += 50*price2;
        money += 100*price3;
        money += (energy-200)*price4;
    }
    else if (energy <= 400)
    {
        money = 50*price1;
        money += 50*price2;
        money += 100*price3;
        money += 100*price4;
        money += (energy-300)*price5;
    }
    else if (energy > 400)
    {
        money = 50*price1;
        money += 50*price2;
        money += 100*price3;
        money += 100*price4;
        money += 100*price5;
        money += (energy-400)*price6;
    }
    money += money/10;
    money = Math.round(money);
    return money;
}