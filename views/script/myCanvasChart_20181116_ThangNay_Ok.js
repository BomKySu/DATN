

console.log("myCanvasChart.js running");
var nowMils = Date.now();
var myYear = moment(nowMils).format("YYYY");
var myMonth = moment(nowMils).format("MM");
var myMonthMinus1 = myMonth - 1;
var myMonthBefore = myMonth - 1;
var myMonthBeforeMinus1 = myMonthBefore - 1;

var myDate = 1;
// window.onload = function () 
// {
chartLoad = function () 
{
    console.log("chartLoad running");
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Biểu đồ điện năng tiêu thụ tháng này (kWh)"
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
        data: [{
            type: "line",
            showInLegend: true,
            name: "Tháng này",
            markerType: "square",
            xValueFormatString: "Ngày DD \"th\"áng MM",
            color: "#F08080",
            dataPoints: [
                { x: new Date(myYear, myMonthMinus1, 01), y: energyChartData[myYear.toString()][myMonth.toString()]["01"] },
                { x: new Date(myYear, myMonthMinus1, 02), y: energyChartData[myYear.toString()][myMonth.toString()]["02"] },
                { x: new Date(myYear, myMonthMinus1, 03), y: energyChartData[myYear.toString()][myMonth.toString()]["03"] },
                { x: new Date(myYear, myMonthMinus1, 04), y: energyChartData[myYear.toString()][myMonth.toString()]["04"] },
                { x: new Date(myYear, myMonthMinus1, 05), y: energyChartData[myYear.toString()][myMonth.toString()]["05"] },
                { x: new Date(myYear, myMonthMinus1, 06), y: energyChartData[myYear.toString()][myMonth.toString()]["06"] },
                { x: new Date(myYear, myMonthMinus1, 07), y: energyChartData[myYear.toString()][myMonth.toString()]["07"] },
                { x: new Date(myYear, myMonthMinus1, 08), y: energyChartData[myYear.toString()][myMonth.toString()]["08"] },
                { x: new Date(myYear, myMonthMinus1, 09), y: energyChartData[myYear.toString()][myMonth.toString()]["09"] },
                { x: new Date(myYear, myMonthMinus1, 10), y: energyChartData[myYear.toString()][myMonth.toString()]["10"] },
                { x: new Date(myYear, myMonthMinus1, 11), y: energyChartData[myYear.toString()][myMonth.toString()]["11"] },
                { x: new Date(myYear, myMonthMinus1, 12), y: energyChartData[myYear.toString()][myMonth.toString()]["12"] },
                { x: new Date(myYear, myMonthMinus1, 13), y: energyChartData[myYear.toString()][myMonth.toString()]["13"] },
                { x: new Date(myYear, myMonthMinus1, 14), y: energyChartData[myYear.toString()][myMonth.toString()]["14"] },
                { x: new Date(myYear, myMonthMinus1, 15), y: energyChartData[myYear.toString()][myMonth.toString()]["15"] },
                { x: new Date(myYear, myMonthMinus1, 16), y: energyChartData[myYear.toString()][myMonth.toString()]["16"] },
                { x: new Date(myYear, myMonthMinus1, 17), y: energyChartData[myYear.toString()][myMonth.toString()]["17"] },
                { x: new Date(myYear, myMonthMinus1, 18), y: energyChartData[myYear.toString()][myMonth.toString()]["18"] },
                { x: new Date(myYear, myMonthMinus1, 19), y: energyChartData[myYear.toString()][myMonth.toString()]["19"] },
                { x: new Date(myYear, myMonthMinus1, 20), y: energyChartData[myYear.toString()][myMonth.toString()]["20"] },
                { x: new Date(myYear, myMonthMinus1, 21), y: energyChartData[myYear.toString()][myMonth.toString()]["21"] },
                { x: new Date(myYear, myMonthMinus1, 22), y: energyChartData[myYear.toString()][myMonth.toString()]["22"] },
                { x: new Date(myYear, myMonthMinus1, 23), y: energyChartData[myYear.toString()][myMonth.toString()]["23"] },
                { x: new Date(myYear, myMonthMinus1, 24), y: energyChartData[myYear.toString()][myMonth.toString()]["24"] },
                { x: new Date(myYear, myMonthMinus1, 25), y: energyChartData[myYear.toString()][myMonth.toString()]["25"] },
                { x: new Date(myYear, myMonthMinus1, 26), y: energyChartData[myYear.toString()][myMonth.toString()]["26"] },
                { x: new Date(myYear, myMonthMinus1, 27), y: energyChartData[myYear.toString()][myMonth.toString()]["27"] },
                { x: new Date(myYear, myMonthMinus1, 28), y: energyChartData[myYear.toString()][myMonth.toString()]["28"] },
                { x: new Date(myYear, myMonthMinus1, 29), y: energyChartData[myYear.toString()][myMonth.toString()]["29"] },
                { x: new Date(myYear, myMonthMinus1, 30), y: energyChartData[myYear.toString()][myMonth.toString()]["30"] },
                { x: new Date(myYear, myMonthMinus1, 31), y: energyChartData[myYear.toString()][myMonth.toString()]["31"] },
            ]
        },
        {   // đường thứ 2
            // type: "line",
            // showInLegend: true,
            // name: "Tháng trước",
            // markerType: "square",
            // lineDashType: "dash",
            // xValueFormatString: "Ngày DD",
            dataPoints: [
                // { x: new Date(myYear, myMonthMinus1, 01), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["01"] },
                // { x: new Date(myYear, myMonthMinus1, 02), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["02"] },
                // { x: new Date(myYear, myMonthMinus1, 03), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["03"] },
                // { x: new Date(myYear, myMonthMinus1, 04), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["04"] },
                // { x: new Date(myYear, myMonthMinus1, 05), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["05"] },
                // { x: new Date(myYear, myMonthMinus1, 06), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["06"] },
                // { x: new Date(myYear, myMonthMinus1, 07), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["07"] },
                // { x: new Date(myYear, myMonthMinus1, 08), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["08"] },
                // { x: new Date(myYear, myMonthMinus1, 09), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["09"] },
                // { x: new Date(myYear, myMonthMinus1, 10), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["10"] },
                // { x: new Date(myYear, myMonthMinus1, 11), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["11"] },
                // { x: new Date(myYear, myMonthMinus1, 12), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["12"] },
                // { x: new Date(myYear, myMonthMinus1, 13), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["13"] },
                // { x: new Date(myYear, myMonthMinus1, 14), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["14"] },
                // { x: new Date(myYear, myMonthMinus1, 15), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["15"] },
                // { x: new Date(myYear, myMonthMinus1, 16), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["16"] },
                // { x: new Date(myYear, myMonthMinus1, 17), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["17"] },
                // { x: new Date(myYear, myMonthMinus1, 18), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["18"] },
                // { x: new Date(myYear, myMonthMinus1, 19), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["19"] },
                // { x: new Date(myYear, myMonthMinus1, 20), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["20"] },
                // { x: new Date(myYear, myMonthMinus1, 21), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["21"] },
                // { x: new Date(myYear, myMonthMinus1, 22), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["22"] },
                // { x: new Date(myYear, myMonthMinus1, 23), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["23"] },
                // { x: new Date(myYear, myMonthMinus1, 24), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["24"] },
                // { x: new Date(myYear, myMonthMinus1, 25), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["25"] },
                // { x: new Date(myYear, myMonthMinus1, 26), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["26"] },
                // { x: new Date(myYear, myMonthMinus1, 27), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["27"] },
                // { x: new Date(myYear, myMonthMinus1, 28), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["28"] },
                // { x: new Date(myYear, myMonthMinus1, 29), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["29"] },
                // { x: new Date(myYear, myMonthMinus1, 30), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["30"] },
                // { x: new Date(myYear, myMonthMinus1, 31), y: energyChartData[myYear.toString()][myMonthBefore.toString()]["31"] },

            ]
        }]
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
    