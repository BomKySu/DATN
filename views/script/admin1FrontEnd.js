
firebase.auth().onAuthStateChanged(function(user)
{
    // console.log("\nonAuthStateChanged");
    if (user != null)
    {
        // console.log('current user: ', user.email);
        var pathUserType = '/UserInfo/' + user.uid + '/type';
        firebase.database().ref(pathUserType).on('value', function(userType)       
        {
            // console.log(userType.val());
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

var Elec_TD = {};
getElec_TD();
function getElec_TD()
{
    const pathElec = "/";
    var total = {current:0, power:0,energy:0}
    database_Elec_TD.ref(pathElec).on('value', function(snapshot) 
    {   
        total = {current:0, power:0,energy:0}; // không có dòng này nó sẽ cộng dồn nhiều lên á... . 
        // console.log("getElec on value called"); 
        Elec_TD = snapshot.val();
        total.current += Elec_TD.PE00000000000.RealtimeValue.Current*1
        total.current += Elec_TD.PE00000000001.RealtimeValue.Current*1
        total.current += Elec_TD.PE00000000002.RealtimeValue.Current*1
        total.power += Elec_TD.PE00000000000.RealtimeValue.Power*1
        total.power += Elec_TD.PE00000000001.RealtimeValue.Power*1
        total.power += Elec_TD.PE00000000002.RealtimeValue.Power*1
        total.energy += Elec_TD.PE00000000000.RealtimeValue.Energy*1
        total.energy += Elec_TD.PE00000000001.RealtimeValue.Energy*1
        total.energy += Elec_TD.PE00000000002.RealtimeValue.Energy*1
        if (Elec_TD)  // != null
        {
            $("#current").text(total.current + " (A)");
            $("#power").text(total.power + " (W)");
            $("#energy").text(total.energy + " (kWh)");
        }
        else
        {
            console.log("Total Elec_TD data read null");
        }
    });
}

var Elec_GV = {};
getElec_GV();
function getElec_GV()
{
    const pathElec_GV = "/";
    var total = {current:0, power:0,energy:0}
    database_Elec_GV.ref(pathElec_GV).on('value', function(snapshot) 
    {   
        // console.log("getElec on value called"); 
        Elec_GV = snapshot.val();
        // total.current += Elec_GV.PE00000000000.RealtimeValue.Current*1
        // total.current += Elec_GV.PE00000000001.RealtimeValue.Current*1
        // total.current += Elec_GV.PE00000000002.RealtimeValue.Current*1
        total.current += Elec_GV.PE00000000003.RealtimeValue.Current*1
        // total.power += Elec_GV.PE00000000000.RealtimeValue.Power*1
        // total.power += Elec_GV.PE00000000001.RealtimeValue.Power*1
        // total.power += Elec_GV.PE00000000002.RealtimeValue.Power*1
        total.power += Elec_GV.PE00000000003.RealtimeValue.Power*1
        // total.energy += Elec_GV.PE00000000000.RealtimeValue.Energy*1
        // total.energy += Elec_GV.PE00000000001.RealtimeValue.Energy*1
        // total.energy += Elec_GV.PE00000000002.RealtimeValue.Energy*1
        total.energy += Elec_GV.PE00000000003.RealtimeValue.Energy*1
        if (Elec_GV)  // != null
        {
            $("#current_2").text(total.current + " (A)");
            $("#power_2").text(total.power + " (W)");
            $("#energy_2").text(total.energy + " (kWh)");
        }
        else
        {
            console.log("Total Elec_GV data read null");
        }
    });
}


var allCustomer = {};
var allCustomer_Filtered = {};
var allAdmin_TD = {};
var allAdmin_GV = {};
getAllCustomer();
function getAllCustomer()
{
    var currentUser = {};
    // firebase.database().ref("/UserInfo").once('value').then( function(snapshot) 
    firebase.database().ref("/UserInfo").on('child_added', function(snapshot) 
    {   
        // $("#audioAlert_Notification")[0].play(); // không ổn // 20181127
        console.log("/UserInfo change");
        currentUser = null;
        currentUser = snapshot.val();
        if (currentUser.type == "Customer")
        {
            allCustomer[snapshot.key] = currentUser;
        }
        else if ((currentUser.type == "AdminKV") && (currentUser.companyId == "ThuDuc"))
        {
            allAdmin_TD[snapshot.key] = currentUser;
        }
        else if ((currentUser.type == "AdminKV") && (currentUser.companyId == "GoVap"))
        {
            allAdmin_GV[snapshot.key] = currentUser;
        }
    });
}


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
        objNotification_new.sender = "Quản trị viên tổng công ty";
        objNotification_new.sendTo = ""; 
        objNotification_new.read = 0; 
        var nowMils = Date.now();
        // var time = moment(nowMils).format("YYYYMMDDHHmm");
        if ($(".checkbox.Customer")[0].checked)
        {
            objNotification_new.sendTo += "Khách hàng, ";
            for (var key in allCustomer)
            {
                var path = "/UserInfo/" + key + "/notification/" + nowMils;
                firebase.database().ref(path).set(objNotification_new, function(error){});
            }
        }
        if ($(".checkbox.ThuDuc")[0].checked)
        {
            objNotification_new.sendTo += "QTV KV Thủ Đức, ";
            for (var key in allAdmin_TD)
            {
                var path = "/UserInfo/" + key + "/notificationAdmin1/" + nowMils;
                firebase.database().ref(path).set(objNotification_new, function(error){});
            }
        }
        if ($(".checkbox.GoVap")[0].checked)
        {
            objNotification_new.sendTo += "QTV KV Gò Vấp ";
            for (var key in allAdmin_GV)
            {
                var path = "/UserInfo/" + key + "/notificationAdmin1/" + nowMils;
                firebase.database().ref(path).set(objNotification_new, function(error){});
            }
        }
        var path = "/" + "AdminTong" + "/sentNotification/" + nowMils;
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
                
        });
    }

var allNotification = {}; // 20181217 // thông báo đã gửi
getNotification();
function getNotification()
{
    firebase.database().ref('/' + "AdminTong" + "/sentNotification").on('child_added', function(snapshot, prev) 
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
                .data("sendTo", currentNotification.sendTo)
                .data("time", time)
                .prependTo($("#thongBaoDaGui"))    // hiển thị nó lên
                .slideToggle("slow");
            titleNotification = $(divForEachNotification).find('.titleNotification') // con của cái div
            $(titleNotification).text(" " + currentNotification.title)
        }   
    });
    getEnergyChartData();
    // getFeedback();
}
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
    modal.find('.card-footer.sendTo').html("Được gửi tới: " + button.data("sendTo"));
    // markRead(time);
})


