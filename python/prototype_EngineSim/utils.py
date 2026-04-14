"""

    Utility functions and classes
        Settings
        Log
        File

    Todos:
        [] Implement Log.logToFile function       
        [] Add a File class to manage reading and writing to files

"""
import os

#Todo: Add the session log for different sessions
class Settings:
    debug=True
    logFilePath="./data/logs/logFile.txt"

class Log:

    #treat this as the console log when Settings.debug=True if False it logs to the logfile in Settings.logFilePath
    @staticmethod
    def log(message,messageType="success"):
        msgTypes=["success","warning","error"]
        if(Settings.debug):
            print(f"[{messageType}] {message}")
        else:
            Log.logToFile(Settings.logFilePath,message,messageType)

    #log to file in Settings.logFilePath
    #Todo: add datetime of the log to the logfile
    @staticmethod
    def logToFile(logFilePath,message,messageType):
        File.appendToFile(logFilePath,message,force=True)

class File:
    @staticmethod
    def fileExists(filePath):
        if(os.path.exists(filePath)):
            return True
        return False

    @staticmethod
    def appendToFile(filePath,data,force=False):
        if(File.fileExists(filePath)):
            with open(filePath,"a") as datafile:
                previousData=datafile.readlines()
                newData=previousData+data
                datafile.writelines(newData)
                datafile.close()
                Log.log(f"Success write to {filePath} data={data}","success")
                return True,f"Success write to {filePath} data={data}","success"
        elif(force==True):
            forceWrite,msg=File.writeToFile(filePath,data)
            if(forceWrite):
                return True,f"Warning forced write to file {filePath} data={data}"
            else:
                return False,f"Error could not force write to file {filePath} data={data} message={msg}"
        return False,f"Error writing to file {filePath} data={data}"

    #create file
    #write to file by force
    def writeToFile(filePath,data):
        return False
