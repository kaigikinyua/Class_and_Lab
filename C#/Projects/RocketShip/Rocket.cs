using System;
using Environment;
namespace RocketShip{
    class Rocket{
        public string name,version;
        public int height,radius,mass,fuelCapacity;
        
        public void Rocket(string name,string version){
            this.name=name;this.version=version;
        }
        
        public void RocketSettings(int height,int radius,int mass,int fuelCapacity){
            this.height=height;
            this.radius=radius;
            this.mass=mass;
            this.fuelCapacity=fuelCapacity;
        }
        
        public int CalcTotalWeight(){
            int totalWeight=Constants.calcWeight(this.mass)+Constants.calcWeight(this.fuelCapacity*Constants.FuelDensity);
            return totalWeight;
        }
    }

}