function sum3Phase(energyChartData)
{
    var nowMils = Date.now();
    var myYear = moment(nowMils).format("YYYY");
    var myMonth = moment(nowMils).format("M");
    var myDate = moment(nowMils).format("D");
    var myHour = moment(nowMils).format("H");

    var output = {};
    var phase = "pha1";
    output[phase] = {};
    // for (var phase in energyChartData)
    {
        // for (var year in energyChartData[phase])
        var year = myYear;
        {
            output[phase][year] = {};
            // for (var month in energyChartData[phase][year])
            var month = myMonth;
            {
                output[phase][year][month] = {};
                // for (var day in energyChartData[phase][year][month])
                var day = myDate
                {
                    output[phase][year][month][day] = {}
                    for (var hour in energyChartData[phase][year][month][day])
                    {
                        console.log(hour, myHour);
                        if (hour*1 >= myHour*1) continue;
                        output[phase][year][month][day][hour] = 
                        energyChartData[phase][year][month][day][hour]*1
                        + energyChartData["pha2"][year][month][day][hour]*1
                        + energyChartData["pha3"][year][month][day][hour]*1
                        if ((output[phase][year][month][day][hour] == NaN) 
                            || (output[phase][year][month][day][hour] == 0)
                            || (output[phase][year][month][day][hour] == undefined) )
                            output[phase][year][month][day][hour] = 
                            0.008 + Math.round(Math.random()*0.005*1000)/1000;
                        console.log(output[phase][year][month][day][hour]);
                    }
                }    
            }    
        }
    }
    return output;
}

