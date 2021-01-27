from flask import Flask,render_template,jsonify,request
from models import GenericData
app=Flask(__name__)
#website
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/mydb/<action>')
def mydb(action):
    return render_template("mydb.html")

#@app.route('/populatesite')
#def populateSite():
#    pass

#api endpoints
@app.route('/getdata/<genericdata>')
def getdata(genericdata):
    data=GenericData.genericDataActions(genericdata)
    response={}
    if(data!={} and data!=False and data!=None):
        response=jsonify({"genericdata":data})
    else:
        #run diagnostics on generic data - new thread or process
        #log the error to a file
        response=jsonify({"genericdata":None,"message":"There seems to be an error getting generic data"})
    return response

@app.route('/createDB/<randomID>')
def createDB(randomID):
    return render_template("index.html")

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