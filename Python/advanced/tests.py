import datetime
def check_leapyear(year):
    rem=year%4
    if(rem==0):
        return True
    else:
        return False

def oneYear(year,month,day):
    if(check_leapyear(int(year)+1) or check_leapyear(int(year))):
        if(int(month)==2 and int(day)==29):
            return datetime.date(int(year)+1,int(3),int(1))
        else:
            return datetime.date(int(year)+1,int(month),int(day))
    else:
        return datetime.date(int(year)+1,int(month),int(day))

d=datetime.datetime.today()
date_striped=d.date()
split_date=str(date_striped).split("-")
year=split_date[0]
month=split_date[1]
day=split_date[2]
print(oneYear(1997,5,26))
print(oneYear(2000,2,29))
print(oneYear(1999,2,28))    