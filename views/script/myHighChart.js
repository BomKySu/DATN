Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

Highcharts.chart('container_vol', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                var series1= this.series[1];
                var series2 = this.series[2];
                console.log("Before socket.on()");
                function myLoad(data) 
                // socket.on('aggregator-message', function (data) 
                {
                    if(typeof(data) !== "object"){
                        data = JSON.parse(data);
                    }
                    switch (data.phase){
                        case "1":
                            var x = (new Date()).getTime(), // current time
                                y = parseFloat(data.voltage);
                            break;
                        case "2":
                            var x1 = (new Date()).getTime(), // current time
                                y1 = parseFloat(data.voltage);
                            break;
                        case "3":
                            var x2 = (new Date()).getTime(), // current time
                                y2 = parseFloat(data.voltage);
                            break;
                    }

                    series.addPoint([x, 12], true, true);
                    series1.addPoint([x1, 13], true, true);
                    series2.addPoint([x2, 15], true, true);
                }
                // )

            }
        }
    },
    title: {
        text: 'Live voltage data'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Voltage',
            style: {
                color:'#ff0000'
            }
        },
        labels:{
            format: '{value} V'
        },
        plotLines: [{
            value: 0,
            width: 1,
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d / %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2) + ' V';
        },
        valueSuffix : ' V'
    },
    legend: {
        enabled: true
    },
    exporting: {
        enabled: true
    },
    series: [{
        name: 'Phase 1',
        color: '#ff0000',
        type:'spline',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -999; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: parseFloat(data.voltage)
                });
            }
            return data;
        }())
    },
        {
            name: 'Phase 2',
            color: '#0040ff',
            type:'spline',

            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -999; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: parseFloat(data.voltage)
                    });
                }
                return data;
            }())
        },
        {
            name: 'Phase 3',
            color: '#40ff00',
            type:'spline',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -999; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: parseFloat(data.voltage)
                    });
                }
                return data;
            }())
        }]
});

myLoop();    // có cái này mới chạy loop
function myLoop()  
{
setTimeout(function () 
{
    console.log("In myLoop()");
    getInfo();
    getElec();
    myLoad({});

    myLoop(); //// LOSS RESOUCE FIREBASE DOWNLOAD
}, 1000)
};  
