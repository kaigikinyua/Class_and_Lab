#ifndef CAR_H
#define CAR_H
#include <string>
class Car{
    private:
        int currSpeed;
    public:
        std::string carname,tireType;
        int topSpeed,acceleration;

    Car(std::string name,int tSpeed,int acc, std::string tires);
    int accelerate();
    void carProperties();
};
#endif //CAR
