#include <iostream>
#include<string>
#include "Car.h"
//functions
//loops
int main(){
    std::string carname="";
    std::cin>>carname;
    Car c(carname);  
    c.carProperties();
    std::cout<<"Hello World"<<std::endl;
    return 0;
}

