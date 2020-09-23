import 'IO.dart';

class Rocket{
  String name;String model;
  double payloadWeight,fuseladgeWeight,fuelCapacity;
  Rocket({String name,String model}){
    this.name=name;this.model=model;
  }
  void ignition(){
    UserInput.output("<----------Ignition---------->");
  }
  bool setUpRocket({double payloadWeight,double fuseladgeWeight,double fuelCapacity}){
    List<double> unEmpty=[payloadWeight,fuseladgeWeight,fuelCapacity];
    for (int i=0;i<unEmpty.length;i++){
      if(unEmpty[i]!=null){return false;}
    }
    return true;
  }
  void runDiagnostics(){}
  void launch({String launchDate,String mission,String coordinates}){}
  //double rocketAcceleration(){}

}

class Physics{
  static calcWeight({double volume,double density}){return volume*density;}
  static calcVelocity({double acceleration,double time}){return acceleration*time;}
  static calcDistanceTraveled({double velocity,double time}){return velocity*time;}
  //static calcTragectory(){}
}