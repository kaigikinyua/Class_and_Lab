#ifndef CAR_H
#define CAR_H
#include <string>
class Car{
    public:
        std::string carname;
    Car(std::string name);
    int accelerate();
    void carProperties();
};
#endif //CAR
