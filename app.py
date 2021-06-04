import json
from json.decoder import JSONDecodeError
from typing import Text, get_args
from flask import Flask, render_template, url_for, request, jsonify, redirect

# initialize app
app = Flask(__name__)

# Homepage of app
@app.route("/")
def index():
    return render_template('index.html')

# ---------- ROUTES --------------------------
@app.route("/service")
def new_chart():
    chart = request.args.get('chart')
    labels = request.args.getlist('labels')
    values = request.args.getlist('values')

    return render_template('service.html', values=values, labels=labels, chart=chart)

# run app
if __name__ == "__main__":
    app.run(debug=True)