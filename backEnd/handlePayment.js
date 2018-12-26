console.log("../backEnd/handlePayment called");
var moment = require('moment');
var nowMils = Date.now();
var myYear = moment(nowMils).format("YYYY");
var myMonth = moment(nowMils).format("M");
var myDate = moment(nowMils).format("D");
// lấy tháng trước // 
var myYear_ = myYear;
var myMonth_ = myMonth*1 - 1;
if (myMonth_ <= 0)
{
    myMonth_ = 12;
    myYear_ = myYear*1 - 1;
}

var payment = {};
var pathPayment = "/" + "PE00000000000" + "/" + "Payment" + "/" + myYear_ + "/" + myMonth_;
database_Elec_TD.ref(pathPayment).on('value', function(snapshot) 
{
    payment = snapshot.val();
    if (payment.Paid != 1)
    {
        if (myDate == 1 || myDate == 5 || myDate == 10)
        {
            var text = `-Dien Luc Hien Nghia Nam-
            TB: Tien dien cua quy khach la ` + payment.Debt + `.
            Vui long thanh toan truoc ngay 15 thang nay.
            .`
            console.log("Người này nợ tiền điện chưa được 15 ngày..", text);
        }
        else if (myDate >= 16)
        {
            // var text = `-Dien Luc Hien Nghia Nam-
            // TB: Cty se cat dien cua quy khach do khong dong tien dung han.
            // Tien dien cua thang truoc la ` + payment.Debt + `.
            // Vui long thanh toan de duoc cap dien lai.
            // .`
            
            console.log("Người này đã nợ tiền điện tháng trước quá 15 ngày.. Có thể cắt điện ngay..", text);
            // nexmo_0.message.sendSms("Nexmo", "84964807452", text)
            nexmo_0.message.sendSms("Nexmo", "84964807452", `
-DienLucHienNghiaNam-
Cong ty se cat dien do khong dong tien dung han.
.`)
            var pathRelay = "/" + "PE00000000000" + "/" + "Relay";
            database_Elec_TD.ref(pathRelay).set("TAT", function(error) {});
        }
    }
    else
    {
        console.log("Người này đã thanh toán đủ tiền điện.. Bật điện cho họ..");
        var pathRelay = "/" + "PE00000000000" + "/" + "Relay";
        database_Elec_TD.ref(pathRelay).set("ON", function(error) {});
    }
}
)


var payment_1 = {};
var pathPayment_1 = "/" + "PE00000000001" + "/" + "Payment" + "/" + myYear_ + "/" + myMonth_;
database_Elec_TD.ref(pathPayment_1).on('value', function(snapshot) 
{
    payment_1 = snapshot.val();
    if (payment_1.Paid != 1)
    {
        if (myDate == 1 || myDate == 5 || myDate == 10)
        {
            var text = `-Dien Luc Hien Nghia Nam-
            TB: Tien dien cua quy khach la ` + payment_1.Debt + `.
            Vui long thanh toan truoc ngay 15 thang nay.
            .`
            console.log("Người này nợ tiền điện chưa được 15 ngày..", text);
        }
        else if (myDate >= 16)
        {
            // var text = `-Dien Luc Hien Nghia Nam-
            // TB: Cty se cat dien cua quy khach do khong dong tien dung han.
            // Tien dien cua thang truoc la ` + payment_1.Debt + `.
            // Vui long thanh toan de duoc cap dien lai.
            // .`
            
            console.log("Người này đã nợ tiền điện tháng trước quá 15 ngày.. Có thể cắt điện ngay..", text);
            // nexmo_0.message.sendSms("Nexmo", "84344302753", text)
            nexmo_0.message.sendSms("Nexmo", "84344302753", `
-DienLucHienNghiaNam-
Cong ty se cat dien do khong dong tien dung han.
.`)
            var pathRelay = "/" + "PE00000000001" + "/" + "Relay";
            database_Elec_TD.ref(pathRelay).set("TAT", function(error) {});
        }
    }
    else
    {
        console.log("Người này đã thanh toán đủ tiền điện.. Bật điện cho họ..");
        var pathRelay = "/" + "PE00000000001" + "/" + "Relay";
        database_Elec_TD.ref(pathRelay).set("ON", function(error) {});
    }
}
)


var payment_2 = {};
var pathPayment_2 = "/" + "PE00000000002" + "/" + "Payment" + "/" + myYear_ + "/" + myMonth_;
database_Elec_TD.ref(pathPayment_2).on('value', function(snapshot) 
{
    payment_2 = snapshot.val();
    if (payment_2.Paid != 1)
    {
        if (myDate == 1 || myDate == 5 || myDate == 10)
        {
            var text = `-Dien Luc Hien Nghia Nam-
            TB: Tien dien cua quy khach la ` + payment_2.Debt + `.
            Vui long thanh toan truoc ngay 15 thang nay.
            .`
            console.log("Người này nợ tiền điện chưa được 15 ngày..", text);
        }
        else if (myDate >= 16)
        {
            // var text = `-Dien Luc Hien Nghia Nam-
            // TB: Cty se cat dien cua quy khach do khong dong tien dung han.
            // Tien dien cua thang truoc la ` + payment_2.Debt + `.
            // Vui long thanh toan de duoc cap dien lai.
            // .`
            
            console.log("Người này đã nợ tiền điện tháng trước quá 15 ngày.. Có thể cắt điện ngay..", text);
            // nexmo_0.message.sendSms("Nexmo", "84968787976", text)
            nexmo_0.message.sendSms("Nexmo", "84968787976", `
-DienLucHienNghiaNam-
Cong ty se cat dien do khong dong tien dung han.
.`)
            var pathRelay = "/" + "PE00000000002" + "/" + "Relay";
            database_Elec_TD.ref(pathRelay).set("TAT", function(error) {});
        }
    }
    else
    {
        console.log("Người này đã thanh toán đủ tiền điện.. Bật điện cho họ..");
        var pathRelay = "/" + "PE00000000002" + "/" + "Relay";
        database_Elec_TD.ref(pathRelay).set("ON", function(error) {});
    }
}
)


