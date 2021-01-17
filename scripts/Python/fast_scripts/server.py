import socket
import threading

def server():
    s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    s.bind((socket.gethostname(),3000))
    print("TCP running on port 3000")
    s.listen(5)
    while True:
        (cSocket,address)=s.accept()
        client_thread(cSocket)
        #client=threading.Thread(target=client_thread,args=cSocket)
        #client.run()

def client_thread(client_socket):
    print(client_socket)
    client_socket.send(str.encode("Hello World"))


if __name__=="__main__":
    server()