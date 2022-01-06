#include "Driver.h"
#include <iostream>

Driver::Driver(int dNumber,int dAgr,int dRating,std::string team){
    driverNumber=dNumber;
    agression=dAgr;
    rating=dRating;
    std::cout<<"Driver number "<<driverNumber<<std::endl;
}