



// energyChartData/pha1/2018/12/05
// {"00":0,"01":0,"02":0,"03":0,"04":0,"05":0,"06":0,"07":0,"08":0,"09":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0}

console.log("myCanvasChart.js running");
var nowMils = Date.now();
var myYear = moment(nowMils).format("YYYY");
var myMonth = moment(nowMils).format("MM");
$(".thang.nay").text(myMonth);
// var myDate = moment(nowMils).format("DD");
var myDate = "05";
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
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Biểu đồ tổng điện năng tiêu thụ 3 pha (kWh)"
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
                name: "Pha 1 ",
                markerType: "square",
                lineDashType: "dash",
                xValueFormatString: "HH giờ",
                color: "#0000FF",
                dataPoints: 
                [
                    { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["00"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["01"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["02"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["03"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["04"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["05"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["06"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["07"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["08"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["09"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 10), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["10"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 11), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["11"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 12), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["12"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 13), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["13"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 14), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["14"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 15), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["15"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 16), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["16"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 17), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["17"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 18), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["18"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 19), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["19"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 20), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["20"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 21), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["21"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 22), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["22"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 23), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["23"] },

                ]
            },
            {   // đường thứ 2 // tháng trước
                type: "line",
                showInLegend: true,
                name: "Pha 2 ",
                markerType: "square",
                lineDashType: "dash",
                xValueFormatString: "HH giờ",
                color: "#00FF00",
                dataPoints: 
                [
                    { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["00"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["01"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["02"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["03"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["04"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["05"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["06"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["07"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["08"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["09"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 10), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["10"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 11), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["11"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 12), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["12"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 13), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["13"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 14), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["14"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 15), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["15"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 16), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["16"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 17), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["17"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 18), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["18"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 19), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["19"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 20), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["20"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 21), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["21"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 22), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["22"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 23), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["23"] },

                ]
            },
            {   // đường thứ 1 // tháng này
                type: "line",
                showInLegend: true,
                name: "Pha 3  ",
                markerType: "square",
                xValueFormatString: "HH giờ",
                color: "#FF0000",
                dataPoints: 
                [
                    { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["00"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["01"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["02"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["03"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["04"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["05"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["06"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["07"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["08"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["09"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 10), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["10"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 11), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["11"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 12), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["12"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 13), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["13"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 14), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["14"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 15), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["15"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 16), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["16"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 17), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["17"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 18), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["18"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 19), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["19"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 20), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["20"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 21), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["21"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 22), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["22"] },
                    { x: new Date(myYear, myMonthXaxis, myDate, 23), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["23"] },
                    
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
        { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["00"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["01"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["02"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["03"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["04"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["05"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["06"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["07"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["08"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["09"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 10), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["10"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 11), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["11"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 12), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["12"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 13), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["13"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 14), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["14"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 15), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["15"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 16), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["16"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 17), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["17"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 18), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["18"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 19), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["19"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 20), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["20"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 21), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["21"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 22), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["22"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 23), y: energyChartData["pha1"][myYear.toString()][myMonth.toString()][myDate]["23"] },
    ]
    chart.options.data[1].dataPoints =
    [
        { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["00"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["01"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["02"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["03"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["04"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["05"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["06"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["07"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["08"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["09"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 10), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["10"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 11), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["11"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 12), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["12"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 13), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["13"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 14), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["14"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 15), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["15"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 16), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["16"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 17), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["17"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 18), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["18"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 19), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["19"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 20), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["20"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 21), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["21"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 22), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["22"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 23), y: energyChartData["pha2"][myYear.toString()][myMonth.toString()][myDate]["23"] },
    ]
    chart.options.data[2].dataPoints =
    [
        { x: new Date(myYear, myMonthXaxis, myDate, 00), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["00"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 01), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["01"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 02), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["02"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 03), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["03"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 04), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["04"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 05), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["05"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 06), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["06"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 07), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["07"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 08), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["08"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 09), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["09"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 10), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["10"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 11), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["11"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 12), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["12"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 13), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["13"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 14), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["14"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 15), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["15"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 16), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["16"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 17), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["17"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 18), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["18"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 19), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["19"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 20), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["20"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 21), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["21"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 22), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["22"] },
        { x: new Date(myYear, myMonthXaxis, myDate, 23), y: energyChartData["pha3"][myYear.toString()][myMonth.toString()][myDate]["23"] },
    ]
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