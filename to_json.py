import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit
import csv
import json

filename = 'data/corona_virus.json'
with open(filename,encoding='utf-8') as json_file:
    item_list = json.load(json_file)
csv_file = open("data/corona_virus.csv", "w", newline='')  # 转换后的文件名和文件类型
key_data = item_list[0].keys()
value_data = [item.values() for item in item_list]
# csv文件写入对象
csv_writer = csv.writer(csv_file)
# 先写入表头字段数据
csv_writer.writerow(key_data)
# 再写入表的值数据
csv_writer.writerows(value_data)
csv_file.close()
json_file.close()