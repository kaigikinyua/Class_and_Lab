#include <iostream>
using namespace std;

int paramChecker(int arg,char* argv[]){
    //commands
    /*
        1.launch rocket_name
        2.log rocket_name
        3.new rocket_name
        4.diagnostics rocket_name
    */
    char* commands[]={"launch","log","diagnostics"};
    if(argv[1]==commands[0]){
        return 1;
    }else if(argv[2]==commands[1]){
        return 2;
    }else{
        return 0;
    }
}

void launchRocket(){

}
void diagnoseRocket(){

}
void newRocket(){

}
void logRocket(){
    
}

int main(int arg,char* argv[]){
    cout<<paramChecker(arg,argv)<<endl;
    for(int i=0;i<arg;i++){
        cout<<argv[i]<<endl;
    }
    return 0;
}