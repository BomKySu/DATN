

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
    getEnergyChartData();
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
            $("#power").text(RealtimeValue.pha1.power + " (W)");
            $("#energy").text(RealtimeValue.pha1.energy + " (kWh)");

            $("#current_2").text(RealtimeValue.pha2.current + " (A)");
            $("#power_2").text(RealtimeValue.pha2.power + " (W)");
            $("#energy_2").text(RealtimeValue.pha2.energy + " (kWh)");

            $("#current_3").text(RealtimeValue.pha3.current + " (A)");
            $("#power_3").text(RealtimeValue.pha3.power + " (W)");
            $("#energy_3").text(RealtimeValue.pha3.energy + " (kWh)");
            // getEnergyChartData();
            // getAllCustomer(); 
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
            // getEnergyChartData();    
            // getAllCustomer(); 
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
            // getEnergyChartData();
            // getAllCustomer(); 
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
    // firebase.database().ref("/UserInfo").once('value').then( function(snapshot) 
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
                    allCustomer_Filtered[count*1].uid = idid;
                    count++;
                }
            }
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
                // $('#customerStatus_' + i_).text(allCustomer_Filtered[i*1].status);
                // $('#customerStatus_' + i_).text(allCustomer_Filtered[i*1].debt);
                $('#customerStatus_' + i_).addClass(allCustomer_Filtered[i*1].customerId);
                $('#customerStatus_' + i_).addClass("debt");
                loadDebt(allCustomer_Filtered[i*1].customerId);
            }
            else
            {
                $('#trForEachCustomer_' + i_)["0"].hidden="hidden";
            }
        }
    });
    getNotification();
}
function loadDebt(customerId)
{
    var path = "/" + customerId + "/Payment";
    database_Elec.ref(path).on('value', function(snapshot) 
    {   
        // var count = 0;
        var debt = 0;
        Payment = snapshot.val();
        console.log(path, Payment);
        var customerIdInEvent = snapshot.ref.parent.key;
        for(year in Payment)
        {
            for(month in Payment[year])
            {
                console.log(Payment[year][month]);
                if (Payment[year][month].Paid != 1)
                {
                    debt += Payment[year][month].Debt;
                    $("." + customerIdInEvent + ".debt").text(debt);
                }
            }
        }
    })
}

// function mySize(obj) // có ở trên rồi
// {
//     var size = 0, key;
//     for (key in obj) {
//         if (obj.hasOwnProperty(key)) size++;
//     }
//     return size;
// }

