from random import randrange
import json
import requests
from utils import JsonFile,Messages
#Base generic data generators
class User:
    @staticmethod
    def gen_fulluser(dataset):
        fNameSize=len(dataset[0]["first"])#-1
        lNameSize=len(dataset[1]["last"])#-1
        f_name=dataset[0]["first"][randrange(0,fNameSize)]["name"]
        l_name=dataset[1]["last"][randrange(0,lNameSize)]["name"]
        user={
            "username":"{f} {l}".format(f=f_name,l=l_name),
            "firstname":f_name,"lastname":l_name,
            "email":User.gen_email(f_name,l_name),
            "password":User.gen_pass(8),
            "phone":User.gen_phone(10)
        }
        return user
    @staticmethod
    def gen_pass(size):
        password=None
        characters=JsonFile.fetchField('schemas/users_schema.json','charcters')
        if(characters!=False):
            alpha=characters[0]["alpha"][0:randrange(0,len(characters[0]["alpha"]))]
            numbers=characters[1]["numbers"][0:randrange(0,len(characters[1]["numbers"]))]
            special=characters[2]["special"][0:randrange(len(characters[2]["special"]))]
            password=alpha+str(numbers)+special
        else:
            print("Error getting characters for passwords")
            print(characters)
            password=False
        return password

    @staticmethod
    def gen_email(f_name,l_name):
        domains=JsonFile.fetchField("schemas/users_schema.json","emails")
        email=None
        if(domains!=False):
            d=domains[randrange(0,len(domains))]["domain"]
            email=f_name.lower()+l_name.lower()+d
            return email
        else:
            email=False
        return email

    @staticmethod
    def gen_phone(size):
        phone=""
        for i in range(size):
            phone+=(str(randrange(0,10)))
        phone="+"+str(phone)
        return phone

    @staticmethod
    def gen_age():
        return randrange(0,100)

    @staticmethod
    def random_users(number):
        uData=JsonFile.loadData("schemas/users_schema.json")
        male_names=uData["male"]
        female_names=uData["female"]
        Gen_Users=[]
        if(uData!=False and uData!={}): 
            for i in range(number):
                rand_gender=randrange(0,3)
                if(rand_gender==0):
                    user=User.gen_fulluser(male_names)
                else:
                    user=User.gen_fulluser(female_names)
                Gen_Users.append(user)
        else:
            print("Error while getting usernames and domains from ./schemas/users_schema.json")
            Messages.warning("Got {d} while loading user schema ".format(d=uData))
            Gen_Users=False
        return Gen_Users
    
    @staticmethod
    def random_users_profiles(number):
        rusers=User.random_users(number)
        rusersprofiles=[]
        if(rusers!=False):
            for user in rusers:
                rusersprofiles+=[
                    {
                        "firsname":user["firstname"],
                        "lastname":user["lastname"],
                        "email":user["email"],
                        "profile":"/images/one.png"
                    }
                ]
        return rusersprofiles

    @staticmethod
    def export_data(data):
        f=JsonFile.exportJson(filepath="./genericdata/users.json",data=data)
        if(f==False):
            Messages.error(message="Could not export users data to ./genericdata/users.json",log=True)
            Messages.error(message="Userdata -> {d}".format(d=data))
            return False
        else:
            return True

class UserReview:
    @staticmethod
    def random_reviews(number):
        userProfiles=User.random_users_profiles(number)
        reviews=JsonFile.loadData("./schemas/reviews.json")
        reviews_positive=reviews["reviews"][0]["positive"]
        reviews_negative=reviews["reviews"][1]["negative"]
        reviews=[reviews_positive,reviews_positive]
        polished_reviews=[]
        if(userProfiles!=False and reviews!=False):
            for profile in userProfiles:
                rev=reviews[randrange(0,2)]
                f_rev=rev[randrange(0,len(rev))]
                polished_reviews+=[{"user":profile,"review":f_rev}]
        else:
            Messages.error("Could not generate reviews")
            polished_reviews=False
        return polished_reviews

class Blogs:
    @staticmethod
    def blogSnippets(number):
        data=JsonFile.loadData("./schemas/blogs.json")
        snippets=[]
        if(data!=False and data!=None and data!={}):
            for blog in data["blogs"]:
                snippets+=[{
                    "title":blog["title"],
                    "author":blog["author"],
                    "likes":blog["likes"],
                    "dislikes":blog["dislikes"],
                    "views":blog["views"],
                    "date":blog["date"],
                    "thumb_nail":blog["thumb_nail"]
                }]
        else:
            Messages.error("Got {r} while retriving blog snippets".format(r=data))
            snippets=None
        return snippets
    @staticmethod
    def randomBlog():
        blog=Blogs.blogSnippets(1)
        if(blog!=None):
            paragraphs=JsonFile.loadData('./schemas/text_blobs.json')
            p=paragraphs["medium_par"]
            paragraphs=p[0:randrange(0,len(p))]
            blog[0]["paragraphs"]=paragraphs
        return blog[0]
"""
class Chat:
    pass

class List:
    pass
"""

if __name__=="__main__":
    #print(User.random_users(10))
    #print(User.random_users_profiles(10))
    #data=User.random_users(2)
    #User.export_data(data)
    #print(UserReview.random_reviews(100))
    #print(Blogs.randomBlog())
    #print(Blogs.blogSnippets(1))
    pass