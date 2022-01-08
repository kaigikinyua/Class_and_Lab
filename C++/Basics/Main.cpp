#include <iostream>
#include<string>
#include "FileIO.h"
#include "Car.h"
#include "Driver.h"
#include "DataModels.cpp"

int main(){
    DriverModel dModel;
    dModel.driverNumber=10;
    dModel.agression=10;
    dModel.rating=5;
    dModel.team="Merceedes";
    Driver d(dModel.driverNumber,dModel.agression,dModel.rating,dModel.team);
    return 0;
}

