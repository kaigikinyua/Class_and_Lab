import re

class RegExp():
    def __init__(self,check):
        self.check=""
        self.email=re.compile("[A-Za-z0-9]*@[A-Za-z0-9]*[.][A-Za-z0-9]")
        self.check=check

    def check_email(self):
        try:
            res=self.email.match(self.check)
            if(res!=None):
                print("Email is valid")
            else:
                print("Email is invalid")
        except:
            print("Error while trying to check email")
    def check_phone_num(self,phone):
        pass
    def check_name(self,name):
        pass


def checker():
    ans=""
    while ans!="/c":
        email_input=input("Enter an email or \c to cancel\n")
        ans=email_input
        if(ans!="/c"):
            R=RegExp(ans)
            R.check_email()
checker()
