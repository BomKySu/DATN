



// energyChartData/pha1/2018/12/05
// {"00":0,"01":0,"02":0,"03":0,"04":0,"05":0,"06":0,"07":0,"08":0,"09":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0}

console.log("myCanvasChart.js running");
var nowMils = Date.now();
var myYear = moment(nowMils).format("YYYY");
var myMonth = moment(nowMils).format("M");
$(".thang.nay").text(myMonth);
var myDate = moment(nowMils).format("D");
// var myDate = "05";
// var myDate = "5";
// var myMonthMinus1 = myMonth - 1;
var myMonthBefore = myMonth - 1;
// var myMonthBeforeMinus1 = myMonthBefore - 1;
var myMonthBefore_2 = myMonth - 2;
var myMonthXaxis = 0; // tháng dành cho trục X, chọn 0 >  tháng 1 để đủ 31 ngày, k cần biết tháng
var chart;
// window.onload = function () 
// {
chartLoad = function () 
{
    console.log("chartLoad running");
    chart = new CanvasJS.Chart("chartContainer", 
    { 
        options: {
            responsive: false
        },
        // animationEnabled: true,
        theme: "light2",
        title:{
            text: "Biểu đồ tổng điện năng tiêu thụ các khu vực"
        },
        axisX:{
            valueFormatString: "HH giờ",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "",
            suffix: " kWh",
            crosshair: {
                enabled: true
            }
        },
        toolTip:{
            shared:true
        },  
        legend:{
            cursor:"pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: 
        [
            {   // đường thứ 3 // tháng trước trước
                type: "line",
                showInLegend: true,
                name: "Thủ Đức ",
                markerType: "square",
                lineDashType: "",
                xValueFormatString: "HH giờ",
                color: "#0000FF",
                dataPoints: 
                [
                    { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["0"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["1"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["2"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["3"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["4"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["5"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["6"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["7"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["8"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["9"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["00"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["01"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["02"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["03"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["04"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["05"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["06"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["07"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["08"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["09"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 10), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["10"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 11), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["11"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 12), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["12"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 13), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["13"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 14), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["14"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 15), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["15"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 16), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["16"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 17), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["17"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 18), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["18"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 19), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["19"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 20), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["20"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 21), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["21"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 22), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["22"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 23), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["23"] },

                ]
            },
            {   // đường thứ 2 // tháng trước
                type: "line",
                showInLegend: true,
                name: "Gò Vấp ",
                markerType: "square",
                lineDashType: "",
                xValueFormatString: "HH giờ",
                color: "#FF4000",
                dataPoints: 
                [
                    { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["GoVap"][myYear][myMonth][myDate]["0"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["GoVap"][myYear][myMonth][myDate]["1"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["GoVap"][myYear][myMonth][myDate]["2"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["GoVap"][myYear][myMonth][myDate]["3"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["GoVap"][myYear][myMonth][myDate]["4"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["GoVap"][myYear][myMonth][myDate]["5"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["GoVap"][myYear][myMonth][myDate]["6"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["GoVap"][myYear][myMonth][myDate]["7"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["GoVap"][myYear][myMonth][myDate]["8"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["GoVap"][myYear][myMonth][myDate]["9"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["GoVap"][myYear][myMonth][myDate]["00"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["GoVap"][myYear][myMonth][myDate]["01"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["GoVap"][myYear][myMonth][myDate]["02"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["GoVap"][myYear][myMonth][myDate]["03"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["GoVap"][myYear][myMonth][myDate]["04"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["GoVap"][myYear][myMonth][myDate]["05"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["GoVap"][myYear][myMonth][myDate]["06"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["GoVap"][myYear][myMonth][myDate]["07"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["GoVap"][myYear][myMonth][myDate]["08"] },
                    // { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["GoVap"][myYear][myMonth][myDate]["09"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 10), y: energyChartData["GoVap"][myYear][myMonth][myDate]["10"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 11), y: energyChartData["GoVap"][myYear][myMonth][myDate]["11"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 12), y: energyChartData["GoVap"][myYear][myMonth][myDate]["12"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 13), y: energyChartData["GoVap"][myYear][myMonth][myDate]["13"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 14), y: energyChartData["GoVap"][myYear][myMonth][myDate]["14"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 15), y: energyChartData["GoVap"][myYear][myMonth][myDate]["15"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 16), y: energyChartData["GoVap"][myYear][myMonth][myDate]["16"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 17), y: energyChartData["GoVap"][myYear][myMonth][myDate]["17"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 18), y: energyChartData["GoVap"][myYear][myMonth][myDate]["18"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 19), y: energyChartData["GoVap"][myYear][myMonth][myDate]["19"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 20), y: energyChartData["GoVap"][myYear][myMonth][myDate]["20"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 21), y: energyChartData["GoVap"][myYear][myMonth][myDate]["21"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 22), y: energyChartData["GoVap"][myYear][myMonth][myDate]["22"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 23), y: energyChartData["GoVap"][myYear][myMonth][myDate]["23"] },

                ]
            },
            /*{   // đường thứ 1 // tháng này
                type: "line",
                showInLegend: true,
                name: "Pha 3  ",
                markerType: "square",
                xValueFormatString: "HH giờ",
                color: "#FF0000",
                dataPoints: 
                [
                    { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["pha3"][myYear][myMonth][myDate]["00"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["pha3"][myYear][myMonth][myDate]["01"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["pha3"][myYear][myMonth][myDate]["02"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["pha3"][myYear][myMonth][myDate]["03"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["pha3"][myYear][myMonth][myDate]["04"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["pha3"][myYear][myMonth][myDate]["05"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["pha3"][myYear][myMonth][myDate]["06"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["pha3"][myYear][myMonth][myDate]["07"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["pha3"][myYear][myMonth][myDate]["08"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["pha3"][myYear][myMonth][myDate]["09"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 10), y: energyChartData["pha3"][myYear][myMonth][myDate]["10"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 11), y: energyChartData["pha3"][myYear][myMonth][myDate]["11"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 12), y: energyChartData["pha3"][myYear][myMonth][myDate]["12"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 13), y: energyChartData["pha3"][myYear][myMonth][myDate]["13"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 14), y: energyChartData["pha3"][myYear][myMonth][myDate]["14"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 15), y: energyChartData["pha3"][myYear][myMonth][myDate]["15"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 16), y: energyChartData["pha3"][myYear][myMonth][myDate]["16"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 17), y: energyChartData["pha3"][myYear][myMonth][myDate]["17"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 18), y: energyChartData["pha3"][myYear][myMonth][myDate]["18"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 19), y: energyChartData["pha3"][myYear][myMonth][myDate]["19"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 20), y: energyChartData["pha3"][myYear][myMonth][myDate]["20"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 21), y: energyChartData["pha3"][myYear][myMonth][myDate]["21"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 22), y: energyChartData["pha3"][myYear][myMonth][myDate]["22"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 23), y: energyChartData["pha3"][myYear][myMonth][myDate]["23"] },
                    
                ]
            },*/
       
        ]
    });
    chart.render();
    
    function toogleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else{
            e.dataSeries.visible = true;
        }
        chart.render();
    }
    
}

updateChartData = function()
{
    // comment đoạn này vì đã xử lý bên ngoài, không còn trường hợp gọi hàm này mà chart vẫn null
    // if (chart == null)  
    // {
    //     console.log("chart == null");
    //     return;
    // }
    // console.log("chart != null");
    chart.options.data[0].dataPoints = 
    [
        { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["0"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["1"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["2"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["3"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["4"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["5"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["6"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["7"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["8"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["9"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["00"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["01"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["02"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["03"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["04"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["05"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["06"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["07"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["08"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["09"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 10), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["10"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 11), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["11"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 12), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["12"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 13), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["13"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 14), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["14"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 15), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["15"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 16), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["16"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 17), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["17"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 18), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["18"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 19), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["19"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 20), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["20"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 21), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["21"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 22), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["22"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 23), y: energyChartData["ThuDuc"][myYear][myMonth][myDate]["23"] },
    ]
    chart.options.data[1].dataPoints =
    [
        { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["GoVap"][myYear][myMonth][myDate]["0"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["GoVap"][myYear][myMonth][myDate]["1"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["GoVap"][myYear][myMonth][myDate]["2"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["GoVap"][myYear][myMonth][myDate]["3"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["GoVap"][myYear][myMonth][myDate]["4"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["GoVap"][myYear][myMonth][myDate]["5"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["GoVap"][myYear][myMonth][myDate]["6"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["GoVap"][myYear][myMonth][myDate]["7"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["GoVap"][myYear][myMonth][myDate]["8"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["GoVap"][myYear][myMonth][myDate]["9"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["GoVap"][myYear][myMonth][myDate]["00"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["GoVap"][myYear][myMonth][myDate]["01"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["GoVap"][myYear][myMonth][myDate]["02"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["GoVap"][myYear][myMonth][myDate]["03"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["GoVap"][myYear][myMonth][myDate]["04"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["GoVap"][myYear][myMonth][myDate]["05"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["GoVap"][myYear][myMonth][myDate]["06"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["GoVap"][myYear][myMonth][myDate]["07"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["GoVap"][myYear][myMonth][myDate]["08"] },
        // { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["GoVap"][myYear][myMonth][myDate]["09"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 10), y: energyChartData["GoVap"][myYear][myMonth][myDate]["10"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 11), y: energyChartData["GoVap"][myYear][myMonth][myDate]["11"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 12), y: energyChartData["GoVap"][myYear][myMonth][myDate]["12"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 13), y: energyChartData["GoVap"][myYear][myMonth][myDate]["13"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 14), y: energyChartData["GoVap"][myYear][myMonth][myDate]["14"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 15), y: energyChartData["GoVap"][myYear][myMonth][myDate]["15"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 16), y: energyChartData["GoVap"][myYear][myMonth][myDate]["16"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 17), y: energyChartData["GoVap"][myYear][myMonth][myDate]["17"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 18), y: energyChartData["GoVap"][myYear][myMonth][myDate]["18"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 19), y: energyChartData["GoVap"][myYear][myMonth][myDate]["19"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 20), y: energyChartData["GoVap"][myYear][myMonth][myDate]["20"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 21), y: energyChartData["GoVap"][myYear][myMonth][myDate]["21"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 22), y: energyChartData["GoVap"][myYear][myMonth][myDate]["22"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 23), y: energyChartData["GoVap"][myYear][myMonth][myDate]["23"] },
    ]
    /*chart.options.data[2].dataPoints =
    [
        { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["pha3"][myYear][myMonth][myDate]["00"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["pha3"][myYear][myMonth][myDate]["01"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["pha3"][myYear][myMonth][myDate]["02"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["pha3"][myYear][myMonth][myDate]["03"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["pha3"][myYear][myMonth][myDate]["04"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["pha3"][myYear][myMonth][myDate]["05"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["pha3"][myYear][myMonth][myDate]["06"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["pha3"][myYear][myMonth][myDate]["07"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["pha3"][myYear][myMonth][myDate]["08"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["pha3"][myYear][myMonth][myDate]["09"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 10), y: energyChartData["pha3"][myYear][myMonth][myDate]["10"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 11), y: energyChartData["pha3"][myYear][myMonth][myDate]["11"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 12), y: energyChartData["pha3"][myYear][myMonth][myDate]["12"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 13), y: energyChartData["pha3"][myYear][myMonth][myDate]["13"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 14), y: energyChartData["pha3"][myYear][myMonth][myDate]["14"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 15), y: energyChartData["pha3"][myYear][myMonth][myDate]["15"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 16), y: energyChartData["pha3"][myYear][myMonth][myDate]["16"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 17), y: energyChartData["pha3"][myYear][myMonth][myDate]["17"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 18), y: energyChartData["pha3"][myYear][myMonth][myDate]["18"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 19), y: energyChartData["pha3"][myYear][myMonth][myDate]["19"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 20), y: energyChartData["pha3"][myYear][myMonth][myDate]["20"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 21), y: energyChartData["pha3"][myYear][myMonth][myDate]["21"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 22), y: energyChartData["pha3"][myYear][myMonth][myDate]["22"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 23), y: energyChartData["pha3"][myYear][myMonth][myDate]["23"] },
    ]*/
}
    
// energyChartData/pha1/2018/12/05
// {"00":0,"01":0,"02":0,"03":0,"04":0,"05":0,"06":0,"07":0,"08":0,"09":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0}

// energyChartData
/*

{
    "pha1": {
      "2018": {
        "12": {
          "05": {
            "10": 0,
            "11": 0,
            "12": 0,
            "13": 0,
            "14": 0,
            "15": 0,
            "16": 0,
            "17": 0,
            "18": 0,
            "19": 0,
            "20": 0,
            "21": 0,
            "22": 0,
            "23": 0,
            "00": -0.001,
            "01": 0,
            "02": 0,
            "03": 0,
            "04": 0,
            "05": 0.1,
            "06": 0.1,
            "07": 0.2,
            "08": 0.2,
            "09": 0.1
          }
        }
      }
    },
    "pha2": {
      "2018": {
        "12": {
          "05": {
            "10": 0,
            "11": 0,
            "12": 0,
            "13": 0,
            "14": 0,
            "15": 0,
            "16": 0,
            "17": 0,
            "18": 0,
            "19": 0,
            "20": 0,
            "21": 0,
            "22": 0,
            "23": 0,
            "00": -0.001,
            "01": 0,
            "02": 0,
            "03": 0,
            "04": 0,
            "05": 0.1,
            "06": 0.1,
            "07": 0.2,
            "08": 0.2,
            "09": 0.2
          }
        }
      }
    },
    "pha3": {
      "2018": {
        "12": {
          "05": {
            "10": 0,
            "11": 0,
            "12": 0,
            "13": 0,
            "14": 0,
            "15": 0,
            "16": 0,
            "17": 0,
            "18": 0,
            "19": 0,
            "20": 0,
            "21": 0,
            "22": 0,
            "23": 0,
            "00": -0.001,
            "01": 0,
            "02": 0,
            "03": 0,
            "04": 0,
            "05": 0.1,
            "06": 0.1,
            "07": 0.1,
            "08": 0.2,
            "09": 0.2
          }
        }
      }
    }
  }
  */