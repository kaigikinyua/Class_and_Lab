import requests
import re
import os
import time
class Files:
    def __init__(self,filePath):
        self.filePath=filePath
    
    def readFile(self):
        try:
            f=open(self.filePath,"r")
            data=f.readlines()
            f.close()
            return data
        except:
            return False
    
    def writeFile(self,data):
        try:
            f=open(self.filePath,"w")
            f.writelines(data)
            f.close()
            return True
        except:
            return False
    
    def appendToFile(self,data):
        try:
            d=Files(self.filePath)
            data_before=d.readFile()
            data_before=data_before+data
            write=d.writeFile(data_before)
            if(data_before!=False and write!=False):
                return True
            else:
                return False
        except:
            return False


class Poke:
    def __init__(self,webUrl):
        self.webUrl=webUrl
    
    def poke_site(self):
        try:
            page=requests.get(self.webUrl)
            return page
        except:
            return False

    def save_site(self):
        pass

    def offline_mode(self):
        pass

class SiteParse:
    def __init__(self,siteText):
        self.img_tag=re.compile('^<img.*src=.*>$')
        self.css_tag=re.compile('^<link rel=.* href=.*>$')
        self.js_tag=re.compile('^<script.*src= .*></script>$')
        self.siteText=siteText.split("\n")

    def parse_img(self):
        for line in self.siteText:
            line=line.strip()
            if(self.img_tag.search(line)!=None):
                print(self.img_tag.search(line))
                print(line)
                time.sleep(5)
            
    def parse_css(self):
        for line in self.siteText:
            line.strip()
            if(self.css_tag.search(line)!=None):
                print(self.css_tag.search(line))
                print(line)
                time.sleep(5)
        

x=Poke("https://kaigikinyua.github.io/StaticPortfolio/")
sP=SiteParse(x.poke_site().text)
sP.parse_css()

