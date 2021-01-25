import json
class Files:
    def __init__(self,filepath):
        self.filepath=filepath

    def readFile(self):
        data=None
        try:
            f=open(self.filepath,'r')
            data=f.readlines()
            f.close()
        except:
            Messages.error("Could not read file {f}".format(f=self.filepath))
        return data

    def writeFile(self,wdata,append=False):
        data=None
        if(append==True):
            data=self.readFile()
            if(data!=None):
                wdata=wdata+data
            else:
                Messages.error("Could not append data")
                return False
        try:
            f=open(self.filepath,'w'):
            f.write(wdata)
            f.close()
            data=True
        except:
            data=False
        return data

class JsonFile:
    @staticmethod
    def loadData(filepath):
        f=Files(filepath)
        data=f.readFile()
        if(data!=None):
            jsondata=json.load(data)
            return jsondata
        else:
            Messages.error("Could not load data from {f} ".format(f=filepath))
            return {}

    @staticmethod
    def exportJson(filepath,data):
        f=Files(filepath)
        if(f.readFile()!=None):
            res=f.writeFile(data,append=True)
            return JsonFile.handleExportRes(res,data,filepath)
        else:
            res=f.writeFile(data,append=False)
            return JsonFile.handleExportRes(res,data,filepath)

    @staticmethod
    def handleExportRes(res,data,filepath):
        if(res==False):
            Messages.error("Could not export data {d} to file {f}".format(d=data,f=filepath))
            return False
        else:
            Messages.success("Exported data {d} to file {f}".format(d=data,f=filepath))
            return True

class JsonFilter:
    @staticmethod
    def equal_to():
        pass
    @staticmethod
    def less_than():
        pass
    @staticmethod
    def not_equal_to():
        pass
    @staticmethod
    def greater_than():
        pass
    #relative to
    

class Messages:
    @staticmethod
    def error(message):
        pass

    @staticmethod
    def success(messaege):
        pass

    @staticmethod
    def warning(message):
        pass