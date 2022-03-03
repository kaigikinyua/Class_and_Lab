import re

def find_all_arrays(datastring):
	return re.findall('\.\.\.[\w]*',datastring)

def find_all_objects(datastring):
	return re.findall("['\d\w]*:[\w]+",datastring)

def replace(variable):
	#...variable | 'usertoken':variable
	rep=None
	if(variable=='username'):
		rep="James May"
	elif(variable=='age'):
		rep="20"
	elif(variable=='products'):
		rep="{'name':'productone','price':1000}"
	else:
		rep="!unkown ddapi variable {v}".format(v=variable)
	return rep

def reconsolidate(datastring,replacements):
	rString=datastring
	for replacement in replacements:
		x=re.sub(replacement["variable"],replacement["rep"],rString)
		rString=x
	return rString

if __name__=="__main__":

	datastring="{'usercart':{'name':username,'age':age,'items':...products}}"
	datastringreplacements=[]
	arrays=find_all_arrays(datastring)
	for arr in arrays:
		var=arr.split('...')
		rep=replace(var[1])
		datastringreplacements+=[{"variable":arr,"rep":rep}]
	print('\n')
	objects=find_all_objects(datastring)
	print(objects)
	for obj in objects:
		var=obj.split(':')
		rep=replace(var[1])
		datastringreplacements+=[{"variable":obj,"rep":"{k}:{v}".format(k=var[0],v=rep)}]
	print(datastring)
	print(reconsolidate(datastring,datastringreplacements))
