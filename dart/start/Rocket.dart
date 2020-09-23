import 'IO.dart';

class Rocket{
  String name;String model;
  Rocket({String name,String model}){
    this.name=name;
    this.model=model;
    print("Rocket $name -- model $model");
  }
  void ignition(){
    UserInput.output("<----------Ignition---------->");
  }
  bool setUpRocket({double payloadWeight,double rocketWeight,double fuelCapacity}){
    List<double> unEmpty=[payloadWeight,rocketWeight,fuelCapacity];
    for (int i=0;i<unEmpty.length;i++){
      if(unEmpty[i]!=null){return false;}
    }
    
    return true;
  }
  void runDiagnostics(){}
  void launch({String launchDate,String mission,String coordinates}){}

}
