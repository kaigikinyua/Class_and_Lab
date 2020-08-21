using System;
using System.Threading;
using Utils;
namespace Huston{
    class Mission{
        public bool loadCraft(){
            bool boolState=false;
            Messages.success("Loading space craft");
            return boolState;
        }
        public void setEnvironmentConditions(){
            Messages.success("Setting envionment Conditions");
        }
        public void launch(){
            Messages.success("Initiating launch sequence");
            int i=10;
            while(i>0){
                Console.Write("{0} \r",i);
                Thread.Sleep(1000);
                i--;
            }
        }
        public void landing(){
            Messages.success("Starting landing sequence");
            Messages.success("Initiating landing sequence");
            int i=10;
            while (i>0){   
                Console.Write("{0} \r",i);
                Thread.Sleep(1000);
                i--;
            }
        }
        public void sequence(){}
        public void diagnostics(){}
        public void blackbox(){}

        public static void Main(string[] args){
            Mission m=new Mission();
            m.loadCraft();
            m.setEnvironmentConditions();
            m.launch();
        }
    }
}