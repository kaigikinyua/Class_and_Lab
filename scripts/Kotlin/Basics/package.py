import sys

def compile():
    pass

def build():
    pass

def run():
    pass

def clean():
    pass


if __name__=="__main__":
    #python3 package.py <run|build|clean> [??<filename>]
    if(len(sys.argv)<3):
        command=['compile','run','build','clean']
        usr_command=sys.argv[1]
        if(usr_command==command[0]):
            run()
        elif(usr_command==command[1]):
            build()
        elif(usr_command==command[2]):
            clean()
        else:
            print("Unknown command {c}".format(c=usr_command))
    else:
        print("Error processing commands ${c}".format(c=sys.argv))