using System;
using Rocket;
using SpaceCraft;
namespace Huston{
    class Mission{
        public bool loadCraft(){
            boolState=false;
            
        }
        public void setEnvironmentConditions(){}
        public void launch(){}
        public void landing(){}
        public void sequence(){}
        public void diagnostics(){}
        public void blackbox(){}

        public static void Main(string[] args){
            loadCraft();
        }
    }
}