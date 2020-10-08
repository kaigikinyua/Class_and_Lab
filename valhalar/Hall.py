import subprocess

def run_odin():
    print("One")
    subprocess.check_output("./Odin",shell=True)

run_odin()