

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

var allLoginUserName = {};
getLoginUserName();
function getLoginUserName()     
{
    firebase.database().ref('/LoginUserName').once('value').then(function(snapshot) 
    {   
        // console.log(snapshot.val());
        allLoginUserName = snapshot.val();
    });
}

var user = {};
getInfo = function()
{
    // firebase.database().ref('/UserInfo/' + userServer.uid).once('value').then(function(snapshot) 
    firebase.database().ref('/UserInfo/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) 
    {   
        console.log(snapshot.val());
        displayInfo(snapshot.val());
        user = snapshot.val();
    });
}

displayInfo = function(user)
{
    customerId.innerHTML = user.customerId;
    displayName.innerHTML = user.displayName;
    address.innerHTML = user.address;
    phoneNumber.innerHTML = user.phoneNumber;
    email.innerHTML = user.email;
    var email__ = document.getElementById("email__");
    email__.value = user.email;
    for (var name in allLoginUserName)
    {
        if (allLoginUserName[name] == user.email)
        {
            loginUserName.innerHTML = name;
            loginUserNameInput.value = name;
        }
    }
}

myLoop();    // có cái này mới chạy loop
function myLoop()  
{
    setTimeout(function () 
    {
        // if (user.email == null)
        if (firebase.auth().currentUser == null)
        {
            // khởi tạo firebase chưa ổn định
            console.log("haven't got currentUser");
            myLoop(); 
        }
        else if (user.email == null)
        {
            // đã có currentUser nhưng chưa đọc được thông tin từ thư mục uid của realtime db
            console.log("haven't got user info");
            getInfo(); 
            myLoop(); 
        }
        else
        {
            // đã có currentUser, đã đọc được thông tin từ thư mục uid của realtime db
            // getInfo();
            getElec();
            getEnergyChartData();
        }
    }, 1000)
};  

voltage.onclick =
getElec = function()
{
    var nowMils = Date.now();
    var sec = moment(nowMils).format('ss');
    // if (sec < 30) return;   // Node MCU chậm hơn
    // console.log(sec);
    // var path = "/" + user.customerId + moment(nowMils).format('/YYYY/MM/DD/HH/mm');
    // 20181109
    // var path = "/" + firebase.auth().currentUser.uid + moment(nowMils).format('/YYYY/MM/DD/HH/mm');
    // 20181114
    const pathRealtimeValue = "/" + user.customerId + "/RealtimeValue";
    console.log(pathRealtimeValue);
    // database_Elec.ref(path).once('value').then(function(snapshot) 
    database_Elec.ref(pathRealtimeValue).on('value', function(snapshot) 
    {   
        // console.log(snapshot.val()); 
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
}   


