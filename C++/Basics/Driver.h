#ifndef DRIVER_H
#define DRIVER_H
#include <string>

class Driver{
    private:
        int driverNumber,agression,rating;
    public:
        std::string team;

    Driver(int dNumber,int dAgr, int dRating,std::string team);
};
#endif //DRIVER_H