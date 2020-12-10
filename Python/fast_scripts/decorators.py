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