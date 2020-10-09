#include <iostream>
using namespace std;
enum PrimaryCommands {Launch,Diagnose,New,Log};
void primaryCommandCheck(string command,string rocketName){
    if(command=="launch"){
        launchRocket(rocketName);
    }else if(command=="diagnose"){
        diagnoseRocket(rocketName);
    }else if(command=="new"){
        newRocket(rocketName);
    }else if(command=="log"){
        logRocket(rocketName);
    }else{
        cout<<"<!#--------Command Not Found---------#!>"<<endl;
    }
}

void launchRocket(string rocketName){

}
void diagnoseRocket(string rocketName){

}
void newRocket(string rocketName){

}
void logRocket(string rocketName){

}

int main(int arg,char* argv[]){
    //cout<<paramChecker(arg,argv)<<endl;
    for(int i=0;i<arg;i++){
        cout<<argv[i]<<endl;
    }
    char* rocketName[2];
    cin>>rocketName[0];
    cout<<&rocketName[0]<<endl;
    return 0;
}