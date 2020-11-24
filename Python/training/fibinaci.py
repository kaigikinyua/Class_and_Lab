
def add(num1,num2):
	return int(num1)+int(num2)

def calcFibinaci(rounds):
	curr=1;next=1;i=0;
	for i in range(rounds):
		hold=add(curr,next)
		curr=next
		next=hold
	return next

if __name__=="__main__":
	rounds=input("Enter the rounds generate fibinaci\n")
	try:
		rounds=int(rounds)
	except:
		rounds=1000
	x=calcFibinaci(rounds)
	print(x)

