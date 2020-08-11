//arrays
//lists
//queues & stacks
//enums and structs
using System;
namespace DataStructures{
    //structs
    public struct User{
        public string firstname,lastname,password;
        public int id;
        public void userDetails(){
            Console.WriteLine("User details");
            Console.WriteLine("Username:{0} {1}\nPassword:{2}\nId:{3}",firstname,lastname,password,id);
        }
    }
    //enum
    public enum Constants{TaxRates=3,Bonus,Shares=1}
    class PrimitiveDT{
        public void ArrayFunction(int[] param_array){
            foreach (int item in param_array){
                Console.WriteLine(item);
            }
        }
    }
    class MainClass{
        public static void Main(string[] args){
            //int[] array={10,10,100};
            //PrimitiveDT dt=new PrimitiveDT();
            //dt.ArrayFunction();
            //User u=new User();
            //u.firstname="James";u.lastname="May";u.password="Ohh Cock!!";u.id=100;
            //u.userDetails();
            int t=(int)Constants.TaxRates;
            Console.WriteLine(t);
            Console.WriteLine((int)Constants.Bonus);
        }
    }
    
}