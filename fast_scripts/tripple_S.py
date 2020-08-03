import requests
import os
import sys
import re

def fetch_page(url):
	page=requests.get(url)
	return page.content

def fetch_static(url):
	pass

def save_file(filename,content):
	try:
		file_path="./Tests/"+str(filename)
		file=open(file_path,"w")
		file.write(content)
		file.close()
	except:
		print(e)
		print("Error while saving the file")

def read_file(file_path):
	data=[]
	try:
		f=open(file_path,"r")
		data=f.readlines()
		f.close()
	except:
		print("Error while reading file")
		data=False
	return data

def save_refined_file(file_path):
	data=read_file(file_path)
	for line in data:
		print(line)

def extract_file_name(url):
	x=url.split('/')
	return x[len(x)-1]
def find_reg_expr(expr,search_data):
	pass

if __name__=="__main__":
	args=sys.argv
	page_contents=fetch_page(args[1])
	save_file("index.html",page_contents.decode('utf-8'))
	save_refined_file("./Tests/index.html")
