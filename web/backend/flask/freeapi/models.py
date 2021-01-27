import os
from utils import JsonFile
from gen import User
from mydb import UserDataBase
class GenericData:
    @staticmethod
    def genericDataActions(action):
        if(action=="show"):
            return GenericData.show()
        elif(action=="users"):
            return GenericData.users()
        elif(action=="userprofiles"):
            pass
        elif(action=="bloglist"):
            pass
        elif(action=="blog"):
            pass
        elif(action=="list"):
            pass
        elif(action=="detailedlist"):
            pass
        elif(action=="chat"):
            pass
        else:
            pass

    @staticmethod
    def show():
        files=os.listdir("./genericdata")
        files_cleaned=[]
        for f in files:
            files_cleaned+=[f.split(".")[0]]
        return files_cleaned

    @staticmethod
    def users():
        users=JsonFile.loadData("./genericdata/users.json")
        if(users!={} and users!=False):
            return users
        else:
            return User.random_users(100)

    @staticmethod
    def bloglist():
        pass

class MyDBActions:
    @staticmethod
    def createDB(dbname):
        pass
    @staticmethod
    def populateDB(dbname):
        pass
    @staticmethod
    def fetchData(database):
        pass
    @staticmethod
    def userDBConfgs(configs):
        pass