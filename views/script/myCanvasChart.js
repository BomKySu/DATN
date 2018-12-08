

console.log("myCanvasChart.js running");
var nowMils = Date.now();
var myYear = moment(nowMils).format("YYYY");
var myMonth = moment(nowMils).format("MM");
// var myMonthMinus1 = myMonth - 1;
var myMonthBefore = myMonth - 1;
// var myMonthBeforeMinus1 = myMonthBefore - 1;
var myMonthBefore_2 = myMonth - 2;
var myMonthXaxis = 0; // tháng dành cho trục X, chọn 0 >  tháng 1 để đủ 31 ngày, k cần biết tháng
var myDate = 1;
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
                markerType: "square",
                lineDashType: "",
                xValueFormatString: "Ngày DD",
                color: "#0000FF",
                dataPoints: 
                [
                    { x: new Date(myYear, myMonthXaxis, 01), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["01"] },
                    { x: new Date(myYear, myMonthXaxis, 02), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["02"] },
                    { x: new Date(myYear, myMonthXaxis, 03), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["03"] },
                    { x: new Date(myYear, myMonthXaxis, 04), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["04"] },
                    { x: new Date(myYear, myMonthXaxis, 05), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["05"] },
                    { x: new Date(myYear, myMonthXaxis, 06), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["06"] },
                    { x: new Date(myYear, myMonthXaxis, 07), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["07"] },
                    { x: new Date(myYear, myMonthXaxis, 08), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["08"] },
                    { x: new Date(myYear, myMonthXaxis, 09), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["09"] },
                    { x: new Date(myYear, myMonthXaxis, 10), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["10"] },
                    { x: new Date(myYear, myMonthXaxis, 11), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["11"] },
                    { x: new Date(myYear, myMonthXaxis, 12), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["12"] },
                    { x: new Date(myYear, myMonthXaxis, 13), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["13"] },
                    { x: new Date(myYear, myMonthXaxis, 14), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["14"] },
                    { x: new Date(myYear, myMonthXaxis, 15), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["15"] },
                    { x: new Date(myYear, myMonthXaxis, 16), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["16"] },
                    { x: new Date(myYear, myMonthXaxis, 17), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["17"] },
                    { x: new Date(myYear, myMonthXaxis, 18), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["18"] },
                    { x: new Date(myYear, myMonthXaxis, 19), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["19"] },
                    { x: new Date(myYear, myMonthXaxis, 20), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["20"] },
                    { x: new Date(myYear, myMonthXaxis, 21), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["21"] },
                    { x: new Date(myYear, myMonthXaxis, 22), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["22"] },
                    { x: new Date(myYear, myMonthXaxis, 23), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["23"] },
                    { x: new Date(myYear, myMonthXaxis, 24), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["24"] },
                    { x: new Date(myYear, myMonthXaxis, 25), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["25"] },
                    { x: new Date(myYear, myMonthXaxis, 26), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["26"] },
                    { x: new Date(myYear, myMonthXaxis, 27), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["27"] },
                    { x: new Date(myYear, myMonthXaxis, 28), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["28"] },
                    { x: new Date(myYear, myMonthXaxis, 29), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["29"] },
                    { x: new Date(myYear, myMonthXaxis, 30), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["30"] },
                    { x: new Date(myYear, myMonthXaxis, 31), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["31"] },

                ]
            },
            {   // đường thứ 2 // tháng trước
                type: "line",
                showInLegend: true,
                name: "Tháng " + myMonthBefore,
                markerType: "square",
                lineDashType: "",
                xValueFormatString: "Ngày DD",
                color: "#00FF00",
                dataPoints: 
                [
                    { x: new Date(myYear, myMonthXaxis, 01), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["01"] },
                    { x: new Date(myYear, myMonthXaxis, 02), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["02"] },
                    { x: new Date(myYear, myMonthXaxis, 03), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["03"] },
                    { x: new Date(myYear, myMonthXaxis, 04), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["04"] },
                    { x: new Date(myYear, myMonthXaxis, 05), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["05"] },
                    { x: new Date(myYear, myMonthXaxis, 06), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["06"] },
                    { x: new Date(myYear, myMonthXaxis, 07), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["07"] },
                    { x: new Date(myYear, myMonthXaxis, 08), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["08"] },
                    { x: new Date(myYear, myMonthXaxis, 09), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["09"] },
                    { x: new Date(myYear, myMonthXaxis, 10), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["10"] },
                    { x: new Date(myYear, myMonthXaxis, 11), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["11"] },
                    { x: new Date(myYear, myMonthXaxis, 12), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["12"] },
                    { x: new Date(myYear, myMonthXaxis, 13), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["13"] },
                    { x: new Date(myYear, myMonthXaxis, 14), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["14"] },
                    { x: new Date(myYear, myMonthXaxis, 15), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["15"] },
                    { x: new Date(myYear, myMonthXaxis, 16), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["16"] },
                    { x: new Date(myYear, myMonthXaxis, 17), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["17"] },
                    { x: new Date(myYear, myMonthXaxis, 18), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["18"] },
                    { x: new Date(myYear, myMonthXaxis, 19), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["19"] },
                    { x: new Date(myYear, myMonthXaxis, 20), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["20"] },
                    { x: new Date(myYear, myMonthXaxis, 21), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["21"] },
                    { x: new Date(myYear, myMonthXaxis, 22), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["22"] },
                    { x: new Date(myYear, myMonthXaxis, 23), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["23"] },
                    { x: new Date(myYear, myMonthXaxis, 24), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["24"] },
                    { x: new Date(myYear, myMonthXaxis, 25), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["25"] },
                    { x: new Date(myYear, myMonthXaxis, 26), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["26"] },
                    { x: new Date(myYear, myMonthXaxis, 27), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["27"] },
                    { x: new Date(myYear, myMonthXaxis, 28), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["28"] },
                    { x: new Date(myYear, myMonthXaxis, 29), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["29"] },
                    { x: new Date(myYear, myMonthXaxis, 30), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["30"] },
                    { x: new Date(myYear, myMonthXaxis, 31), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["31"] },

                ]
            },
            {   // đường thứ 1 // tháng này
                type: "line",
                showInLegend: true,
                name: "Tháng  " + myMonth,
                markerType: "square",
                xValueFormatString: "Ngày DD",
                color: "#FF0000",
                dataPoints: 
                [
                    { x: new Date(myYear, myMonthXaxis, 01), y: energyChartData[myYear.toString()][myMonth.toString()]["01"] },
                    { x: new Date(myYear, myMonthXaxis, 02), y: energyChartData[myYear.toString()][myMonth.toString()]["02"] },
                    { x: new Date(myYear, myMonthXaxis, 03), y: energyChartData[myYear.toString()][myMonth.toString()]["03"] },
                    { x: new Date(myYear, myMonthXaxis, 04), y: energyChartData[myYear.toString()][myMonth.toString()]["04"] },
                    { x: new Date(myYear, myMonthXaxis, 05), y: energyChartData[myYear.toString()][myMonth.toString()]["05"] },
                    { x: new Date(myYear, myMonthXaxis, 06), y: energyChartData[myYear.toString()][myMonth.toString()]["06"] },
                    { x: new Date(myYear, myMonthXaxis, 07), y: energyChartData[myYear.toString()][myMonth.toString()]["07"] },
                    { x: new Date(myYear, myMonthXaxis, 08), y: energyChartData[myYear.toString()][myMonth.toString()]["08"] },
                    { x: new Date(myYear, myMonthXaxis, 09), y: energyChartData[myYear.toString()][myMonth.toString()]["09"] },
                    { x: new Date(myYear, myMonthXaxis, 10), y: energyChartData[myYear.toString()][myMonth.toString()]["10"] },
                    { x: new Date(myYear, myMonthXaxis, 11), y: energyChartData[myYear.toString()][myMonth.toString()]["11"] },
                    { x: new Date(myYear, myMonthXaxis, 12), y: energyChartData[myYear.toString()][myMonth.toString()]["12"] },
                    { x: new Date(myYear, myMonthXaxis, 13), y: energyChartData[myYear.toString()][myMonth.toString()]["13"] },
                    { x: new Date(myYear, myMonthXaxis, 14), y: energyChartData[myYear.toString()][myMonth.toString()]["14"] },
                    { x: new Date(myYear, myMonthXaxis, 15), y: energyChartData[myYear.toString()][myMonth.toString()]["15"] },
                    { x: new Date(myYear, myMonthXaxis, 16), y: energyChartData[myYear.toString()][myMonth.toString()]["16"] },
                    { x: new Date(myYear, myMonthXaxis, 17), y: energyChartData[myYear.toString()][myMonth.toString()]["17"] },
                    { x: new Date(myYear, myMonthXaxis, 18), y: energyChartData[myYear.toString()][myMonth.toString()]["18"] },
                    { x: new Date(myYear, myMonthXaxis, 19), y: energyChartData[myYear.toString()][myMonth.toString()]["19"] },
                    { x: new Date(myYear, myMonthXaxis, 20), y: energyChartData[myYear.toString()][myMonth.toString()]["20"] },
                    { x: new Date(myYear, myMonthXaxis, 21), y: energyChartData[myYear.toString()][myMonth.toString()]["21"] },
                    { x: new Date(myYear, myMonthXaxis, 22), y: energyChartData[myYear.toString()][myMonth.toString()]["22"] },
                    { x: new Date(myYear, myMonthXaxis, 23), y: energyChartData[myYear.toString()][myMonth.toString()]["23"] },
                    { x: new Date(myYear, myMonthXaxis, 24), y: energyChartData[myYear.toString()][myMonth.toString()]["24"] },
                    { x: new Date(myYear, myMonthXaxis, 25), y: energyChartData[myYear.toString()][myMonth.toString()]["25"] },
                    { x: new Date(myYear, myMonthXaxis, 26), y: energyChartData[myYear.toString()][myMonth.toString()]["26"] },
                    { x: new Date(myYear, myMonthXaxis, 27), y: energyChartData[myYear.toString()][myMonth.toString()]["27"] },
                    { x: new Date(myYear, myMonthXaxis, 28), y: energyChartData[myYear.toString()][myMonth.toString()]["28"] },
                    { x: new Date(myYear, myMonthXaxis, 29), y: energyChartData[myYear.toString()][myMonth.toString()]["29"] },
                    { x: new Date(myYear, myMonthXaxis, 30), y: energyChartData[myYear.toString()][myMonth.toString()]["30"] },
                    { x: new Date(myYear, myMonthXaxis, 31), y: energyChartData[myYear.toString()][myMonth.toString()]["31"] },
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
        { x: new Date(myYear, myMonthXaxis, 01), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["01"] },
        { x: new Date(myYear, myMonthXaxis, 02), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["02"] },
        { x: new Date(myYear, myMonthXaxis, 03), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["03"] },
        { x: new Date(myYear, myMonthXaxis, 04), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["04"] },
        { x: new Date(myYear, myMonthXaxis, 05), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["05"] },
        { x: new Date(myYear, myMonthXaxis, 06), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["06"] },
        { x: new Date(myYear, myMonthXaxis, 07), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["07"] },
        { x: new Date(myYear, myMonthXaxis, 08), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["08"] },
        { x: new Date(myYear, myMonthXaxis, 09), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["09"] },
        { x: new Date(myYear, myMonthXaxis, 10), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["10"] },
        { x: new Date(myYear, myMonthXaxis, 11), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["11"] },
        { x: new Date(myYear, myMonthXaxis, 12), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["12"] },
        { x: new Date(myYear, myMonthXaxis, 13), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["13"] },
        { x: new Date(myYear, myMonthXaxis, 14), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["14"] },
        { x: new Date(myYear, myMonthXaxis, 15), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["15"] },
        { x: new Date(myYear, myMonthXaxis, 16), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["16"] },
        { x: new Date(myYear, myMonthXaxis, 17), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["17"] },
        { x: new Date(myYear, myMonthXaxis, 18), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["18"] },
        { x: new Date(myYear, myMonthXaxis, 19), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["19"] },
        { x: new Date(myYear, myMonthXaxis, 20), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["20"] },
        { x: new Date(myYear, myMonthXaxis, 21), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["21"] },
        { x: new Date(myYear, myMonthXaxis, 22), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["22"] },
        { x: new Date(myYear, myMonthXaxis, 23), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["23"] },
        { x: new Date(myYear, myMonthXaxis, 24), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["24"] },
        { x: new Date(myYear, myMonthXaxis, 25), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["25"] },
        { x: new Date(myYear, myMonthXaxis, 26), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["26"] },
        { x: new Date(myYear, myMonthXaxis, 27), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["27"] },
        { x: new Date(myYear, myMonthXaxis, 28), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["28"] },
        { x: new Date(myYear, myMonthXaxis, 29), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["29"] },
        { x: new Date(myYear, myMonthXaxis, 30), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["30"] },
        { x: new Date(myYear, myMonthXaxis, 31), y: energyChartData[myYear.toString()][myMonthBefore_2.toString()]["31"] },
    ]
    chart.options.data[1].dataPoints =
    [
        { x: new Date(myYear, myMonthXaxis, 01), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["01"] },
        { x: new Date(myYear, myMonthXaxis, 02), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["02"] },
        { x: new Date(myYear, myMonthXaxis, 03), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["03"] },
        { x: new Date(myYear, myMonthXaxis, 04), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["04"] },
        { x: new Date(myYear, myMonthXaxis, 05), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["05"] },
        { x: new Date(myYear, myMonthXaxis, 06), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["06"] },
        { x: new Date(myYear, myMonthXaxis, 07), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["07"] },
        { x: new Date(myYear, myMonthXaxis, 08), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["08"] },
        { x: new Date(myYear, myMonthXaxis, 09), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["09"] },
        { x: new Date(myYear, myMonthXaxis, 10), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["10"] },
        { x: new Date(myYear, myMonthXaxis, 11), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["11"] },
        { x: new Date(myYear, myMonthXaxis, 12), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["12"] },
        { x: new Date(myYear, myMonthXaxis, 13), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["13"] },
        { x: new Date(myYear, myMonthXaxis, 14), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["14"] },
        { x: new Date(myYear, myMonthXaxis, 15), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["15"] },
        { x: new Date(myYear, myMonthXaxis, 16), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["16"] },
        { x: new Date(myYear, myMonthXaxis, 17), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["17"] },
        { x: new Date(myYear, myMonthXaxis, 18), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["18"] },
        { x: new Date(myYear, myMonthXaxis, 19), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["19"] },
        { x: new Date(myYear, myMonthXaxis, 20), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["20"] },
        { x: new Date(myYear, myMonthXaxis, 21), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["21"] },
        { x: new Date(myYear, myMonthXaxis, 22), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["22"] },
        { x: new Date(myYear, myMonthXaxis, 23), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["23"] },
        { x: new Date(myYear, myMonthXaxis, 24), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["24"] },
        { x: new Date(myYear, myMonthXaxis, 25), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["25"] },
        { x: new Date(myYear, myMonthXaxis, 26), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["26"] },
        { x: new Date(myYear, myMonthXaxis, 27), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["27"] },
        { x: new Date(myYear, myMonthXaxis, 28), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["28"] },
        { x: new Date(myYear, myMonthXaxis, 29), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["29"] },
        { x: new Date(myYear, myMonthXaxis, 30), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["30"] },
        { x: new Date(myYear, myMonthXaxis, 31), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["31"] },
    ]
    chart.options.data[2].dataPoints =
    [
        { x: new Date(myYear, myMonthXaxis, 01), y: energyChartData[myYear.toString()][myMonth.toString()]["01"] },
        { x: new Date(myYear, myMonthXaxis, 02), y: energyChartData[myYear.toString()][myMonth.toString()]["02"] },
        { x: new Date(myYear, myMonthXaxis, 03), y: energyChartData[myYear.toString()][myMonth.toString()]["03"] },
        { x: new Date(myYear, myMonthXaxis, 04), y: energyChartData[myYear.toString()][myMonth.toString()]["04"] },
        { x: new Date(myYear, myMonthXaxis, 05), y: energyChartData[myYear.toString()][myMonth.toString()]["05"] },
        { x: new Date(myYear, myMonthXaxis, 06), y: energyChartData[myYear.toString()][myMonth.toString()]["06"] },
        { x: new Date(myYear, myMonthXaxis, 07), y: energyChartData[myYear.toString()][myMonth.toString()]["07"] },
        { x: new Date(myYear, myMonthXaxis, 08), y: energyChartData[myYear.toString()][myMonth.toString()]["08"] },
        { x: new Date(myYear, myMonthXaxis, 09), y: energyChartData[myYear.toString()][myMonth.toString()]["09"] },
        { x: new Date(myYear, myMonthXaxis, 10), y: energyChartData[myYear.toString()][myMonth.toString()]["10"] },
        { x: new Date(myYear, myMonthXaxis, 11), y: energyChartData[myYear.toString()][myMonth.toString()]["11"] },
        { x: new Date(myYear, myMonthXaxis, 12), y: energyChartData[myYear.toString()][myMonth.toString()]["12"] },
        { x: new Date(myYear, myMonthXaxis, 13), y: energyChartData[myYear.toString()][myMonth.toString()]["13"] },
        { x: new Date(myYear, myMonthXaxis, 14), y: energyChartData[myYear.toString()][myMonth.toString()]["14"] },
        { x: new Date(myYear, myMonthXaxis, 15), y: energyChartData[myYear.toString()][myMonth.toString()]["15"] },
        { x: new Date(myYear, myMonthXaxis, 16), y: energyChartData[myYear.toString()][myMonth.toString()]["16"] },
        { x: new Date(myYear, myMonthXaxis, 17), y: energyChartData[myYear.toString()][myMonth.toString()]["17"] },
        { x: new Date(myYear, myMonthXaxis, 18), y: energyChartData[myYear.toString()][myMonth.toString()]["18"] },
        { x: new Date(myYear, myMonthXaxis, 19), y: energyChartData[myYear.toString()][myMonth.toString()]["19"] },
        { x: new Date(myYear, myMonthXaxis, 20), y: energyChartData[myYear.toString()][myMonth.toString()]["20"] },
        { x: new Date(myYear, myMonthXaxis, 21), y: energyChartData[myYear.toString()][myMonth.toString()]["21"] },
        { x: new Date(myYear, myMonthXaxis, 22), y: energyChartData[myYear.toString()][myMonth.toString()]["22"] },
        { x: new Date(myYear, myMonthXaxis, 23), y: energyChartData[myYear.toString()][myMonth.toString()]["23"] },
        { x: new Date(myYear, myMonthXaxis, 24), y: energyChartData[myYear.toString()][myMonth.toString()]["24"] },
        { x: new Date(myYear, myMonthXaxis, 25), y: energyChartData[myYear.toString()][myMonth.toString()]["25"] },
        { x: new Date(myYear, myMonthXaxis, 26), y: energyChartData[myYear.toString()][myMonth.toString()]["26"] },
        { x: new Date(myYear, myMonthXaxis, 27), y: energyChartData[myYear.toString()][myMonth.toString()]["27"] },
        { x: new Date(myYear, myMonthXaxis, 28), y: energyChartData[myYear.toString()][myMonth.toString()]["28"] },
        { x: new Date(myYear, myMonthXaxis, 29), y: energyChartData[myYear.toString()][myMonth.toString()]["29"] },
        { x: new Date(myYear, myMonthXaxis, 30), y: energyChartData[myYear.toString()][myMonth.toString()]["30"] },
        { x: new Date(myYear, myMonthXaxis, 31), y: energyChartData[myYear.toString()][myMonth.toString()]["31"] },
    ]
}
    