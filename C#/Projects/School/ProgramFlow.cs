using System;
using Calc;
class ProgramFlow{
    static void Main(string[] args){
        int sum=Calculator.sumTotal();
        float average=Calculator.average(sum,3);
        Console.WriteLine("The average is {0}",average);
    }
}
