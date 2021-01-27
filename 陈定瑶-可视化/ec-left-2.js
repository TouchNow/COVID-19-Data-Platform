var ec_left_2 = echarts.init(document.getElementById('l2'),'light');

var ec_left_option_2= {
            color: ['#57868c', '#48a698', '#479c7f', '#48af54', '#53b440', '#67b52d', '#8cc13f', '#bbd337', '#d2b130', '#da9c2d', '#dc9e31', '#e59524', '#e58b3d', '#e7741b', '#d15122', '#ce4018', '#d93824', '#c71b1b', '#bc1540', '#a71a4f']
,
            tooltip: {
                trigger: 'item',
                formatter: "{b}  <br/>{c}例"
            },
            legend: [{
                left: '0%',
                top:'8%',
                orient: 'vertical',
                itemHeight: 18,
                type: "scroll",
                data: ["建设路街道", "长兴路街道", "长社路街道", "金桥路街道", "和尚桥镇", "坡胡镇", "后河镇", "石固镇", "老城镇", "南席镇", "大周镇", "董村镇", "古桥镇", "石象镇", "佛耳湖镇", "增福镇"],
                icon: 'circle',
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                }
            },{
                left: '20%',
                top:'8%',
                orient: 'vertical',
                itemHeight: 18,
                type: "scroll",
                data: ["建设路街道", "长兴路街道", "长社路街道", "金桥路街道", "和尚桥镇"],
                icon: 'circle',
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                }
            }],
            calculable: true,
            graphic:{            //echarts饼图中间放字
                type:'text',
                right:'10%',    //55
                top:'10%',    //60
                z:200,
			//  zlevel:10,
                style:{
                    text: [
                            '死亡数'
                            +'\n'+'\n'+'TOP20'
                        ],
                    textAlign:'center',
                    fill:'#FFF',
                    font:' 30px 微软雅黑 '
                }
                },
            series: [{
                name: '街道',
                type: 'pie',
                //startAngle: 0,
                //clockwise: false,
                radius: ["15%", "250%"],
                center: ['55%', '60%'],
                bottom:'0',
                left:'15%',
                roseType: 'area',
                top:'40%',
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}{c}例',
                    rotate:true,
                    textStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#FAFAFA',
                        fontSize: 6
                    },
                },
                labelLine: {
                    show: true,
                    length: -180,
                    length2: 20,
                },
                data: [
                    {value: 1, name: '建设路街道',label: {show: true, position: 'outside', rotate:false, textStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#FFFFFF',
                        fontSize: 8
                    },
                }},
                    {value: 2, name: '长兴路街道',label: {show: true, position: 'outside', rotate:false, textStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#FFFFFF',
                        fontSize: 8
                    },
                }},
                    {value: 3, name: '长社路街道',label: {show: true, position: 'outside', rotate:false, textStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#FFFFFF',
                        fontSize: 8
                    },
                }},
                    {value: 4, name: '金桥路街道',label: {show: true, position: 'outside', rotate:false, textStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#FFFFFF',
                        fontSize: 8
                    },
                }},
                    {value: 5, name: '和尚桥镇',label: {show: true, position: 'outside', rotate:false, textStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#FFFFFF',
                        fontSize: 8
                    },
                }},
                    {value: 6, name: "坡胡镇",label: {show: true, position: 'outside', rotate:false, textStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#FFFFFF',
                        fontSize: 8
                    },
                }},
                    {value: 7, name: "后河镇",label: {show: true, position: 'outside', rotate:false, textStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#FFFFFF',
                        fontSize: 8
                    },
                }},
                    {value: 8, name: "老城镇",label: {show: true, position: 'outside', rotate:false, textStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#FFFFFF',
                        fontSize: 8
                    },
                }},
                    {value: 9, name: "石固镇",label: {show: true, position: 'outside', rotate:false, textStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#FFFFFF',
                        fontSize: 8
                    },
                }},
                    {value: 10, name: "南席镇",label: {show: true, position: 'outside', rotate:false, textStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Microsoft YaHei',
                        color: '#FFFFFF',
                        fontSize: 8
                    },
                }},
                    {value: 11, name: "大周镇"},
                    {value: 12, name: "董村镇"},
                    {value: 13, name: "古桥镇"},
                    {value: 14, name: "石象镇"},
                    {value: 15, name: "佛耳湖镇"},
                    {value: 16, name: "增福镇"},
                    {value: 17, name: "qwe",label: {show: true, textStyle: {
                        color: '#FFFFFF',
                        fontSize: 12
                    },
                }},
                    {value: 18, name: "asd",label: {show: true, textStyle: {
                        color: '#FFFFFF',
                        fontSize: 14
                    },
                }},
                    {value: 19, name: "zxc",label: {show: true, textStyle: {
                        color: '#FFFFFF',
                        fontSize: 20
                    },
                }},
                    {value: 20, name: "ert",label: {show: true, textStyle: {
                        color: '#FFFFFF',
                        fontSize: 24
                    },
                }},
                ],
            }]
        };

ec_left_2.setOption(ec_left_option_2);