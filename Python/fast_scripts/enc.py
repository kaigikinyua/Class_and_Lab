def calc_fibinacii(rounds):
	p_num=1;n_num=1;t_num=1;
	for i in range(rounds):
		t_num=p_num+n_num
		p_num=n_num
		n_num=t_num
	return t_num

def gen_keys(fib):
	string="abcdefghijklmnopqrstuvwxyz"
	fib_str=str(fib)
	keys_taken=[];keys_dict=[]
	curr_str=0
	for s in string:
		if(len(fib_str)>curr_str+1):
			add=0
			if(fib_str[curr_str] in keys_taken):
				add=1
			elif(curr_str>9):
				add=2
				keys_taken+=[fib_str[curr_str-1:curr_str+1]]
				keys_dict+=[{"value":s,"key":fib_str[curr_str-1:curr_str+1]}]
			else:
				keys_taken+=[fib_str[curr_str]]
				keys_dict+=[{"value":s,"key":fib_str[curr_str]}]
			curr_str+=add
	return keys_dict


if __name__=="__main__":
	rounds=input("Enter rounds")
	fin=calc_fibinacii(int(rounds))
	print(fin)
	print(gen_keys(fin))
