from ast import Global
import logging,os,json
from msilib.schema import Error
#set up logger
class Color:
    def __init__(self,colorHSV):
        #hue,saturation,value[000-255]
        #colorHSV={001,001,001}
        h,s,v=colorHSV.split(",")
        self.color={"h":h,"s":s,"v":v}

    def increaseHue(self):
        self.color["h"]+=1
        return self.color

    def increaseSaturation(self):
        self.color["s"]+=1
        return self.color

    def increaseValue(self):
        self.color["v"]+=1
        return self.color

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
            #show error in the UI
            GlobalData.colorPallete={"colors":[]}

    def checkNameCollisions(self):
        if(len(GlobalData.colorPallete["colors"][self.palleteName])>0):
            return True
        else:
            return False

    def addColortoPallete(self,color):
        if(color in GlobalData.colorPallete["colors"]==False):
            GlobalData.colorPallete["colors"][self.palleteName]+=[color]
            return True
        else:
            #display error that the color already exists
            return False

    def deleteColorFromPallete(self,color):
        GlobalData.colorPallete["colors"][self.palleteName].remove(color)

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
            except Error as e:
                print(e)
        return False

    def checkValidFile(self):
        try:
            if(os.path.isfile(self.filePath)):
                return True
        except FileNotFoundError:
            print(FileNotFoundError)
            return False

class GlobalData:
    colorPallete={}

class ColorPickerUI:
    def __init__(self):
        pass