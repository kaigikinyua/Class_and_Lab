#include <iostream>
#include <string>
#include "Car.h"

Car::Car(std::string name,int tSpeed,int acc,std::string tires){
    carname=name;
    topSpeed=tSpeed;
    tireType=tires;
    acceleration=acc;

}
int Car::accelerate(){
        currSpeed+=acceleration;
        return currSpeed;
}
void Car::carProperties(){
        std::cout<<"Car name is "<<carname<<std::endl;
}