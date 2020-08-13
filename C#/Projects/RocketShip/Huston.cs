using System;
namespace Huston{
    public struct CraftP{
        public string craftID,missionType,wethearCondition;
        public int[] targetCordinates={0,0,0},fuelCapacity,cargoWeight;
    }
    class Mission{
        public void loadCraft(){}
        public void setEnvironmentConditions(){}
        public void launch(){}
        public void diagnostics(){}
        public void blackbox(){}

        public static void Main(string[] args){
            
        }
    }
}