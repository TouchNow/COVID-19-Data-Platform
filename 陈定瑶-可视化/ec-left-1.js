var ec_left = echarts.init(document.getElementById('l1'), 'light');

// 指定图表的配置项和数据
var ec_left_option = {
    title: {
        text: '世界各地累计确诊数TOP4折线图',
        textStyle: {
            fontWeight: "normal",
            color: "#fff",
            fontSize: 18,
        },
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: [{
        x: '320px',
        y: '10px',
        data: ['美国', '印度'],
        icon: 'rectangle',
        textStyle: {
            fontWeight: 'normal',
            color: '#FFFFFF', //legend颜色
            left: '30%'
        },
    }, {
        x: '320px',
        y: '30px',
        data: ['巴西', '俄罗斯'],
        icon: 'rectangle',
        textStyle: {
            fontWeight: 'normal',
            color: '#FFFFFF', //legend颜色
            left: '30%'
        },
    }, ],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        // feature: {
        //     saveAsImage: {}
        // }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [],
        axisLine: {
            lineStyle: {
                color: '#FFFFFF',
                width: 2,
            }
        }
    },
    yAxis: [{
        type: 'value',
        //设置轴线的属性
        axisLine: {
            lineStyle: {
                color: '#FFFFFF',
                width: 2,
            }
        },
        axisLabel: {
            color: '#ffffff', // y轴字体颜色
            fontSize: 8
        },
    }],


    dataZoom: [{
            type: 'inside',
            start: 0,
            end: 100,
            height: 5, //下滑块手柄的高度调节
        },
        {
            start: 0,
            end: 100,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            height: '15px',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0,0,0,0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }
    ],
    series: [{
            name: '美国',
            type: 'line',
            data: [],
            color: '#4CA3DC'
        },
        {
            name: '印度',
            type: 'line',
            data: [],
            color: '#7AE0E4'
        },
        {
            name: '巴西',
            type: 'line',
            data: [],
            color: '#FBDA50'
        },
        {
            name: '俄罗斯',
            type: 'line',
            data: [],
            color: '#F89E7C'
        },

    ]
};


// 使用刚指定的配置项和数据显示图表。
ec_left.setOption(ec_left_option);