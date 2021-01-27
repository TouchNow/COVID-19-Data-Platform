function get_time() {
    $.ajax({
        url: "/time",
        timeout: 10000, //超时时间设置为10秒；
        success: function(data) {
            $("#time").html(data)
        },
        error: function(xhr, type, errorThrown) {

        }
    });
}

function get_c1_data(choice) {
    $.ajax({
        url: "/c1",
        success: function(data) {
            $(".num h1").eq(0).text(data[choice]['currentConfirmedCount']);
            $(".num h1").eq(1).text(data[choice]['confirmedCount']);
            $(".num h1").eq(2).text(data[choice]['curedCount']);
            $(".num h1").eq(3).text(data[choice]['deadCount']);
        },
        error: function(xhr, type, errorThrown) {

        }
    });
}

function get_c2_data(dataType) {
    $.ajax({
        url: "/c2",
        success: function(data) {
            ec_center_china_option.series[0].mapType = 'china'
            ec_center_china_option.series[0].data = data['china'][dataType]
            ec_center_china.setOption(ec_center_china_option)
            ec_center_world_option.series[0].data = data['world'][dataType]
            ec_center_world.setOption(ec_center_world_option)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}

function get_r1_data() {
    $.ajax({
        url: "/r1",
        success: function(data) {
            ec_right_option.xAxis.data = data.data[0]
            ec_right_option.series[0].data = data.data[1]
            ec_right.setOption(ec_right_option)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}

function get_r2_data() {
    $.ajax({
        url: "/r2",
        success: function(data) {
            ec_right2_option.series[0].data = data.data[0][0]
            ec_right2_option.series[1].data = data.data[0][1]
            ec_right2_option.series[2].data = data.data[1][0]
            ec_right2_option.series[3].data = data.data[1][1]
            ec_right2_option.series[4].data = data.data[3][0]
            ec_right2_option.series[5].data = data.data[3][1]
            ec_right2_option.series[6].data = data.data[2][0]
            ec_right2_option.series[7].data = data.data[2][1]
            ec_right2_option.xAxis.data = data.data[3][2]
            ec_right_2.setOption(ec_right2_option)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}

function get_l1_data() {
    $.ajax({
        url: "/l1",
        success: function(data) {
            ec_left_option.xAxis.data = data.data[0]
            ec_left_option.series[0].data = data.data[1][0]
            ec_left_option.series[1].data = data.data[1][1]
            ec_left_option.series[2].data = data.data[1][2]
            ec_left_option.series[3].data = data.data[1][3]
            ec_left.setOption(ec_left_option)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}

function get_l2_data() {
    $.ajax({
        url: "/l2",
        success: function(data) {
            term = data.data[0]
            ec_left_option_2.legend[0].data = term.slice(0, 10)
            ec_left_option_2.legend[1].data = term.slice(10, 21)
            for (var i = 0; i < 20; i++) {
                ec_left_option_2.series[0].data[i]['value'] = data.data[1][i];
                ec_left_option_2.series[0].data[i]['name'] = data.data[0][i];

            }
            ec_left_2.setOption(ec_left_option_2)
        },
        error: function(xhr, type, errorThrown) {

        }
    })
}


function changToWorldMap() {
    var btn1 = document.getElementById("button-center");
    let c2ChinaMap = document.getElementById("c2").getElementsByClassName("c2ChinaMap")[0];
    let c2WorldMap = document.getElementById("c2").getElementsByClassName("c2WorldMap")[0];
    let l1ChinaData = document.getElementById("l1").getElementsByClassName("l1ChinaData")[0];
    let l1WorldData = document.getElementById("l1").getElementsByClassName("l1WorldData")[0];
    // console.log(c2ChinaMap);
    let flag1 = true;
    btn1.onclick = function() {
        ec_center_world_option.series[0].name = "当前确诊";
        ec_center_china_option.series[0].name = "当前确诊";
        get_c2_data("currentConfirmedCount");
        if (flag1) {
            this.value = "全球";
            c2ChinaMap.style.display = 'none';
            c2WorldMap.style.display = 'block';
            // l1ChinaData.style.display = 'none';
            // l1WorldData.style.display = 'block';
            get_c1_data("world");

            flag1 = false;
        } else {
            this.value = "全国";
            c2WorldMap.style.display = 'none';
            c2ChinaMap.style.display = 'block';
            // l1ChinaData.style.display = 'none';
            // l1WorldData.style.display = 'block';
            get_c1_data("china");
            flag1 = true;
        }
    }
}


function switchShowData() {
    let btns = document.getElementById("c1").querySelectorAll("button");
    let index = ["currentConfirmedCount", "confirmedCount", "curedCount", "deadCount"];
    let show = ["当前确诊", "累计确诊", "累计治愈", "累计死亡"];
    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = function() {
            ec_center_world_option.series[0].name = show[i];
            ec_center_china_option.series[0].name = show[i];
            get_c2_data(index[i]);
        }
    }
}

function ChangeMapToProvince() {
    let selected_province = 'china';
    let index = ["currentConfirmedCount", "confirmedCount", "curedCount", "deadCount"];
    let show = ["当前确诊", "累计确诊", "累计治愈", "累计死亡"];
    let opt = ec_center_china_option.series[0].name;
    let i = 0;
    ec_center_china.on('click', function(params) {
        opt = ec_center_china_option.series[0].name;
        for (i = 0; i < 4; i++) {
            if (opt == show[i]) {
                opt = index[i];
                break;
            }
        };
        if (selected_province == 'china') {
            selected_province = params.name;
            ec_center_china_option.series[0].mapType = selected_province;
            ec_center_china.setOption(ec_center_china_option);
            $.ajax({
                url: "/province",
                success: function(data) {
                    let tmp = data.data[i][opt];
                    for (let j = 0; j < tmp.length; j++) {
                        if (selected_province in tmp[j]) {
                            ec_center_china_option.series[0].data = tmp[j][selected_province];
                            break;
                        }
                    }
                    ec_center_china.setOption(ec_center_china_option)
                },
                error: function(xhr, type, errorThrown) {

                }
            })
        } else {
            get_c2_data(opt);
            selected_province = 'china';
        }
    });
}


setInterval(get_time, 1000)
get_c1_data("china") //初始化显示中国
get_c2_data("currentConfirmedCount") //初始化显示当前确诊病例情况
get_r1_data()
get_r2_data()
get_l1_data()
get_l2_data()
changToWorldMap()
    // changToWorldData()
switchShowData()
ChangeMapToProvince()