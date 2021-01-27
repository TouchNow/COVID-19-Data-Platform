from flask import Flask, render_template, request, jsonify
import time, json
import get_data
import predict

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('main.html')


@app.route('/c1', methods=["get", "post"])
def get_c1_data():
    return jsonify(get_data.get_c1_data())


# 获取最近一天我国各省累计确诊病例
@app.route("/c2", methods=["get", "post"])
def get_c2_data():
    return jsonify(get_data.get_c2_data())


@app.route("/r1", methods=["get", "post"])
def get_r1_data():
    return jsonify({"data": get_data.get_r1_data()})

@app.route("/r2",methods=["get","post"])
def get_r2_data(): 
    return  jsonify({"data": predict.predict()})

@app.route("/l1",methods=["get","post"])
def get_l1_data():
    return jsonify({"data":get_data.get_l1_data()})

@app.route("/l2",methods=["get","post"])
def get_l2_data():
    return jsonify({"data":get_data.get_l2_data()})

@app.route("/province",methods=["get","post"])
def get_province_data():
    return jsonify({"data":get_data.get_province_data()})


@app.route("/time")
def get_time():
    time_str = time.strftime("%Y{}%m{}%d{}  %X")
    return time_str.format("年", "月", "日")


@app.route('/test')
def test_echarts():
    return render_template('test_ajax.html')


@app.route('/ajax', methods=["get", "post"])
def test_ajax():
    name = request.values.get('name')
    score = request.values.get('score')
    print(f"name={name},score={score}")
    return "10000"


if __name__ == '__main__':
    app.jinja_env.auto_reload = True
    app.run(debug=True)
    app.run(
        host='0.0.0.0',
        port=4000,
        debug=True
    )
