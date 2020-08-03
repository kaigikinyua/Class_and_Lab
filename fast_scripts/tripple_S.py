import requests
import os
import sys


def fetch_page(url):
	page=requests.get(url)
	return page.content

def fetch_static(url):
	pass

def save_file(filename,content):
	try:
		file_path="./Tests/"+str(filename)
		file=open(file_path,"w")
		file.write(str(content))
		file.close()
	except:
		print(e)
		print("Error while saving the file")

if __name__=="__main__":
	args=sys.argv
	page_contents=fetch_page(args[1])
	save_file("index.html",page_contents)
