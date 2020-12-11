import decorators

class MyDecoratorClass:
	def present(param_func,*args,**kwargs):
		#print(args)
		def func(self,*args,**kwargs):
			#print("Decorratting function{m}".format(m=param_func.__name__))
			print("My decorators class")
			param_func(self,*args,**kwargs)
			print("Done")

		return func

"""def post_func(func,*args,**kwargs):
	def inner_func(self,*args,**kwargs):
		print("Pre Function")
		func(self,*args,**kwargs)
		print("Post Function\n\n")
		return func
	return inner_func
"""


class Play(MyDecoratorClass):
	@decorators.post_func
	def play(self,present):
		if(present==0):
			print("I got you nothing")
		else:
			print("I got you {m}".format(m=present))
	@decorators.post_func
	def play_two(self):
		print("Play Two")

X=Play()
X.play(0)
X.play("Computer")
X.play_two()