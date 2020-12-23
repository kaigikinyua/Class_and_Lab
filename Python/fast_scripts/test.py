import decorators
from decorators import ParamDecorators
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
	@ParamDecorators.log_tofile(filename="Class_Bassed")
	def test_four(self):
		print("class based decorators wrap test")

X=Play()
X.play(0)
X.play("Computer")
X.play_two()

print("Decorators like flask")
@decorators.ParamDecorators.log_tofile(filename="antony.txt")
def test_func():
	print("Test Function")
@ParamDecorators.log_tofile(filename="james.txt")
def test_two():
	print("Test Function 2")
@ParamDecorators.log_tofile(filename="may.txt")
def test_three(show_name):
	print(show_name)
test_func()
test_two()
test_three("top gear")
X.test_four()