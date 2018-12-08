

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
                    // getDatabaseElec(); // Cannot read property 'ref' of undefined
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
        getDatabaseElec();
    });
}
var database_Elec; 
function getDatabaseElec()
{
    if (user.companyId == "GoVap")
    {
        database_Elec = database_Elec_GV;
        getElec_GV();
    }
    else if  (user.companyId == "ThuDuc")
    {
        database_Elec = database_Elec_TD;
        getElec_TD();
    }
    // getElec();
    getAllCustomer(); 
}
////
var Elec = {};
function getElec()
{
    const pathElec = "/";
    database_Elec.ref(pathElec).once('value').then( function(snapshot) 
    {   
        // console.log("getElec on value called"); 
        Elec = snapshot.val();
    });   

    // const pathRealtimeValue = "/Total/RealtimeValue";
    const pathRealtimeValue = "/Total";
    database_Elec.ref(pathRealtimeValue).on('value', function(snapshot) 
    // database_Elec.ref(pathElec).once('value').then( function(snapshot) 
    {   
        // console.log("getElec on value called"); 
        RealtimeValue = snapshot.val();
        if (RealtimeValue)  // != null
        {
            $("#current").text(RealtimeValue.pha1.current + " (A)");
            $("#power").text(RealtimeValue.pha1.power + " (kW)");
            $("#energy").text(RealtimeValue.pha1.energy + " (kWh)");

            $("#current_2").text(RealtimeValue.pha2.current + " (A)");
            $("#power_2").text(RealtimeValue.pha2.power + " (kW)");
            $("#energy_2").text(RealtimeValue.pha2.energy + " (kWh)");

            $("#current_3").text(RealtimeValue.pha3.current + " (A)");
            $("#power_3").text(RealtimeValue.pha3.power + " (kW)");
            $("#energy_3").text(RealtimeValue.pha3.energy + " (kWh)");
            getEnergyChartData();
        }
        else
        {
            console.log("Total elec data read null");
        }
    });
}
function getElec_GV()
{
    const pathElec = "/";
    database_Elec.ref(pathElec).on('value', function(snapshot) 
    {   
        // console.log("getElec on value called"); 
        Elec = snapshot.val();
        if (Elec)  // != null
        {
            $("#current").text(Elec.PE00000000003.RealtimeValue.Current + " (A)");
            $("#power").text(Elec.PE00000000003.RealtimeValue.Power + " (kW)");
            $("#energy").text(Elec.PE00000000003.RealtimeValue.Energy + " (kWh)");

            $("#current_2").text(0 + " (A)");
            $("#power_2").text(0 + " (kW)");
            $("#energy_2").text(0 + " (kWh)");

            $("#current_3").text(0 + " (A)");
            $("#power_3").text(0 + " (kW)");
            $("#energy_3").text(0 + " (kWh)");
            getEnergyChartData();
        }
        else
        {
            console.log("Total elec data read null");
        }
    });
}
function getElec_TD()
{
    const pathElec = "/";
    database_Elec.ref(pathElec).on('value', function(snapshot) 
    {   
        // console.log("getElec on value called"); 
        Elec = snapshot.val();
        if (Elec)  // != null
        {
            $("#current").text(Elec.PE00000000000.RealtimeValue.Current + " (A)");
            $("#power").text(Elec.PE00000000000.RealtimeValue.Power + " (kW)");
            $("#energy").text(Elec.PE00000000000.RealtimeValue.Energy + " (kWh)");

            $("#current_2").text(Elec.PE00000000001.RealtimeValue.Current + " (A)");
            $("#power_2").text(Elec.PE00000000001.RealtimeValue.Power + " (kW)");
            $("#energy_2").text(Elec.PE00000000001.RealtimeValue.Energy + " (kWh)");

            $("#current_3").text(Elec.PE00000000002.RealtimeValue.Current + " (A)");
            $("#power_3").text(Elec.PE00000000002.RealtimeValue.Power + " (kW)");
            $("#energy_3").text(Elec.PE00000000002.RealtimeValue.Energy + " (kWh)");
            getEnergyChartData();
        }
        else
        {
            console.log("Total elec data read null");
        }
    });
}
////
var energyChartData = {}; 
// getEnergyChartData(); 
function getEnergyChartData()  
{
    var path = "/" + "Total" + "/energyChartData";
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
////
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
        console.log("/UserInfo change");
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
        for (i = 0; i < 9; i++)
        {  
            var i_ = i + 1;
            // console.log("allCustomer_Filtered.displayName" + allCustomer_Filtered.displayName);
            if(allCustomer_Filtered[i*1])       // tồn tại
            {
                allCustomer_Filtered[i*1].energy = Elec[allCustomer_Filtered[i*1].customerId].RealtimeValue.Energy;
                allCustomer_Filtered[i*1].money = Math.round(LuyKe(allCustomer_Filtered[i*1].energy));

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
    getNotification();
}

function mySize(obj)
{
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}
var allNotification = {}; // 20181204 // thông báo đã gửi
function getNotification()
{
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid + "/notification").on('child_added', function(snapshot, prev) 
    {
        // console.log("/notification change");
        currentNotification = snapshot.val();
        time = snapshot.key;
        if (currentNotification) 
        {
            divForEachNotification = document.createElement('div');
            $(divForEachNotification)
                .show()
                .html("<label><span class=\"fas fa-angle-double-right\"></span><b data-toggle=\"modal\" data-target=\"#Modal_xemthongbao\" class=\"buttonNotification\" id data-title></b><br></label>")
            // thêm các thông số khác
            buttonNotification = $(divForEachNotification).find('.buttonNotification')
            $(buttonNotification)
                .text(currentNotification.title)
                .data("title", currentNotification.title)
                .data("content", currentNotification.content)
                .data("sender", currentNotification.sender)
                .data("time", time)
            $(divForEachNotification).prependTo($("#thongBaoDaGui"))    // hiển thị nó lên
        }   
    });
}
/*
{
    "1543235014684": {
        "content": "Thông báo: Đây là thông báo gửi thử nghiệm từ quản trị viên khu vực",
        "read": 0,
        "sender": "Quản trị viên khu vực",
        "title": "Quản trị viên gửi thông báo thử lần 1"
    },
    "1543235364453": {
        "content": "Thông báo: Đây là thông báo gửi thử nghiệm từ quản trị viên khu vực",
        "read": 0,
        "sender": "Quản trị viên khu vực",
        "title": "Quản trị viên gửi thông báo thử lần 2"
    }
}
*/
$('#Modal_xemthongbao').on('show.bs.modal', function (event) 
{
    // console.log("Modal_xemthongbao event...");
    var button = $(event.relatedTarget) // Button that triggered the modal
    var time = button.data("time");
    var timeFormated = moment(time*1).format("HH:mm:ss, DD-MM-YYYY");
    var modal = $(this)
    modal.find('.card-header').text(button.data("title"));
    modal.find('.card-text').text(button.data("content"));
    // modal.find('.card-footer').text("Được gửi bởi: " 
    //                     + button.data("sender")
    //                     + ". Vào lúc: " 
    //                     + timeFormated);
    modal.find('.card-footer').text("Được gửi vào lúc: " 
                        + timeFormated);
    // markRead(time);
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

// sau khi đã remote thành công tới project trên heroku, 
// nếu project dưới máy có chỉnh sửa thì sẽ làm thế này...
// viết heroku login  rồi enter, bấm phím bất kì để mở trình duyệt và đăng nhập..
// tiếp git add .
// tiếp git commit -am "make it better"
// tiếp là git push heroku master
// ở đây mới làm rồi, không có gì thay đổi nên k làm tiếp được...
// OK  

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