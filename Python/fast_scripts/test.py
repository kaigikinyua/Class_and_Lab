

class MyDecoratorClass:
	def present(param_func,*args,**kwargs):
		#print(args)
		def func(self,*args,**kwargs):
			#print("Decorratting function{m}".format(m=param_func.__name__))
			param_func(self,*args,**kwargs)
			print("Done")

		return func

class Play(MyDecoratorClass):
	@MyDecoratorClass.present
	def play(self,present):
		if(present==0):
			print("I got you nothing")
		else:
			print("I got you {m}".format(m=present))

	#@MyDecoratorClass.present
	def play_two(self):
		print("Play Two")

X=Play()
X.play(0)
X.play("Computer")
X.play_two()