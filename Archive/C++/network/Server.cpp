#include <iostream>
#include <string>
#include <sys/socket.h>
#include <netinet/in.h>

#define BUFF_SIZE 1024
#define PORT_LISTEN 4000

bool sendMessage(std::string message){
    bool messageSent=false;

    return messageSent; 
}

auto receiveMessage(){
    auto message="Hello from client";
    return message;
}

bool connectClient(){
    bool clientConnected=false;
    
    return clientConnected;
}

int main(){
    
    std::cout<<gethostbyname()<<std::endl;
    connectClient();
    sendMessage("Hello new client");
    receiveMessage();
    return 0;
}