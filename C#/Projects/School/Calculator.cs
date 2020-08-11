using System;
namespace Calc
{
    class Calculator{
        public static int sumTotal(){
            bool reachedEnd=false;int sum=0;
            while (reachedEnd==false){
                Console.WriteLine("Enter a number");
                int i=int.Parse(Console.ReadLine());
                sum+=i;
                Console.WriteLine("Reached end y/n");
                char ans=char.Parse(Console.ReadLine());
                if(ans=='Y' || ans=='y'){
                    reachedEnd=true;
                }
            }
            Console.WriteLine("The sum is {0}",sum);
            return sum;
        }
        public static float average(int sum,int length){
            return sum/length;
        }
    }
}