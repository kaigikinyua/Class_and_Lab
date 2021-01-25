from flask import Flask
import flask
app=Flask(__name__)

@app.route("/")
def index():
	return "Your ip is {ip}".format(ip=flask.request.remote_addr)


if __name__=="__main__":
	app.debug=True
	app.run(host="0.0.0.0")
