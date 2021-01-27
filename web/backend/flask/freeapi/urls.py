from flask import Flask,render_template,jsonify,request
app=Flask(__name__)
#website
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/getdata/<genericdata>')
def getdata(genericdata):
    return render_template("index.html")

@app.route('/mydb/<action>')
def mydb(action):
    return render_template("index.html")

@app.route('/createDB/<randomID>')
def createDB(randomID):
    return render_template("index.html")

#@app.route('/populatesite')
#def populateSite():
#    pass


#api endpoints
@app.route('/api/getdata/<genericdata>')
def api_getdata(genericdata):
    data={"package":"Open Api","message":"Endpoint not done"}
    return jsonify(data)

@app.route('/api/genericdatalist')
def api_genericdatalist():
    datalist={"package":"Open Api","message":"Endpoint under construction"}
    return jsonify(data)

if __name__=="__main__":
    app.run(debug=True)