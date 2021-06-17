import sys,os,re

def compile():
    print("Compiling ...")
    #list kotlin files
    cwd=os.getcwd()
    kt=Files(cwd)
    files=kt.listFiles()
    ktFiles=kt.filterExtension(files)
    for ktFile in ktFiles:
        os.system("kotlinc {cd}/{f}".format(cd=cwd,f=ktFile))

def build():
    print("Bulding ...")

def run():
    print("Running ...")

def clean():
    print("Cleaning ...")

class Files:
    def __init__(self,src_dir):
        self.src_dir=src_dir

    def listFiles(self):
        items=os.listdir(self.src_dir)
        files=[]
        for item in items:
            if(os.path.isfile(self.src_dir+"/{f}".format(f=item))):
                files+=[item]
        return files

    def filterExtension(self,files,ext=".kt"):
        results=[]
        for f in files:
            kotlin_files=re.findall(ext,f)
            if(len(kotlin_files)>0):
                results+=[f]
        return results

if __name__=="__main__":
    #python3 package.py <run|build|clean> [??<filename>]
    if(len(sys.argv)<3):
        command=['compile','run','build','clean']
        usr_command=sys.argv[1]
        if(usr_command==command[0]):
            compile()
        elif(usr_command==command[1]):
            run()
        elif(usr_command==command[2]):
            build()
        elif(usr_command==command[3]):
            clean()
        else:
            print("Unknown command {c}".format(c=usr_command))
    else:
        print("Error processing commands ${c}".format(c=sys.argv))