import random


def guess_door_number(available_guesses):
	guess_index=random.randrange(0,len(available_guesses))
	return available_guesses[guess_index]

def switch_door_guess(previous_guess,doors_remaining):
	if(len(doors_remaining)<2):
		return doors_remaining[0]
	new_guess=0
	dNumRem=doors_remaining.copy()
	try:
		dNumRem.pop(dNumRem.index(previous_guess))
		new_guess=dNumRem[random.randrange(0,len(dNumRem))]
	except ValueError:
		new_guess=dNumRem[random.randrange(0,len(dNumRem))]

	return new_guess

def generate_doors(number):
	doors=[]
	for i in range(number):
		doors.append(i+1)
	prize=random.randrange(0,number)
	return doors,doors[prize]

def reveal_bust_door(guessed_door,prized_door,door_numbers):
	dNum=door_numbers.copy()
	if(guessed_door!=prized_door):
		dNum.pop(dNum.index(prized_door))
		dNum.pop(dNum.index(guessed_door))
	else:
		dNum.pop(dNum.index(prized_door))

	if(len(dNum)>1):
		return dNum[random.randrange(0,len(dNum))]
	elif(len(dNum)==1):
		return dNum[0]
	else:
		return prized_door


def switching_method(num_of_doors):
	print("\n\n -------New round---------")
	doors,prized_door=generate_doors(num_of_doors)
	guessed_door=guess_door_number(doors)
	continue_guessing=True
	while num_of_doors>1:
		print(f'You guessed_door {guessed_door}')
		bust_door=reveal_bust_door(guessed_door,prized_door,doors)
		if(bust_door==prized_door and prized_door!=guessed_door):
			print(f'\n------Ouch!!! Door {prized_door} has the prize!! You Lost------\n')
			return False
		elif(bust_door==prized_door and prized_door==guessed_door):
			print("\n-----You Won!!!--------\n")
			return True
		else:
			print(f'Door {bust_door} is a bust!')
			doors.pop(doors.index(bust_door))
			guessed_door=switch_door_guess(guessed_door,doors)
		num_of_doors=num_of_doors-1
	if(guessed_door==prized_door):
		print("\n-----You Won!!!--------\n")
		return True
	return False

def stick_it_out(num_of_doors):
	print("\n\n -------New round---------")
	doors,prized_door=generate_doors(num_of_doors)
	guessed_door=guess_door_number(doors)
	while num_of_doors>1:
		bust_door=reveal_bust_door(guessed_door,prized_door,doors)
		print(f'You picked door number {guessed_door}')
		print(f'Door {bust_door} is a bust!')
		doors.pop(doors.index(bust_door))
		num_of_doors=num_of_doors-1

	if(guessed_door==prized_door):
		print("\t!!!!!You Won This round!!!!!\n")
		return True
	return False


def calc_success_rate(runs,wins):
	return ((wins/runs)*100)


if __name__=="__main__":
	total_runs=100
	switch_method_success_count=0
	sm_rounds=[]
	stick_it_out_success_count=0
	sio_rounds=[]

	num_of_doors=3
	print("\n\n<=====================Switching Method=============================>\n\n")
	for i in range(total_runs):
		if(switching_method(num_of_doors)==True):
			switch_method_success_count+=1
			sm_rounds.append(1)
		else:
			sm_rounds.append(0)

	print("\n\n<=====================Sticking it out=============================>\n\n")
	for j in range(total_runs):
		if(stick_it_out(num_of_doors)==True):
			stick_it_out_success_count+=1
			sio_rounds.append(1)
		else:
			sm_rounds.append(0)

	print(f'\n\n>==========Switching strategy percentage win is {calc_success_rate(total_runs,switch_method_success_count)}%===========<\n\n')
	print(f'\n\n>==========Sticking it out strategy percentage win is {calc_success_rate(total_runs,stick_it_out_success_count)}%===========<\n\n')
