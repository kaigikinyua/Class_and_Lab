using System;
using System.Threading;
namespace Process
{
    class MyThreads{
        public void threadOne(){Console.WriteLine("Hello I am thread one");Thread.Sleep(10);}
        public void threadTwo(){Console.WriteLine("Hello I am thread two");Thread.Sleep(5);}
    }
    class MainClass{
        public static void Main(string[] args){
            MyThreads mt=new MyThreads();
            Thread one=new Thread(new ThreadStart(mt.threadOne));
            Thread two=new Thread(new ThreadStart(mt.threadTwo));
            one.Start();
            two.Start();
        }
    }
}