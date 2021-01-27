import os
from utils import JsonFile
from gen import User,UserReview
from mydb import UserDataBase
class GenericData:
    @staticmethod
    def genericDataActions(action,number):
        if(action=="show"):
            return GenericData.show()
        elif(action=="users"):
            return GenericData.users(number)
        elif(action=="userprofiles"):
            return GenericData.users_profiles(number)
        elif(action=="reviews"):
            return GenericData.usersReviews(number)
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
    def users(number):
        users=JsonFile.loadData("./genericdata/users.json")
        if(users!={} and users!=False):
            return users
        else:
            return User.random_users(number)

    @staticmethod
    def users_profiles(number):
        #add local storage for users profile
        return User.random_users_profiles(number)

    @staticmethod
    def usersReviews(number):
        return UserReview.random_reviews(number)
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