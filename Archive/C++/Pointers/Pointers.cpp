#include <iostream>

using namespace std;

//basic pointer
    /*
        *->unary operator (used to define a pointer and also to dereference a pointer)
        &->address operator (returns the memory address of the variable)
    */
int addNumber(int *number){
    return *number+=1;
}

void pointer(){
    int *numberPtr,number;
    cout<<"Enter a number"<<endl;
    cin>>number;
    numberPtr=&number;
    cout<<"Variable number contains "<<number<<endl;
    cout<<"Number pointer dereferenced "<<*numberPtr<<endl;
    cout<<"Number pointer unreferenced "<<numberPtr<<" Address of 'number' variable "<<&number<<endl;
    cout<<"Passing pointer to function "<<addNumber(numberPtr)<<endl;
    cout<<*numberPtr<<endl;
}
//passing pointer as parameters

//dereferencing a pointer
//function pointers
void functionPointers(std::string name,void (*func)(std::string name)){
    /*How to call the functions
        functionPointers("James",prefixHello);
        functionPointers("James",postfixHello);
    */
    func(name);
}
void prefixHello(std::string name){
    cout<<"Hello, "<<name<<endl;
}
void postfixHello(std::string name){
    cout<<name<<", how are you?"<<endl;
}
//functions that return a pointer
int *userAge(int *agePtr){
    //be ware it is not good to return the address of a local variable
    cout<<"Enter your age"<<endl;
    int age;
    cin>>age;
    agePtr=&age;
    cout<<*agePtr<<endl;
    return agePtr;
}
//structure pointers
int main(){
    int *agePtr=NULL;
    agePtr=userAge(agePtr);
    cout<<"User age is "<<*agePtr<<endl;
    return 0;
}
