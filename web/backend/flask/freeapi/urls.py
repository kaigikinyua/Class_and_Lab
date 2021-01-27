from flask import Flask,render_template,jsonify,request
from models import GenericData
app=Flask(__name__)
#website
@app.route('/')
def index():
    return render_template("index.html")
    
@app.route('/genericdata')
def generic_data_page():
    return render_template('genericdata.html')

@app.route('/mydb/<action>')
def mydb(action):
    return render_template("mydb.html")

#@app.route('/populatesite')
#def populateSite():
#    pass

#api endpoints
@app.route('/getdata/<genericdata>/<number>')
def getdata(genericdata,number=100):
    data=GenericData.genericDataActions(genericdata,int(number))
    response={}
    if(data!={} and data!=False and data!=None):
        response=jsonify(data)
    else:
        #run diagnostics on generic data - new thread or process
        #log the error to a file
        response=jsonify({"state":"error","genericdata":{},"message":"There seems to be an error getting generic data {g}".format(g=genericdata)})
    return response

@app.route('/createDB/<randomID>')
def createDB(randomID):
    return render_template("index.html")

@app.route('/api/generatedata/<datatype>')
def api_generatedata(datatype):
    return jsonify({"message":"not yet implemented"})

@app.route('/api/genericdatalist')
def api_genericdatalist():
    datalist={"package":"Open Api","message":"Endpoint under construction"}
    return jsonify(data)

if __name__=="__main__":
    app.run(debug=True)