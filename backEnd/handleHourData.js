console.log("../backEnd/handleHourData called");
var moment = require('moment');

function prevDataToCurrentData_0()
{   
    var nowMils = Date.now();
    var pathPrevHour = "PE00000000000" + moment(nowMils - 60*60*1000).format("/YYYY/M/D/H");
    var pathHour = "PE00000000000" + moment(nowMils).format("/YYYY/M/D/H");

    var prevValue;
    var prevPrevValue;
    database_Elec_TD.ref(pathPrevHour).once("value").then(function(snapshot)
    {
        prevValue = snapshot.val().Energy*1;
        console.log(snapshot.val());
        database_Elec_TD.ref(pathHour).set(snapshot.val(), function(error) {});

        // handle Chart Data
        var pathPrevPrevHour = "PE00000000000" + moment(nowMils - 2*60*60*1000).format("/YYYY/M/D/H");
        database_Elec_TD.ref(pathPrevPrevHour).once("value").then(function(snapshot)
        {
            prevPrevValue = snapshot.val().Energy*1;
            console.log(snapshot.val());
            var result = prevValue - prevPrevValue;
            console.log(result);
            // var pathChartData = "PE00000000000/energyChartData" + moment(nowMils).format("/YYYY/M/D/H");
            var pathChartData = "Total/energyChartData/pha1" + moment(nowMils).format("/YYYY/M/D/H");
            database_Elec_TD.ref(pathChartData).set(result, function(error) {});
        });
    });
}

function prevDataToCurrentData_1()
{   
    var nowMils = Date.now();
    var pathPrevHour = "PE00000000001" + moment(nowMils - 60*60*1000).format("/YYYY/M/D/H");
    var pathHour = "PE00000000001" + moment(nowMils).format("/YYYY/M/D/H");

    var prevValue;
    var prevPrevValue;
    database_Elec_TD.ref(pathPrevHour).once("value").then(function(snapshot)
    {
        prevValue = snapshot.val().Energy*1;
        console.log(snapshot.val());
        database_Elec_TD.ref(pathHour).set(snapshot.val(), function(error) {});

        // handle Chart Data
        var pathPrevPrevHour = "PE00000000001" + moment(nowMils - 2*60*60*1000).format("/YYYY/M/D/H");
        database_Elec_TD.ref(pathPrevPrevHour).once("value").then(function(snapshot)
        {
            prevPrevValue = snapshot.val().Energy*1;
            console.log(snapshot.val());
            var result = prevValue - prevPrevValue;
            console.log(result);
            // var pathChartData = "PE00000000000/energyChartData" + moment(nowMils).format("/YYYY/M/D/H");
            var pathChartData = "Total/energyChartData/pha2" + moment(nowMils).format("/YYYY/M/D/H");
            database_Elec_TD.ref(pathChartData).set(result, function(error) {});
        });
    });
}

function prevDataToCurrentData_2()
{   
    var nowMils = Date.now();
    var pathPrevHour = "PE00000000002" + moment(nowMils - 60*60*1000).format("/YYYY/M/D/H");
    var pathHour = "PE00000000002" + moment(nowMils).format("/YYYY/M/D/H");

    var prevValue;
    var prevPrevValue;
    database_Elec_TD.ref(pathPrevHour).once("value").then(function(snapshot)
    {
        prevValue = snapshot.val().Energy*1;
        console.log(snapshot.val());
        database_Elec_TD.ref(pathHour).set(snapshot.val(), function(error) {});

        // handle Chart Data
        var pathPrevPrevHour = "PE00000000002" + moment(nowMils - 2*60*60*1000).format("/YYYY/M/D/H");
        database_Elec_TD.ref(pathPrevPrevHour).once("value").then(function(snapshot)
        {
            prevPrevValue = snapshot.val().Energy*1;
            console.log(snapshot.val());
            var result = prevValue - prevPrevValue;
            console.log(result);
            // var pathChartData = "PE00000000000/energyChartData" + moment(nowMils).format("/YYYY/M/D/H");
            var pathChartData = "Total/energyChartData/pha3" + moment(nowMils).format("/YYYY/M/D/H");
            database_Elec_TD.ref(pathChartData).set(result, function(error) {});
        });
    });
}

function prevDataToCurrentData_3()
{   
    var nowMils = Date.now();
    var pathPrevHour = "PE00000000003" + moment(nowMils - 60*60*1000).format("/YYYY/M/D/H");
    var pathHour = "PE00000000003" + moment(nowMils).format("/YYYY/M/D/H");

    var prevValue;
    var prevPrevValue;
    database_Elec_GV.ref(pathPrevHour).once("value").then(function(snapshot)
    {
        prevValue = snapshot.val().Energy*1;
        console.log(snapshot.val());
        database_Elec_GV.ref(pathHour).set(snapshot.val(), function(error) {});

        // handle Chart Data
        var pathPrevPrevHour = "PE00000000003" + moment(nowMils - 2*60*60*1000).format("/YYYY/M/D/H");
        database_Elec_GV.ref(pathPrevPrevHour).once("value").then(function(snapshot)
        {
            prevPrevValue = snapshot.val().Energy*1;
            console.log(snapshot.val());
            var result = prevValue - prevPrevValue;
            console.log(result);
            // var pathChartData = "PE00000000000/energyChartData" + moment(nowMils).format("/YYYY/M/D/H");
            var pathChartData = "Total/energyChartData/pha1" + moment(nowMils).format("/YYYY/M/D/H");
            database_Elec_GV.ref(pathChartData).set(result, function(error) {});
        });
    });
}

doSomething();
function doSomething() {
	console.log("On O'Clock");
    var d = new Date(),
        h = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1, 0, 0, 0),
        e = h - d;
    if (e > 100) { // some arbitrary time period
		console.log("e > 100");
        setTimeout(doSomething, e);
    }
    prevDataToCurrentData_0();
    prevDataToCurrentData_1();
    prevDataToCurrentData_2();
    prevDataToCurrentData_3();
	console.log("Done O'Clock");
}
