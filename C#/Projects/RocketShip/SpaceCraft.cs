using System;
namespace SpaceCraft{
    public struct Craft{
        public string craftID,missionType,wethearCondition;
        public int[] targetCordinates={0,0,0},fuelCapacity,cargoWeight,velocity;
        class Vehicle{
            public void loadVehicle(){}
            public bool safeLaunch(){}
            public void airBorne(){}
            public void currentLocation(){}
            public void pitch(){}
            public void roll(){}
            public void yaw(){}
            public int totalThrust(){}
            public int acceleration(){}
        }
    }
}