

// console.log("myCanvasChart.js running");
var nowMils = Date.now();
var myYear = moment(nowMils).format("YYYY");
var myMonth = moment(nowMils).format("M");
$("#thangNay").text("Tháng " + myMonth);
// var myMonthMinus1 = myMonth - 1;

var myYearBefore = myYear;
var myMonthBefore = myMonth - 1;
if (myMonthBefore == 0)
{
    myMonthBefore = 12;
    myYearBefore = myYear - 1;
}
// var myMonthBeforeMinus1 = myMonthBefore - 1;

var myYearBefore_2 = myYear;
var myMonthBefore_2 = myMonth - 2;
if (myMonthBefore_2 == -1)
{
    myMonthBefore_2 = 11;
    myYearBefore_2 = myYear - 1;
}
var myMonthXaxis = 0; // tháng dành cho trục X, chọn 0 >  tháng 1 để đủ 31 ngày, k cần biết tháng
var myDate = 1;
var chart;
// window.onload = function () 
// {
chartLoad = function () 
{
    // console.log("chartLoad running");
    chart = new CanvasJS.Chart("chartContainer", 
    { 
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Biểu đồ điện năng tiêu thụ 3 tháng gần nhất (kWh)"
        },
        axisX:{
            valueFormatString: "Ngày DD",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "",
            suffix: "kWh",
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
                name: "Tháng " + myMonthBefore_2,
                markerType: "circle",
                lineDashType: "",
                xValueFormatString: "Ngày DD",
                color: "#0000FF",
                dataPoints: 
                [
                    { x: new Date(myYear, myMonthXaxis, 01), y: energyChartData[myYearBefore_2][myMonthBefore_2]["1"] },
                    { x: new Date(myYear, myMonthXaxis, 02), y: energyChartData[myYearBefore_2][myMonthBefore_2]["2"] },
                    { x: new Date(myYear, myMonthXaxis, 03), y: energyChartData[myYearBefore_2][myMonthBefore_2]["3"] },
                    { x: new Date(myYear, myMonthXaxis, 04), y: energyChartData[myYearBefore_2][myMonthBefore_2]["4"] },
                    { x: new Date(myYear, myMonthXaxis, 05), y: energyChartData[myYearBefore_2][myMonthBefore_2]["5"] },
                    { x: new Date(myYear, myMonthXaxis, 06), y: energyChartData[myYearBefore_2][myMonthBefore_2]["6"] },
                    { x: new Date(myYear, myMonthXaxis, 07), y: energyChartData[myYearBefore_2][myMonthBefore_2]["7"] },
                    { x: new Date(myYear, myMonthXaxis, 08), y: energyChartData[myYearBefore_2][myMonthBefore_2]["8"] },
                    { x: new Date(myYear, myMonthXaxis, 09), y: energyChartData[myYearBefore_2][myMonthBefore_2]["9"] },
                    { x: new Date(myYear, myMonthXaxis, 10), y: energyChartData[myYearBefore_2][myMonthBefore_2]["10"] },
                    { x: new Date(myYear, myMonthXaxis, 11), y: energyChartData[myYearBefore_2][myMonthBefore_2]["11"] },
                    { x: new Date(myYear, myMonthXaxis, 12), y: energyChartData[myYearBefore_2][myMonthBefore_2]["12"] },
                    { x: new Date(myYear, myMonthXaxis, 13), y: energyChartData[myYearBefore_2][myMonthBefore_2]["13"] },
                    { x: new Date(myYear, myMonthXaxis, 14), y: energyChartData[myYearBefore_2][myMonthBefore_2]["14"] },
                    { x: new Date(myYear, myMonthXaxis, 15), y: energyChartData[myYearBefore_2][myMonthBefore_2]["15"] },
                    { x: new Date(myYear, myMonthXaxis, 16), y: energyChartData[myYearBefore_2][myMonthBefore_2]["16"] },
                    { x: new Date(myYear, myMonthXaxis, 17), y: energyChartData[myYearBefore_2][myMonthBefore_2]["17"] },
                    { x: new Date(myYear, myMonthXaxis, 18), y: energyChartData[myYearBefore_2][myMonthBefore_2]["18"] },
                    { x: new Date(myYear, myMonthXaxis, 19), y: energyChartData[myYearBefore_2][myMonthBefore_2]["19"] },
                    { x: new Date(myYear, myMonthXaxis, 20), y: energyChartData[myYearBefore_2][myMonthBefore_2]["20"] },
                    { x: new Date(myYear, myMonthXaxis, 21), y: energyChartData[myYearBefore_2][myMonthBefore_2]["21"] },
                    { x: new Date(myYear, myMonthXaxis, 22), y: energyChartData[myYearBefore_2][myMonthBefore_2]["22"] },
                    { x: new Date(myYear, myMonthXaxis, 23), y: energyChartData[myYearBefore_2][myMonthBefore_2]["23"] },
                    { x: new Date(myYear, myMonthXaxis, 24), y: energyChartData[myYearBefore_2][myMonthBefore_2]["24"] },
                    { x: new Date(myYear, myMonthXaxis, 25), y: energyChartData[myYearBefore_2][myMonthBefore_2]["25"] },
                    { x: new Date(myYear, myMonthXaxis, 26), y: energyChartData[myYearBefore_2][myMonthBefore_2]["26"] },
                    { x: new Date(myYear, myMonthXaxis, 27), y: energyChartData[myYearBefore_2][myMonthBefore_2]["27"] },
                    { x: new Date(myYear, myMonthXaxis, 28), y: energyChartData[myYearBefore_2][myMonthBefore_2]["28"] },
                    { x: new Date(myYear, myMonthXaxis, 29), y: energyChartData[myYearBefore_2][myMonthBefore_2]["29"] },
                    { x: new Date(myYear, myMonthXaxis, 30), y: energyChartData[myYearBefore_2][myMonthBefore_2]["30"] },
                    { x: new Date(myYear, myMonthXaxis, 31), y: energyChartData[myYearBefore_2][myMonthBefore_2]["31"] },

                ]
            },
            {   // đường thứ 2 // tháng trước
                type: "line",
                showInLegend: true,
                name: "Tháng " + myMonthBefore,
                markerType: "circle",
                lineDashType: "",
                xValueFormatString: "Ngày DD",
                color: "#008000",
                dataPoints: 
                [
                    { x: new Date(myYear, myMonthXaxis, 01), y: energyChartData[myYearBefore][myMonthBefore]["1"] },
                    { x: new Date(myYear, myMonthXaxis, 02), y: energyChartData[myYearBefore][myMonthBefore]["2"] },
                    { x: new Date(myYear, myMonthXaxis, 03), y: energyChartData[myYearBefore][myMonthBefore]["3"] },
                    { x: new Date(myYear, myMonthXaxis, 04), y: energyChartData[myYearBefore][myMonthBefore]["4"] },
                    { x: new Date(myYear, myMonthXaxis, 05), y: energyChartData[myYearBefore][myMonthBefore]["5"] },
                    { x: new Date(myYear, myMonthXaxis, 06), y: energyChartData[myYearBefore][myMonthBefore]["6"] },
                    { x: new Date(myYear, myMonthXaxis, 07), y: energyChartData[myYearBefore][myMonthBefore]["7"] },
                    { x: new Date(myYear, myMonthXaxis, 08), y: energyChartData[myYearBefore][myMonthBefore]["8"] },
                    { x: new Date(myYear, myMonthXaxis, 09), y: energyChartData[myYearBefore][myMonthBefore]["9"] },
                    { x: new Date(myYear, myMonthXaxis, 10), y: energyChartData[myYearBefore][myMonthBefore]["10"] },
                    { x: new Date(myYear, myMonthXaxis, 11), y: energyChartData[myYearBefore][myMonthBefore]["11"] },
                    { x: new Date(myYear, myMonthXaxis, 12), y: energyChartData[myYearBefore][myMonthBefore]["12"] },
                    { x: new Date(myYear, myMonthXaxis, 13), y: energyChartData[myYearBefore][myMonthBefore]["13"] },
                    { x: new Date(myYear, myMonthXaxis, 14), y: energyChartData[myYearBefore][myMonthBefore]["14"] },
                    { x: new Date(myYear, myMonthXaxis, 15), y: energyChartData[myYearBefore][myMonthBefore]["15"] },
                    { x: new Date(myYear, myMonthXaxis, 16), y: energyChartData[myYearBefore][myMonthBefore]["16"] },
                    { x: new Date(myYear, myMonthXaxis, 17), y: energyChartData[myYearBefore][myMonthBefore]["17"] },
                    { x: new Date(myYear, myMonthXaxis, 18), y: energyChartData[myYearBefore][myMonthBefore]["18"] },
                    { x: new Date(myYear, myMonthXaxis, 19), y: energyChartData[myYearBefore][myMonthBefore]["19"] },
                    { x: new Date(myYear, myMonthXaxis, 20), y: energyChartData[myYearBefore][myMonthBefore]["20"] },
                    { x: new Date(myYear, myMonthXaxis, 21), y: energyChartData[myYearBefore][myMonthBefore]["21"] },
                    { x: new Date(myYear, myMonthXaxis, 22), y: energyChartData[myYearBefore][myMonthBefore]["22"] },
                    { x: new Date(myYear, myMonthXaxis, 23), y: energyChartData[myYearBefore][myMonthBefore]["23"] },
                    { x: new Date(myYear, myMonthXaxis, 24), y: energyChartData[myYearBefore][myMonthBefore]["24"] },
                    { x: new Date(myYear, myMonthXaxis, 25), y: energyChartData[myYearBefore][myMonthBefore]["25"] },
                    { x: new Date(myYear, myMonthXaxis, 26), y: energyChartData[myYearBefore][myMonthBefore]["26"] },
                    { x: new Date(myYear, myMonthXaxis, 27), y: energyChartData[myYearBefore][myMonthBefore]["27"] },
                    { x: new Date(myYear, myMonthXaxis, 28), y: energyChartData[myYearBefore][myMonthBefore]["28"] },
                    { x: new Date(myYear, myMonthXaxis, 29), y: energyChartData[myYearBefore][myMonthBefore]["29"] },
                    { x: new Date(myYear, myMonthXaxis, 30), y: energyChartData[myYearBefore][myMonthBefore]["30"] },
                    { x: new Date(myYear, myMonthXaxis, 31), y: energyChartData[myYearBefore][myMonthBefore]["31"] },

                ]
            },
            {   // đường thứ 1 // tháng này
                type: "line",
                showInLegend: true,
                name: "Tháng  " + myMonth,
                markerType: "circle",
                xValueFormatString: "Ngày DD",
                color: "#FF0000",
                dataPoints: 
                [
                    { x: new Date(myYear, myMonthXaxis, 01), y: energyChartData[myYear][myMonth]["1"] },
                    { x: new Date(myYear, myMonthXaxis, 02), y: energyChartData[myYear][myMonth]["2"] },
                    { x: new Date(myYear, myMonthXaxis, 03), y: energyChartData[myYear][myMonth]["3"] },
                    { x: new Date(myYear, myMonthXaxis, 04), y: energyChartData[myYear][myMonth]["4"] },
                    { x: new Date(myYear, myMonthXaxis, 05), y: energyChartData[myYear][myMonth]["5"] },
                    { x: new Date(myYear, myMonthXaxis, 06), y: energyChartData[myYear][myMonth]["6"] },
                    { x: new Date(myYear, myMonthXaxis, 07), y: energyChartData[myYear][myMonth]["7"] },
                    { x: new Date(myYear, myMonthXaxis, 08), y: energyChartData[myYear][myMonth]["8"] },
                    { x: new Date(myYear, myMonthXaxis, 09), y: energyChartData[myYear][myMonth]["9"] },
                    { x: new Date(myYear, myMonthXaxis, 10), y: energyChartData[myYear][myMonth]["10"] },
                    { x: new Date(myYear, myMonthXaxis, 11), y: energyChartData[myYear][myMonth]["11"] },
                    { x: new Date(myYear, myMonthXaxis, 12), y: energyChartData[myYear][myMonth]["12"] },
                    { x: new Date(myYear, myMonthXaxis, 13), y: energyChartData[myYear][myMonth]["13"] },
                    { x: new Date(myYear, myMonthXaxis, 14), y: energyChartData[myYear][myMonth]["14"] },
                    { x: new Date(myYear, myMonthXaxis, 15), y: energyChartData[myYear][myMonth]["15"] },
                    { x: new Date(myYear, myMonthXaxis, 16), y: energyChartData[myYear][myMonth]["16"] },
                    { x: new Date(myYear, myMonthXaxis, 17), y: energyChartData[myYear][myMonth]["17"] },
                    { x: new Date(myYear, myMonthXaxis, 18), y: energyChartData[myYear][myMonth]["18"] },
                    { x: new Date(myYear, myMonthXaxis, 19), y: energyChartData[myYear][myMonth]["19"] },
                    { x: new Date(myYear, myMonthXaxis, 20), y: energyChartData[myYear][myMonth]["20"] },
                    { x: new Date(myYear, myMonthXaxis, 21), y: energyChartData[myYear][myMonth]["21"] },
                    { x: new Date(myYear, myMonthXaxis, 22), y: energyChartData[myYear][myMonth]["22"] },
                    { x: new Date(myYear, myMonthXaxis, 23), y: energyChartData[myYear][myMonth]["23"] },
                    { x: new Date(myYear, myMonthXaxis, 24), y: energyChartData[myYear][myMonth]["24"] },
                    { x: new Date(myYear, myMonthXaxis, 25), y: energyChartData[myYear][myMonth]["25"] },
                    { x: new Date(myYear, myMonthXaxis, 26), y: energyChartData[myYear][myMonth]["26"] },
                    { x: new Date(myYear, myMonthXaxis, 27), y: energyChartData[myYear][myMonth]["27"] },
                    { x: new Date(myYear, myMonthXaxis, 28), y: energyChartData[myYear][myMonth]["28"] },
                    { x: new Date(myYear, myMonthXaxis, 29), y: energyChartData[myYear][myMonth]["29"] },
                    { x: new Date(myYear, myMonthXaxis, 30), y: energyChartData[myYear][myMonth]["30"] },
                    { x: new Date(myYear, myMonthXaxis, 31), y: energyChartData[myYear][myMonth]["31"] },
                ]
            },
       
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
    chart.options.data[0].dataPoints = 
    [
        { x: new Date(myYear, myMonthXaxis, 01), y: energyChartData[myYearBefore_2][myMonthBefore_2]["1"] },
        { x: new Date(myYear, myMonthXaxis, 02), y: energyChartData[myYearBefore_2][myMonthBefore_2]["2"] },
        { x: new Date(myYear, myMonthXaxis, 03), y: energyChartData[myYearBefore_2][myMonthBefore_2]["3"] },
        { x: new Date(myYear, myMonthXaxis, 04), y: energyChartData[myYearBefore_2][myMonthBefore_2]["4"] },
        { x: new Date(myYear, myMonthXaxis, 05), y: energyChartData[myYearBefore_2][myMonthBefore_2]["5"] },
        { x: new Date(myYear, myMonthXaxis, 06), y: energyChartData[myYearBefore_2][myMonthBefore_2]["6"] },
        { x: new Date(myYear, myMonthXaxis, 07), y: energyChartData[myYearBefore_2][myMonthBefore_2]["7"] },
        { x: new Date(myYear, myMonthXaxis, 08), y: energyChartData[myYearBefore_2][myMonthBefore_2]["8"] },
        { x: new Date(myYear, myMonthXaxis, 09), y: energyChartData[myYearBefore_2][myMonthBefore_2]["9"] },
        { x: new Date(myYear, myMonthXaxis, 10), y: energyChartData[myYearBefore_2][myMonthBefore_2]["10"] },
        { x: new Date(myYear, myMonthXaxis, 11), y: energyChartData[myYearBefore_2][myMonthBefore_2]["11"] },
        { x: new Date(myYear, myMonthXaxis, 12), y: energyChartData[myYearBefore_2][myMonthBefore_2]["12"] },
        { x: new Date(myYear, myMonthXaxis, 13), y: energyChartData[myYearBefore_2][myMonthBefore_2]["13"] },
        { x: new Date(myYear, myMonthXaxis, 14), y: energyChartData[myYearBefore_2][myMonthBefore_2]["14"] },
        { x: new Date(myYear, myMonthXaxis, 15), y: energyChartData[myYearBefore_2][myMonthBefore_2]["15"] },
        { x: new Date(myYear, myMonthXaxis, 16), y: energyChartData[myYearBefore_2][myMonthBefore_2]["16"] },
        { x: new Date(myYear, myMonthXaxis, 17), y: energyChartData[myYearBefore_2][myMonthBefore_2]["17"] },
        { x: new Date(myYear, myMonthXaxis, 18), y: energyChartData[myYearBefore_2][myMonthBefore_2]["18"] },
        { x: new Date(myYear, myMonthXaxis, 19), y: energyChartData[myYearBefore_2][myMonthBefore_2]["19"] },
        { x: new Date(myYear, myMonthXaxis, 20), y: energyChartData[myYearBefore_2][myMonthBefore_2]["20"] },
        { x: new Date(myYear, myMonthXaxis, 21), y: energyChartData[myYearBefore_2][myMonthBefore_2]["21"] },
        { x: new Date(myYear, myMonthXaxis, 22), y: energyChartData[myYearBefore_2][myMonthBefore_2]["22"] },
        { x: new Date(myYear, myMonthXaxis, 23), y: energyChartData[myYearBefore_2][myMonthBefore_2]["23"] },
        { x: new Date(myYear, myMonthXaxis, 24), y: energyChartData[myYearBefore_2][myMonthBefore_2]["24"] },
        { x: new Date(myYear, myMonthXaxis, 25), y: energyChartData[myYearBefore_2][myMonthBefore_2]["25"] },
        { x: new Date(myYear, myMonthXaxis, 26), y: energyChartData[myYearBefore_2][myMonthBefore_2]["26"] },
        { x: new Date(myYear, myMonthXaxis, 27), y: energyChartData[myYearBefore_2][myMonthBefore_2]["27"] },
        { x: new Date(myYear, myMonthXaxis, 28), y: energyChartData[myYearBefore_2][myMonthBefore_2]["28"] },
        { x: new Date(myYear, myMonthXaxis, 29), y: energyChartData[myYearBefore_2][myMonthBefore_2]["29"] },
        { x: new Date(myYear, myMonthXaxis, 30), y: energyChartData[myYearBefore_2][myMonthBefore_2]["30"] },
        { x: new Date(myYear, myMonthXaxis, 31), y: energyChartData[myYearBefore_2][myMonthBefore_2]["31"] },
    ]
    chart.options.data[1].dataPoints =
    [
        { x: new Date(myYear, myMonthXaxis, 01), y: energyChartData[myYearBefore][myMonthBefore]["1"] },
        { x: new Date(myYear, myMonthXaxis, 02), y: energyChartData[myYearBefore][myMonthBefore]["2"] },
        { x: new Date(myYear, myMonthXaxis, 03), y: energyChartData[myYearBefore][myMonthBefore]["3"] },
        { x: new Date(myYear, myMonthXaxis, 04), y: energyChartData[myYearBefore][myMonthBefore]["4"] },
        { x: new Date(myYear, myMonthXaxis, 05), y: energyChartData[myYearBefore][myMonthBefore]["5"] },
        { x: new Date(myYear, myMonthXaxis, 06), y: energyChartData[myYearBefore][myMonthBefore]["6"] },
        { x: new Date(myYear, myMonthXaxis, 07), y: energyChartData[myYearBefore][myMonthBefore]["7"] },
        { x: new Date(myYear, myMonthXaxis, 08), y: energyChartData[myYearBefore][myMonthBefore]["8"] },
        { x: new Date(myYear, myMonthXaxis, 09), y: energyChartData[myYearBefore][myMonthBefore]["9"] },
        { x: new Date(myYear, myMonthXaxis, 10), y: energyChartData[myYearBefore][myMonthBefore]["10"] },
        { x: new Date(myYear, myMonthXaxis, 11), y: energyChartData[myYearBefore][myMonthBefore]["11"] },
        { x: new Date(myYear, myMonthXaxis, 12), y: energyChartData[myYearBefore][myMonthBefore]["12"] },
        { x: new Date(myYear, myMonthXaxis, 13), y: energyChartData[myYearBefore][myMonthBefore]["13"] },
        { x: new Date(myYear, myMonthXaxis, 14), y: energyChartData[myYearBefore][myMonthBefore]["14"] },
        { x: new Date(myYear, myMonthXaxis, 15), y: energyChartData[myYearBefore][myMonthBefore]["15"] },
        { x: new Date(myYear, myMonthXaxis, 16), y: energyChartData[myYearBefore][myMonthBefore]["16"] },
        { x: new Date(myYear, myMonthXaxis, 17), y: energyChartData[myYearBefore][myMonthBefore]["17"] },
        { x: new Date(myYear, myMonthXaxis, 18), y: energyChartData[myYearBefore][myMonthBefore]["18"] },
        { x: new Date(myYear, myMonthXaxis, 19), y: energyChartData[myYearBefore][myMonthBefore]["19"] },
        { x: new Date(myYear, myMonthXaxis, 20), y: energyChartData[myYearBefore][myMonthBefore]["20"] },
        { x: new Date(myYear, myMonthXaxis, 21), y: energyChartData[myYearBefore][myMonthBefore]["21"] },
        { x: new Date(myYear, myMonthXaxis, 22), y: energyChartData[myYearBefore][myMonthBefore]["22"] },
        { x: new Date(myYear, myMonthXaxis, 23), y: energyChartData[myYearBefore][myMonthBefore]["23"] },
        { x: new Date(myYear, myMonthXaxis, 24), y: energyChartData[myYearBefore][myMonthBefore]["24"] },
        { x: new Date(myYear, myMonthXaxis, 25), y: energyChartData[myYearBefore][myMonthBefore]["25"] },
        { x: new Date(myYear, myMonthXaxis, 26), y: energyChartData[myYearBefore][myMonthBefore]["26"] },
        { x: new Date(myYear, myMonthXaxis, 27), y: energyChartData[myYearBefore][myMonthBefore]["27"] },
        { x: new Date(myYear, myMonthXaxis, 28), y: energyChartData[myYearBefore][myMonthBefore]["28"] },
        { x: new Date(myYear, myMonthXaxis, 29), y: energyChartData[myYearBefore][myMonthBefore]["29"] },
        { x: new Date(myYear, myMonthXaxis, 30), y: energyChartData[myYearBefore][myMonthBefore]["30"] },
        { x: new Date(myYear, myMonthXaxis, 31), y: energyChartData[myYearBefore][myMonthBefore]["31"] },
    ]
    chart.options.data[2].dataPoints =
    [
        { x: new Date(myYear, myMonthXaxis, 01), y: energyChartData[myYear][myMonth]["1"] },
        { x: new Date(myYear, myMonthXaxis, 02), y: energyChartData[myYear][myMonth]["2"] },
        { x: new Date(myYear, myMonthXaxis, 03), y: energyChartData[myYear][myMonth]["3"] },
        { x: new Date(myYear, myMonthXaxis, 04), y: energyChartData[myYear][myMonth]["4"] },
        { x: new Date(myYear, myMonthXaxis, 05), y: energyChartData[myYear][myMonth]["5"] },
        { x: new Date(myYear, myMonthXaxis, 06), y: energyChartData[myYear][myMonth]["6"] },
        { x: new Date(myYear, myMonthXaxis, 07), y: energyChartData[myYear][myMonth]["7"] },
        { x: new Date(myYear, myMonthXaxis, 08), y: energyChartData[myYear][myMonth]["8"] },
        { x: new Date(myYear, myMonthXaxis, 09), y: energyChartData[myYear][myMonth]["9"] },
        { x: new Date(myYear, myMonthXaxis, 10), y: energyChartData[myYear][myMonth]["10"] },
        { x: new Date(myYear, myMonthXaxis, 11), y: energyChartData[myYear][myMonth]["11"] },
        { x: new Date(myYear, myMonthXaxis, 12), y: energyChartData[myYear][myMonth]["12"] },
        { x: new Date(myYear, myMonthXaxis, 13), y: energyChartData[myYear][myMonth]["13"] },
        { x: new Date(myYear, myMonthXaxis, 14), y: energyChartData[myYear][myMonth]["14"] },
        { x: new Date(myYear, myMonthXaxis, 15), y: energyChartData[myYear][myMonth]["15"] },
        { x: new Date(myYear, myMonthXaxis, 16), y: energyChartData[myYear][myMonth]["16"] },
        { x: new Date(myYear, myMonthXaxis, 17), y: energyChartData[myYear][myMonth]["17"] },
        { x: new Date(myYear, myMonthXaxis, 18), y: energyChartData[myYear][myMonth]["18"] },
        { x: new Date(myYear, myMonthXaxis, 19), y: energyChartData[myYear][myMonth]["19"] },
        { x: new Date(myYear, myMonthXaxis, 20), y: energyChartData[myYear][myMonth]["20"] },
        { x: new Date(myYear, myMonthXaxis, 21), y: energyChartData[myYear][myMonth]["21"] },
        { x: new Date(myYear, myMonthXaxis, 22), y: energyChartData[myYear][myMonth]["22"] },
        { x: new Date(myYear, myMonthXaxis, 23), y: energyChartData[myYear][myMonth]["23"] },
        { x: new Date(myYear, myMonthXaxis, 24), y: energyChartData[myYear][myMonth]["24"] },
        { x: new Date(myYear, myMonthXaxis, 25), y: energyChartData[myYear][myMonth]["25"] },
        { x: new Date(myYear, myMonthXaxis, 26), y: energyChartData[myYear][myMonth]["26"] },
        { x: new Date(myYear, myMonthXaxis, 27), y: energyChartData[myYear][myMonth]["27"] },
        { x: new Date(myYear, myMonthXaxis, 28), y: energyChartData[myYear][myMonth]["28"] },
        { x: new Date(myYear, myMonthXaxis, 29), y: energyChartData[myYear][myMonth]["29"] },
        { x: new Date(myYear, myMonthXaxis, 30), y: energyChartData[myYear][myMonth]["30"] },
        { x: new Date(myYear, myMonthXaxis, 31), y: energyChartData[myYear][myMonth]["31"] },
    ]
}
    