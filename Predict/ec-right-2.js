var ec_right_2 = echarts.init(document.getElementById('r2'), 'light');


var data = [48620000.4, 52940000.7, 59340000.5, 71710000.0, 89640000.4];

var data2 = [48620000, 52940000, 59340000, 71710000, 896400000];
// 指定图表的配置项和数据
var ec_right2_option = {
    title: {
        text: '疫情趋势预测图',
        top: 5,
        textStyle: {
            fontWeight: "normal",
            color: "#fff",
            fontSize: 18,
        }
    },
    tooltip: {
        trigger: 'axis',
    },

    grid: {
        top: 40, //距离容器上边界40像素
        bottom: 40, //距离容器下边界30像素
        containLabel: true
    },
    toolbox: {
        // feature: {
        //     saveAsImage: {}
        // }
    },

    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: { color: '#ffffff' } // x轴坐标轴颜色
        },
        axisTick: {
            lineStyle: { color: '#ffffff' } // x轴刻度的颜色
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#ffffff', //更改坐标轴文字颜色
                fontSize: 14 //更改坐标轴文字大小
            }
        },
        data: ['20200113', '20200415', '20200713', '20201023'],
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    },

    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#ffffff', // y轴字体颜色
            fontSize: 8
        },
        axisLine: {
            lineStyle: { color: '#ffffff' } // y轴坐标轴颜色
        },
        axisTick: {
            lineStyle: { color: '#ffffff' } // y轴刻度的颜色
        },
        splitLine: { //网格线
            lineStyle: {
                type: 'dashed' //设置网格线类型 dotted：虚线   solid:实线
            },
            show: true //隐藏或显示
        },
    },

    dataZoom: [{
            type: 'slider', //数据滑块
            start: 0, //数据窗口范围的起始百分比,表示0%
            end: 100, //数据窗口范围的结束百分比,表示100%坐标
            height: 15, //下滑块手柄的高度调节
            minSpan: 8, //5min
            // xAxisIndex:[0],//表示x轴折叠
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            bottom: '0 px' //容器距页面底边距离
        },
        {
            type: 'inside' //使鼠标在图表中时滚轮可用
        }
    ],
    legend: {
        left: '30%',
        top: 8,
        data: ['美国', '印度', '巴西', '俄罗斯'],
        icon: 'rectangle',
        textStyle: {
            fontWeight: 'normal',
            color: '#FFFFFF', //legend颜色
            left: '30%'
        }
    },

    series: [{
        name: '美国真实数据',
        type: 'scatter',
        symbolSize: 10,
        emphasis: {
            label: {
                show: true,
                position: 'left',
                color: 'blue',
                fontSize: 10
            }
        },
        data: data
    }, {
        name: '美国',
        type: 'line',
        showSymbol: false,
        smooth: true,
        data: data2,
        color: '#4CA3DC',
        markPoint: {
            itemStyle: {
                color: 'transparent'
            },
            label: {
                show: true,
                position: 'left',
                color: '#333',
                fontSize: 14
            },
        }
    }, {
        name: '印度真实数据',
        type: 'scatter',
        symbolSize: 10,
        emphasis: {
            label: {
                show: true,
                position: 'left',
                color: 'blue',
                fontSize: 10
            }
        },
        data: []
    }, {
        name: '印度',
        type: 'line',
        showSymbol: false,
        smooth: true,
        data: [],
        color: '#7AE0E4',
        markPoint: {
            itemStyle: {
                color: 'transparent'
            },
            label: {
                show: true,
                position: 'left',
                color: '#333',
                fontSize: 14
            },
        }
    }, {
        name: '巴西真实数据',
        type: 'scatter',
        symbolSize: 10,
        emphasis: {
            label: {
                show: true,
                position: 'left',
                color: 'blue',
                fontSize: 10
            }
        },
        data: []
    }, {
        name: '巴西',
        type: 'line',
        showSymbol: false,
        smooth: true,
        data: [],
        color: '#FBDA50',
        markPoint: {
            itemStyle: {
                color: 'transparent'
            },
            label: {
                show: true,
                position: 'left',
                color: '#333',
                fontSize: 14
            },
        }
    }, {
        name: '俄罗斯真实数据',
        type: 'scatter',
        symbolSize: 10,
        emphasis: {
            label: {
                show: true,
                position: 'left',
                color: 'blue',
                fontSize: 10
            }
        },
        data: []
    }, {
        name: '俄罗斯',
        type: 'line',
        showSymbol: false,
        smooth: true,
        color: '#F89E7C',
        data: [],
        markPoint: {
            itemStyle: {
                color: 'transparent'
            },
            label: {
                show: true,
                position: 'left',
                color: '#333',
                fontSize: 14
            },
        }
    }]
};


// 使用刚指定的配置项和数据显示图表。
ec_right_2.setOption(ec_right2_option);