var allNotification = {}; // 20181204 // thông báo đã gửi
function getNotification()
{
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid + "/notification").on('child_added', function(snapshot, prev) 
    {
        // console.log("/notification change");
        currentNotification = snapshot.val();
        // console.log(currentNotification);
        time = snapshot.key;
        // if (currentNotification) 
        if ((currentNotification) && (($("#"+time).length <= 0)) ) // ktra có đọc được k, và cái đọc được đã tồn tại trên giao diện hay chưa... 
        {
            divForEachNotification = document.createElement('div');
            $(divForEachNotification)
                .hide()
                .attr("id", time)
                .attr("class","header-hover")
                .attr("href", "#")
                .attr('data-target', '#Modal_xemthongbao')
                .attr('data-toggle', 'modal' )
                .html("<label><span class='fas fa-angle-double-right'></span><b class='titleNotification'></b><br></label>")
                .data("title", currentNotification.title)
                .data("content", currentNotification.content)
                .data("time", time)
                .prependTo($("#thongBaoDaGui"))    // hiển thị nó lên
                .slideToggle("slow");
            titleNotification = $(divForEachNotification).find('.titleNotification') // con của cái div
            $(titleNotification).text(" " + currentNotification.title)
        }   
    });
    getFeedback();
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
    modal.find('.card-footer').html("Được gửi vào lúc: " + timeFormated);
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
function getFeedback()
{
    firebase.database().ref("/Admin" + user.companyId + "/feedback/").on('child_added', function(snapshot, prev) 
    {
        // console.log("/feedback change");
        currentFeedback = snapshot.val();
        // console.log(currentNotification);
        time = snapshot.key;
        // if (currentFeedback) 
        if ((currentFeedback) && (($("#"+time).length <= 0)) ) // ktra có đọc được k, và cái đọc được đã tồn tại trên giao diện hay chưa... 
        {
            if (currentFeedback.sender == null || currentFeedback.sender == undefined)
            {
                currentFeedback.sender = {name:"Chưa có", customerId:""};
            }
            divForEach = document.createElement('div');
            $(divForEach)
                .hide()
                .attr("id", time)
                .attr("class","header-hover")
                .attr("href", "#")
                .attr('data-target', '#Modal_xemPhanHoi')
                .attr('data-toggle', 'modal' )
                .html("<label><span class='fas fa-angle-double-right'></span><b class='titleFeedback'></b><br></label>")
            // thêm các thông số khác
                .data("title", currentFeedback.title)
                .data("content", currentFeedback.content)
                .data("senderName", currentFeedback.sender.name)
                .data("senderCustomerId", currentFeedback.sender.customerId)
                .data("time", time)
                .prependTo($("#feedbackList"))    // hiển thị nó lên
                .slideToggle("slow");
                titleFeedback = $(divForEach).find('.titleFeedback') // con của cái div
            $(titleFeedback).text(" " + currentFeedback.title)
            var pathRead = "/Admin" + user.companyId + "/feedback/" + time + "/read";
            checkReadUnread(pathRead);
        }
    });
}
$('#Modal_xemPhanHoi').on('show.bs.modal', function (event) 
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
    modal.find('.card-footer').html("Được gửi từ: "
                        + button.data("senderName")
                        + " (" + button.data("senderCustomerId") + ")"
                        + "<br>Vào lúc: " 
                        + timeFormated);
    // modal.find("#previewFeedbackPhoto");
    loadFeedbackPhoto(time);
    // markRead(time);
})
var storage = firebase.storage();
function loadFeedbackPhoto(time)
{
    $("#previewFeedbackPhoto").find("img").remove();// xoá hết hình đang có..   
    var path = "";
    for (var index = 0; index < 4; index ++)
    {
        path = user.companyId +  "/feedbackPhoto/" + time + "/" + index;
        storage.ref(path).getDownloadURL().then(function(url) 
        {
            // console.log(url);
            var img = document.createElement("img");
            $(img)
                .hide()
                .attr("src", url)
                .attr("height", 100)
                .attr("width", 100)
                .slideToggle("slow")
                .appendTo($("#previewFeedbackPhoto"))
                .attr("data-toggle", "modal")
                .attr("data-target", ".modal-view-photo");
                
            // var image = new Image();
            // image.height = 100;
            // // image.width = 100;
            // image.title  = "Ảnh đính kèm";
            // image.src    = url;
            // image.onclick = imgClick();
            // $("#previewFeedbackPhoto").append(image);
        }).catch(function(error) 
        {
            // console.log(error.code);
        });
    }
}
// bấm vào hình xem kích thước lớn:
$('.modal-view-photo').on('show.bs.modal', function (event) 
{
    var img = $(event.relatedTarget) // Button that triggered the modal
    $(this).find("img")[0].src = img[0].src;
})

//////// GỬI THÔNG BÁO
var submitNotification_new = document.getElementById("submitNotification_new");
var titleNotification_new = document.getElementById("titleNotification_new");
var textNotification_new = document.getElementById("textNotification_new");
var objNotification_new = {};
submitNotification_new.onclick =
    function()
    {
        objNotification_new.title = titleNotification_new.value;
        objNotification_new.content = textNotification_new.value;  
        objNotification_new.sender = "Quản trị viên khu vực";
        var nowMils = Date.now();
        // var time = moment(nowMils).format("YYYYMMDDHHmm");
        var path = "/UserInfo/" + firebase.auth().currentUser.uid + "/notification/" + nowMils;
        firebase.database().ref(path).set(objNotification_new, function(error)
        {
            if (error) {} 
            else 
            {
            JSAlert.alert("Gửi thông báo thành công..!").then(function()
                {
                    $("#Modal_thongbao").modal("hide");
                    titleNotification_new.value = "";
                    textNotification_new.value = "";
                });
            }
            for ( var user in allCustomer_Filtered)
            {
                path = "/UserInfo/" + allCustomer_Filtered[user].uid + "/notification/" + nowMils;
                firebase.database().ref(path).set(objNotification_new, function(error){});
            }
        });
    }


