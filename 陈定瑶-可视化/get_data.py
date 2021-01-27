import json
import time
from datetime import datetime, timedelta
import datetime
from datetime import date

def get_c1_data():
    with open('data/last_day_corona_virus.json', encoding='utf-8') as fp:
        last_day_corona_virus = json.load(fp)
    currentConfirmedCount = 0
    confirmedCount = 0
    curedCount = 0
    deadCount = 0
    result = dict.fromkeys(("china", "world"), )
    result["china"] = dict.fromkeys(("currentConfirmedCount", "confirmedCount", "curedCount", "deadCount"), )
    result["world"] = dict.fromkeys(("currentConfirmedCount", "confirmedCount", "curedCount", "deadCount"), )
    for index in last_day_corona_virus:
        currentConfirmedCount += int(index["currentConfirmedCount"])
        confirmedCount += int(index["confirmedCount"])
        curedCount += int(index["curedCount"])
        deadCount += int(index["deadCount"])
        if index['provinceName'] == '中国':
            result["china"]["currentConfirmedCount"] = index["currentConfirmedCount"]
            result["china"]["confirmedCount"] = index["confirmedCount"]
            result["china"]["curedCount"] = index["curedCount"]
            result["china"]["deadCount"] = index["deadCount"]
    result["world"]["currentConfirmedCount"] = str(currentConfirmedCount)
    result["world"]["confirmedCount"] = str(confirmedCount)
    result["world"]["curedCount"] = str(curedCount)
    result["world"]["deadCount"] = str(deadCount)
    return result


def get_c2_data():
    result = dict.fromkeys(("china", "world"), )
    index = ["currentConfirmedCount", "confirmedCount", "curedCount", "deadCount"]
    result["china"] = dict.fromkeys(index, )
    result["world"] = dict.fromkeys(index, )

    # 先处理中国的数据，获理中国各省index中4个类型的数据，存放在result["china"]中
    with open('data/crawl_last_day_VirusOfChina.json', encoding='utf-8') as fp:
        last_day_china_virus = json.load(fp)
    item = []
    for province in last_day_china_virus:
        for i in range(len(index)):
            element = {'name': province['provinceShortName'], 'value': province[index[i]]}
            item.append([])
            item[i].append(element)
    for i in range(len(index)):
        result["china"][index[i]] = item[i]

    # 处理全球的数据，获理全球各个国家index中4个类型的数据，存放在result["world"]中
    with open("data/last_day_corona_virus.json", encoding='utf-8') as fp:
        last_day_world_virus = json.load(fp)
    for country in last_day_world_virus:
        for i in range(len(index)):
            element = {'name': country['provinceName'], 'value': country[index[i]]}
            item[i].append(element)
    for i in range(len(index)):
        result["world"][index[i]] = item[i]
    return result


def get_r1_data():
    each_china_city_data = []
    result = []
    dataX = []
    dataY = []
    with open('data/crawl_last_day_VirusOfChina.json', encoding='utf-8') as fp:
        last_day_china_virus = json.load(fp)
    for province in last_day_china_virus:
        item = {}
        if (province['cities'] == [] or province['provinceShortName'] == '北京' or province['provinceShortName'] == '上海'
                or province['provinceShortName'] == '天津' or province['provinceShortName'] == '重庆'):
            item['name'] = province['provinceShortName']
            item['value'] = province['currentConfirmedCount']
            each_china_city_data.append(item)
        else:
            for city in province['cities']:
                if city['cityName'] == '境外输入' or city['cityName'] == '境外输入人员':
                    item['name'] = province['provinceShortName']
                    item['value'] = city['currentConfirmedCount']
                else:
                    item['name'] = city['cityName']
                    item['value'] = city['currentConfirmedCount']
                each_china_city_data.append(item)
                item = {}
    each_china_city_data.sort(key=lambda x: x['value'], reverse=True)
    top10 = each_china_city_data[:10]
    for content in top10:
        dataX.append(content['name'])
        dataY.append(content['value'])
    result.append(dataX)
    result.append(dataY)
    return result
    
