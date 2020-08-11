using System;
namespace Environment{
    public struct Constants{
        public static Gravity=10;
        public static wind=100;
        public static fuelDensity=1.2;
        public static int calcWeight(int mass){
            return mass*Constants.Gravity;
        }
    }
}