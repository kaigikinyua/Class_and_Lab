//arrays
//lists
//queues & stacks
//enums
using System;
namespace DataStructures{
    class PrimitiveDT{
        public void ArrayFunction(int[] param_array){
            foreach (int item in param_array){
                Console.WriteLine(item);
            }
        }
    }
    class MainClass{
        public static void Main(string[] args){
            int[] array={10,10,100};
            PrimitiveDT dt=new PrimitiveDT();
            dt.ArrayFunction();
        }
    }
    
}