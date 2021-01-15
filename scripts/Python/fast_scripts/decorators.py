def check_params(func):
	def innier_func(func,*args,**kwargs):
		print(args)
		print(kwargs)
		func(*args,**kwargs)
	return func

def print_curr_func(func):
	def inner_func(func,*args,**kwargs):
		print(args)
		print(kwargs)
		print("Function {f}".format(f=func))
		func(*args,**kwargs)
	return func

def post_func(func,*args,**kwargs):
	def inner_func(self,*args,**kwargs):
		func(self,*args,**kwargs)
		print("Post Function")
		return func
	return inner_func

class ParamDecorators:
	@staticmethod
	def log_tofile(filename="log.txt"):
		def logger(func):
			def inner_func(*args,**kwargs):
				print("{f} is running : fi argument is {fi}".format(f=func.__name__,fi=filename))
				return func(*args,**kwargs)
			return inner_func
		return logger
