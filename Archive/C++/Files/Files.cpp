#include <iostream>
#include <string>
#include <fstream>

using namespace std;

int main(){
    //reading a file
    string data[5];
    string dataline;
    ifstream ReadFile("test.txt");
    int i=0;
    while(getline(ReadFile,dataline)){
        data[i]=dataline;
        i+=1;
    }
    ofstream WriteFile("test_output.txt");
    while(i>=0){
        WriteFile<<data[i]<<endl;
        i-=1;
    }
    return 0;
}