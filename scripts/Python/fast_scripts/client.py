import socket

def client():
    s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    s.connect((socket.gethostname(),3000))
    print("client connected")
    data=s.recv(1024)
    print(data.decode('utf-8'))
    #s.send("Hello Server")

if __name__=="__main__":
    client()