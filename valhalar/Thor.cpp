#include <iostream>
#include <string>
using namespace std;

class Files{
    public: char filePath;
    int files(){ return 0;}
    bool createFile(){
        cout<<"Creating a file"<<endl;
        return true;
    }
};
int main(){
    Files f=Files();
    f.createFile();
    return 0;
}