def get_l1_data():
    with open(r'./data/corona_virus.json', 'rb') as f:
        data = json.load(f)
    #获取最新一天数据
    with open(r'./data/last_day_corona_virus.json', encoding='utf-8') as w:
        data_last = json.load(w)
    for element in data_last:
        if element['provinceName'] =='美国':
            us_count = element['confirmedCount']
        if element['provinceName'] == '印度':
            in_count = element['confirmedCount']
        if element['provinceName'] == '巴西':
            br_count = element['confirmedCount']
        if element['provinceName'] == '俄罗斯':
            ru_count = element['confirmedCount']
    #获取之前的数据
    date = []
    for element in data:
        if element['dateId'] not in date:
            date.append(element['dateId'])
    date.sort()
    start=str(date[1])    #获取起始时间
    end=str(date[-1])     #获取终止时间
    countus = []
    countin = []
    countbr = []
    countru = []
    total_list=[]
    date=get_date_list('20200320', end)
    for j in range(len(date)):
        for n in range(len(data)):
            if data[n]['dateId'] == int(date[j]):       #20201015 网站数据缺失
                if data[n]['provinceName'] == '美国':    #20201015  7961931
                    countus.append(data[n]['confirmedCount'])
                elif data[n]['provinceName'] == '印度':  #20201015  7309389
                    countin.append(data[n]['confirmedCount'])
                elif data[n]['provinceName'] == '巴西':  #20201015  5170863
                    countbr.append(data[n]['confirmedCount'])
                elif data[n]['provinceName'] == '俄罗斯':  #20201015  1350409
                    countru.append(data[n]['confirmedCount'])
    countus.append(7961931)
    countin.append(7309389)
    countbr.append(5170863)
    countru.append(1350409)
    countus.append(us_count)
    countin.append(in_count)
    countbr.append(br_count)
    countru.append(ru_count)
    countus.sort()
    countin.sort()
    countbr.sort()
    countru.sort()
    end=int(end)
    end+=1
    date.append(end)
    total_list.append(countus)
    total_list.append(countin)
    total_list.append(countbr)
    total_list.append(countru)
    result=[]
    result.append(date)
    result.append(total_list)
    print(len(countus))
    print(len(countin))
    print(len(countbr))
    print(len(countru))
    print(len(date))
    return result

def get_l2_data():
    with open(r'./data/last_day_corona_virus.json', encoding='utf-8') as f:
        data = json.load(f)
    dead_list=[]
    for element in data:
        data_dict={}
        data_dict['provinceName']=element['provinceName']
        data_dict['deadCount'] = element['deadCount']
        dead_list.append(data_dict)
    dead_list=sorted(dead_list, key=lambda keys: keys['deadCount'],reverse=True)
    country=[]
    deadcount=[]
    for i in range(20):
        country.append(dead_list[i]['provinceName'])
        deadcount.append(dead_list[i]['deadCount'])
    result=[]
    result.append(country[::-1])
    result.append(deadcount[::-1])
    return result


def get_date_list(begin_date, end_date):
    dates = []
    # Get the time tuple : dt
    dt = datetime.datetime.strptime(begin_date, "%Y%m%d")
    date = begin_date[:]
    while date <= end_date:
        dates.append(date)
        dt += timedelta(days=1)
        date = dt.strftime("%Y%m%d")
    return dates

def get_province_data():
    with open('data/crawl_last_day_VirusOfChina.json', encoding='utf-8') as fp:
        last_day_china_virus = json.load(fp) 
    result = []
    index = ["currentConfirmedCount", "confirmedCount", "curedCount", "deadCount"]
    for i in index:
        result.append({i:[]})
    for province in last_day_china_virus:
        provinceShortName = province["provinceShortName"]
        for i in range(len(result)):
            result[i][index[i]].append({provinceShortName:[]})
        city = province["cities"] 
        for city_data in city:
            for j in range(len(result)):
                cityName = city_data["cityName"]
                if(cityName[-1] != '市' and cityName[-1] != '区' and cityName[-1] != '县' and cityName[-1] != '盟' and cityName != '境外输入'):
                    cityName += '市'
                result[j][index[j]][-1][provinceShortName].append({'name':cityName,'value':city_data[index[j]]})
    return result



if __name__ == "__main__":
    data = get_c2_data()
    print(data)


