import requests
import os
import sys
import re

class WebPage:
	def __init__(url):
		self.base_url=url

	def fetch_page():
		page=requests.get(self.url)
		return page.content

	def fetch_static_assets():
		pass

class Save:
	
	@staticmethod
	def save_file(filename,content):
		try:
			file_path="./Tests/"+str(filename)
			file=open(file_path,"w")
			file.write(content)
			file.close()
		except:
			print(e)
			print("Error while saving the file")

	@staticmethod
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

	@staticmethod
	def save_refined_file(file_path):
		data=read_file(file_path)
		for line in data:
			print(line)

	@staticmethod
	def extract_file_name(url):
		x=url.split('/')
		return x[len(x)-1]

class RegularExp:

	@staticmethod
	def find_reg_expr(expr,search_data):
		pass

if __name__=="__main__":
	args=sys.argv
	page=WebPage(args[1])
	page_contents=page.fetch_page()
	save_file("index.html",page_contents.decode('utf-8'))
	save_refined_file("./Tests/index.html")
