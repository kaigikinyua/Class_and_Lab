#include <iostream>
#include <string>
#include <sys/socket.h>

bool sendMessage(std::string message){
    bool messageSent=false;

    return messageSent; 
}

auto receiveMessage(){
    auto message="Hello from client";
    return message;
}

bool connectToServer(){
    bool connected=false;
    return connected;
}

int main(){
    connectToServer();
    sendMessage("Hello there Server!");
    receiveMessage();
    return 0;
}