import requests
from bs4 import BeautifulSoup
import re
import json
from tqdm import tqdm   #显示进度条

home_url = 'https://ncov.dxy.cn/ncovh5/view/pneumonia'  #丁香园疫情数据的主页
headers = {'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36'}

class CornaVirusSpider(object):
    def __init__(self):      #默订设置访问的主页为丁香园疫情数据
        self.home_url = home_url

    def get_content_from_url(self,url):   #根据给定的url,访问所需要的数据
        response = requests.get(url, headers = headers)
        return response.content.decode('utf-8')

    def parse_home_page(self,home_page):   #从疫情数据中，获取解析扣的python数据
        soup = BeautifulSoup(home_page, 'lxml')
        text = soup.find(id="getListByCountryTypeService2true").string
        json_str = re.findall(r'\[.+\]', text)[0]
        return json.loads(json_str)

    def save_data(self,data,path):   #将python类型的data数据，以json格式保存在path路径中
        with open(path,'w',encoding='utf-8') as fp:
            json.dump(data,fp,ensure_ascii = False)

    def crawl_last_day_corona_virus(self):  #采集最近一天的各国疫情数据
        home_page = self.get_content_from_url(self.home_url)
        last_day_corona_virus = self.parse_home_page(home_page)
        self.save_data(last_day_corona_virus,'data/last_day_corona_virus.json')

    def crawl_corona_virus(self):  #采集1月23日以来的各国数据并写入last_day_corona_virus.json
        self.crawl_last_day_corona_virus()
        with open('data\last_day_corona_virus.json',encoding='utf-8') as fp:
            last_day_corona_virus = json.load(fp)
        corona_virus =[] #定义一个列表，用于存储各国从1月23日以来的疫情数据
        for country in tqdm(last_day_corona_virus,'采集1月23日以来的各国疫情信息'):   #tqdm用进度条显示
            statistics_data_url = country['statisticsData']
            statistics_data_json_str = self.get_content_from_url(statistics_data_url)
            statistics_data = json.loads(statistics_data_json_str)['data']
            for one_day in statistics_data:
                one_day['provinceName'] = country['provinceName']
                one_day['countryShortCode'] = country['countryShortCode']
            corona_virus.extend(statistics_data)
        self.save_data(corona_virus,'data/corona_virus.json')

    def crawl_last_day_VirusOfChina(self):   #采集最近一天中国各省的疫情数据并写入crawl_last_day_VirusOfChina.json
        home_page = self.get_content_from_url(self.home_url)
        soup = BeautifulSoup(home_page, 'lxml')
        text = soup.find(id = "getAreaStat").string
        json_str = re.findall(r'\[.+\]', text)[0]
        self.save_data(json.loads(json_str),'data/crawl_last_day_VirusOfChina.json')

    def crawl_corona_VirusOfChina(self):  #采集1月23日以来中国各省的疫情数据并写入crawl_corona_VirusOfChina.json
        self.crawl_last_day_VirusOfChina()
        with open('data/crawl_last_day_VirusOfChina.json',encoding='utf-8') as fp:
            crawl_last_day_VirusOfChina = json.load(fp)
        crawl_corona_VirusOfChina = []
        for province in tqdm(crawl_last_day_VirusOfChina,'采集1月20日以来全国各省疫情信息'):
            statisstics_data_url = self.get_content_from_url(province['statisticsData'])
            statisstics_data = json.loads(statisstics_data_url)['data']
            for each in statisstics_data:    #经检查，statisstics_data中没有省份信息，故加上
                each['province'] = province['provinceName']
            crawl_corona_VirusOfChina.extend(statisstics_data)  #加上省份信息后，将数据extend到crawl_corona_VirusOfChina中
        #循环完毕后，所有省份的数据均存放在了crawl_corona_VirusOfChina中，以python数据格式dict存放。此时再以json格式保存数据文件。
        self.save_data(crawl_corona_VirusOfChina,'data/crawl_corona_VirusOfChina.json')

if __name__ == '__main__':
    spider = CornaVirusSpider()
    spider.crawl_corona_virus()
    spider.crawl_corona_VirusOfChina()
    print("数据爬取成功")