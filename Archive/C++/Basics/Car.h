#ifndef CAR_H
#define CAR_H
#include <string>
class Car{
    private:
        int currSpeed;
        std::string carMode;
    public:
        std::string carname,tireType;
        int topSpeed,acceleration,deceleration;

    Car(std::string name,int tSpeed,int acc, std::string tires);
    int accelerate();
    int decelerate();
    void carProperties();
};
#endif //CAR
