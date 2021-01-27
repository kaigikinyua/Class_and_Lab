import json,requests
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
            f=open(self.filepath,'w')
            f.write(wdata)
            f.close()
            data=True
        except:
            data=False
        return data

class JsonFile:
    @staticmethod
    def loadData(filepath):
        #f=Files(filepath)
        #data=f.readFile()
        with open(filepath,'r') as f:
            try:
                data=json.load(f)
            except:
                Messages.error("Could not generate users")
                data=False
        return data
    @staticmethod
    def fetchField(filepath,field):
        data=JsonFile.loadData(filepath)
        return data[field]

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
    c_warning='\033[93m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    @staticmethod
    def error(message):
        Messages.printMessage(Messages.FAIL,"[Err]",message)
    @staticmethod
    def success(message):
        Messages.printMessage(Messages.OKGREEN,"[OK]",message)
    @staticmethod
    def warning(message):
        Messages.printMessage(Messages.c_warning,"[Warning]",message)
    @staticmethod
    def printMessage(mess_col,messagetype,message):
        print("{mc} {mt} {m} {c}".format(mc=mess_col,mt=messagetype,m=message,c=Messages.ENDC))

#advanced feature for populating websites
"""class Requests:
    @staticmethod
    def post_to_site(url,data):
        pass
    @staticmethod
    def get_from_site(url):
        pass
"""