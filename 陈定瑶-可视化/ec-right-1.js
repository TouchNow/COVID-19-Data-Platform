var ec_right = echarts.init(document.getElementById('r1'),'light');

// 指定图表的配置项和数据
var ec_right_option = {
    title: {
        text: '全国现有确诊病例人数城市top10',
        textStyle: {
              fontWeight: "normal",
              color: "#fff",
              fontSize: 18,
        },
    },
    tooltip: {},
    legend: {
        left:'70%',
        data: ['现有确诊'],
        textStyle: {
                        fontWeight: 'normal',
                        color: '#FFFFFF',   //legend颜色
                        left:'30%'
                }
    },
    grid : {
        top : 40,    //距离容器上边界40像素
        bottom: 40   //距离容器下边界30像素
    },
     dataZoom: [
            {
                type: 'slider',//数据滑块
                start:0,//数据窗口范围的起始百分比,表示0%
                end:50,//数据窗口范围的结束百分比,表示100%坐标
                height : 15,//下滑块手柄的高度调节
                minSpan:8,    //5min
                // xAxisIndex:[0],//表示x轴折叠
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                bottom: '0 px'   //容器距页面底边距离
            },
            {
                type:'inside'//使鼠标在图表中时滚轮可用
            }
    ],
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋",'男装','女装','毛衣','裙子','西装'],
        axisLine:{
               lineStyle:{color:'#ffffff'}    // x轴坐标轴颜色
               },
        axisTick:{
                lineStyle:{color:'#ffffff'}    // x轴刻度的颜色
                },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#ffffff',  //更改坐标轴文字颜色
                 fontSize : 14     //更改坐标轴文字大小
            }
        },
    },
    yAxis: {
        axisLabel: {color: '#ffffff'},   // y轴字体颜色
        axisLine: {
            lineStyle: {color: '#ffffff'}    // y轴坐标轴颜色
        },
        axisTick: {
            lineStyle: {color: '#ffffff'}    // y轴刻度的颜色
        },
        splitLine: {    //网格线
            lineStyle: {
                type: 'dashed'    //设置网格线类型 dotted：虚线   solid:实线
            },
            show: true //隐藏或显示
        },
    },
    series: [{
        name: '现有确诊',
        type: 'bar',
        data: [5, 20, 36, 10, 10,30,50,90,50,30]
    }]
};

// 使用刚指定的配置项和数据显示图表。
ec_right.setOption(ec_right_option);