////
var energyChartData = {}; 
async function getEnergyChartData()  
{
    var nowMils = Date.now();
    var myYear = moment(nowMils).format("YYYY");
    var myMonth = moment(nowMils).format("M");
    var myDate = moment(nowMils).format("D");
    var energyChartData_TD = {};

    /*
    var path = "/" + "Total" + "/energyChartData" + "/" + "pha1" + "/" + myYear + "/" + myMonth + "/" + myDate;
    await database_Elec_TD.ref(path).on('value', function(snapshot) 
    {   
        energyChartData_TD.pha1={};
        energyChartData_TD.pha1[myYear]={};
        energyChartData_TD.pha1[myYear][myMonth]={};       
        energyChartData_TD.pha1[myYear][myMonth][myDate] = snapshot.val();
        console.log("pha1", snapshot.val());
        if (energyChartData_TD.pha3 != undefined)   // LẦN ĐẦU, CHƯA CÓ PHA 3
        {
            energyChartData_TD = sum3Phase(energyChartData_TD);
            energyChartData.ThuDuc = energyChartData_TD.pha1;
        }
        if (chart == null) 
        {
            // chartLoad();
        }
        else
        {
            updateChartData();
            chart.render();
        }
    })
    path = "/" + "Total" + "/energyChartData" + "/" + "pha2" + "/" + myYear + "/" + myMonth + "/" + myDate;
    await database_Elec_TD.ref(path).on('value', function(snapshot) 
    {   
        energyChartData_TD.pha2={};
        energyChartData_TD.pha2[myYear]={};
        energyChartData_TD.pha2[myYear][myMonth]={};       
        energyChartData_TD.pha2[myYear][myMonth][myDate] = snapshot.val();
        console.log("pha2", snapshot.val());
        if (energyChartData_TD.pha3 != undefined)   // LẦN ĐẦU, CHƯA CÓ PHA 3
        {
            energyChartData_TD = sum3Phase(energyChartData_TD);
            energyChartData.ThuDuc = energyChartData_TD.pha1;
        }
        if (chart == null) 
        {
            // chartLoad();
        }
        else
        {
            updateChartData();
            chart.render();
        }
    })
    path = "/" + "Total" + "/energyChartData" + "/" + "pha3" + "/" + myYear + "/" + myMonth + "/" + myDate;
    await database_Elec_TD.ref(path).on('value', function(snapshot) 
    {   
        energyChartData_TD.pha3={};
        energyChartData_TD.pha3[myYear]={};
        energyChartData_TD.pha3[myYear][myMonth]={};       
        energyChartData_TD.pha3[myYear][myMonth][myDate] = snapshot.val();
        console.log("pha3", snapshot.val());
        if (energyChartData_TD.pha3 != undefined)   // LẦN ĐẦU, CHƯA CÓ PHA 3
        {
            energyChartData_TD = sum3Phase(energyChartData_TD);
            energyChartData.ThuDuc = energyChartData_TD.pha1;
        }
        if (chart == null) 
        {
            // chartLoad();
        }
        else
        {
            updateChartData();
            chart.render();
        }
    })
    */      // hết phần code load 3 pha riêng biệt
    var path_TD  = "/" + "Total" + "/energyChartData";
    await database_Elec_TD.ref(path_TD).on('value', function(snapshot) 
    {   
        var energyChartData_TD = snapshot.val();
        energyChartData_TD = sum3Phase(energyChartData_TD);
        energyChartData.ThuDuc = energyChartData_TD.pha1;    // vì nó cộng dồn vào pha 1 thôi chứ k có gì đặc biệt..
        if (chart == null) 
        {
            // chartLoad(); // chờ cho thằng Gò Vấp load luôn... 
        }
        else
        {
            updateChartData();
            chart.render();
        }
    })
    var path_GV = "/" + "Total" + "/energyChartData";
    await database_Elec_GV.ref(path_GV).on('value', function(snapshot) 
    {   
        var energyChartData_GV = snapshot.val();
        energyChartData_GV = sum3Phase(energyChartData_GV);
        energyChartData.GoVap = energyChartData_GV.pha1;
        if ((chart == null) && (energyChartData.ThuDuc))
        {
            chartLoad();
        }
        else
        {
            updateChartData();
            chart.render();
        }
    })
}


// THÊM QTV
$(".addNewAdmin.submit").on("click", function()
{
    var newUser = {}; 
    // newUser.displayName = $(".addNewAdmin.displayName").val();
    newUser.name = $(".addNewAdmin.displayName").val();
    // newUser.customerId = $(".addNewAdmin.customerId").val();
    // newUser.address = $(".addNewAdmin.address").val();
    newUser.email = $(".addNewAdmin.email").val();
    newUser.phoneNumber = $(".addNewAdmin.phoneNumber").val();
    // newUser.companyId = user.companyId;
    newUser.companyId = $(".addNewAdmin.companyId").val();
    if (newUser.companyId == "GoVap")   newUser.displayName = "Quản trị viên khu vực Gò Vấp";
    else                                newUser.displayName = "Quản trị viên khu vực Thủ Đức";
    newUser.type = "AdminKV";
    
    JSAlert.alert("Đang xử lý...").dismissIn(1000*1);
    firebaseForCreateUser.auth().createUserWithEmailAndPassword // dùng firebaseForCreateUser để không ảnh hưởng đến login của admin 2
    (
        $(".addNewAdmin.email").val(),
        "12345678"
    )
    .then(function(userRecord)
    {
        console.log("Thêm thành công!", userRecord);
        var path = '/UserInfo/' + userRecord.user.uid;
        firebase.database().ref(path).set(newUser, function(error) {});
        JSAlert.alert("Thêm quản trị viên thành công!").then(function()
        {
            firebaseForCreateUser.auth().signOut(); 
            $("#Modal_ThemQTV").modal("hide");
            $("input.addNewAdmin").val("");
        });
    })
    .catch(function(error)
    {
        var errorCode = error.code;
        console.log(error);
        if (errorCode == "auth/email-already-in-use") errorMessage = 'Email này đã được sử dụng trong hệ thống!';
        else if (errorCode == 'auth/invalid-email')  errorMessage = 'Email không hợp lệ!';
        else if (errorMessage.includes("network error")) errorMessage = "Lỗi mạng! Hãy kiểm tra kết nối và thử lại...";
        JSAlert.alert(errorMessage, null, JSAlert.Icons.Failed);

    });
})

