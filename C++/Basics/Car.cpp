#include <iostream>
#include <string>
#include "Car.h"

Car::Car(std::string name){
    carname=name;
}
int Car::accelerate(){
        return 10;
}
void Car::carProperties(){
        std::cout<<"Car name is "<<carname<<std::endl;
}