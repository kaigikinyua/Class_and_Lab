#include <iostream>
#include <string>

class ModuleTest{
    private:
    static int error_count;

    public:
    ModuleTest(std::string modulename){
        std::cout<<"Testing "<<modulename<<std::endl;
    }
    void moduleError(std::string message){
        std::cout<<"Error!!\n"<<message<<std::endl;
    }
    //function that runs a function and compares the output to the expected output
}

bool car_ModuleTests(){
    return false;
}
bool driver_ModuleTests(){
    return false;
}
bool fileIO_ModuleTests(){
    return false;
}
bool dataModels_ModuleTests(){
    return false;
}
bool utilities_ModuleTests(){
    return false;
}

int main(){

}