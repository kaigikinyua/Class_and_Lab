from ast import Global
import logging,os,json
logging.basicConfig(level=logging.DEBUG)
#set up logger
class Color:
    def __init__(self,colorHSV):
        #hue,saturation,value[000-255]
        #colorHSV={001,001,001}
        h,s,v=colorHSV.split(",")
        self.color={"h":h,"s":s,"v":v}

    def deltaHue(self,op):
        v=self.delta(op,self.color["h"])
        self.color["h"]=v
        return self.color

    def deltaSaturation(self,op):
        v=self.delta(op,self.color["s"])
        self.color["s"]=v
        return self.color

    def deltaValue(self,op):
        v=self.delta(op,self.color["v"])
        self.color["v"]=v
        return self.color

    def delta(self,op,value):
        try:
            value=int(value)
        except TypeError:
            raise TypeError("Could not convert {value} to int")
        if(op=='inc'):
            if(value<255):
                value=value+1
        elif(op=='dec'):
            if(value>0):
                value=value-1
        else:
            logging.error("Unknown opperation {op}")
        return value
    @staticmethod
    def colorDictToString(dict):
        return str(dict['h'])+","+str(dict['s'])+","+str(dict['v'])

class ColorPallete:
    # data-> {"colors":["palleteName":[colors...]]}
    def __init__(self,palleteName):
        self.palleteName=palleteName

    def savePallete(self):
        pass

    def fetchColorPalletes(self):
        fM=FileManager("./colors.json")
        colorPallete=fM.readFile()
        if(colorPallete!=None):
            GlobalData.colorPallete=colorPallete
        else:
            logging.warning("No color pallete file was found")
            #show error in the UI
            GlobalData.colorPallete={"colors":[]}

    def checkNameCollisions(self):
        if(len(GlobalData.colorPallete["colors"][self.palleteName])>0):
            return True
        else:
            logging.debug("Name collision in color pallete name {self.palleteName}")
            return False

    def addColortoPallete(self,color):
        if(color in GlobalData.colorPallete["colors"]==False):
            GlobalData.colorPallete["colors"][self.palleteName]+=[color]
            return True
        else:
            #display error that the color already exists
            logging.debug("Color {color} already exists in the pallete {self.palleteName}")
            return False

    def deleteColorFromPallete(self,color):
        try:
            GlobalData.colorPallete["colors"][self.palleteName].remove(color)
        except:
            logging.error("Could not delete color {color} from the pallete {self.palleteName}")
            logging.debug("Pallete: Contents-> {GlobalData.colorPallete}")

class FileManager:
    def __init__(self,filePath):
        self.filePath=filePath
    def readFile(self):
        if(self.checkValidFile()!=False):
            with open(self.filePath,"r") as f:
                data=json.load(f)
                return data
        return None

    def writeToFile(self,data):
        if(self.checkValidFile()!=False):
            try:
                with open(self.filePath,"w") as f:
                    json.dump(data)
                    return True
            except:
                raise Exception("Error writing to file {self.filePath}")
        return False

    def checkValidFile(self):
        try:
            if(os.path.isfile(self.filePath)):
                return True
        except FileNotFoundError:
            logging.error(FileNotFoundError)
            return False

class GlobalData:
    colorPallete={}

class ColorPickerUI:
    def __init__(self):
        pass