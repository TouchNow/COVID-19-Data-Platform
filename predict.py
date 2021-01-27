import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
import datetime

def predict():
    def logistic_increase_function(t, K, P0, r):
        t0 = 11
        # r 中国0.25 美国0.05 英国0.08 意大利0.08 德国0.09 韩国0.11 日本0.10
        r = s
        # t:time   t0:initial time    P0:initial_value    K:capacity  r:increase_rate
        exp_value = np.exp(r * (t - t0))
        return (K * exp_value * P0) / (K + (exp_value - 1) * P0)

    def country_predict(country):
        # 日期及感染人数
        n = "D:\myPythonProject\Virus_Flask1.1\data\corona_virus.csv"
        data = pd.read_csv(n, encoding='gbk')

        data = data[data['provinceName'] == country]
        date_list = list(data['dateId'])
        date_list = list(map(lambda x: str(x), date_list))

        data_time = []
        for i in range(len(date_list)-300,len(date_list)):
            data_time.append(str(date_list[i]))
        delta = datetime.timedelta(days=1)
        last_real_time = datetime.datetime.strptime(data_time[-1],'%Y%m%d')   
        for i in range(400):  #从当前时加400天生成新的时间列表        
            last_real_time += delta        #时间格式加一天
            time_str = last_real_time.strftime('%Y%m%d')  #转换为字符串格式
            data_time.append(time_str)   #将字符串转添加到列表

        confirm_list = list(data['confirmedCount'][len(date_list) - 300:])
        time_array = np.array(range(len(date_list) - 300, len(date_list)))
        long_time_array = np.array(range(len(date_list) - 300, len(date_list) + 400))
        confirm_array = np.array(confirm_list)

        # 用最小二乘法估计拟合,现有数据曲线拟合预测
        popt, pcov = curve_fit(logistic_increase_function, time_array, confirm_array)
        # popt里面是拟合系数,拟合后预测的P值
        P_predict = logistic_increase_function(long_time_array, popt[0], popt[1], popt[2])
        # print(P_predict)
        res = []
        data_real = []
        data_predict = []
        for i in range(len(time_array)):
            data_real.append(int(confirm_array[i]))
    # print(data_real)
        for j in range(len(long_time_array)):
            data_predict.append(int(P_predict[j]))
        #print(data_predict)
        res.append(data_real)
        res.append(data_predict)
        res.append(data_time)

        # plot1 = plt.plot(time_array, confirm_array, 's', label="confimed infected people number")
        # plot2 = plt.plot(long_time_array, P_predict, 'r', label='predict infected people number')
        # plt.xlabel('time', fontproperties='SimHei')
        # plt.ylabel('confimed infected people number', fontproperties='SimHei')
        # plt.title(s, fontproperties='SimHei')
        # plt.legend()
        # plt.show()

        return res

    country_r_dict = {"美国": 0.013, "印度": 0.03,"巴西": 0.0098, "俄罗斯": 0.011} 
    data = []
    for country,s in country_r_dict.items():
        data.append(country_predict(country))   
    return data

if __name__ == '__main__':
    print(len(predict()[0][2]))
    print(len(predict()[3][0]))
    print(len(predict()[3][1]))


