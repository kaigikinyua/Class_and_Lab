import './IO.dart';
import './Rocket.dart';

void main() async{
  //String rocketSimNum=UserInput.enter(true,"How many rocket simulations would you like to run");
  List<Rocket> rocketList=[];
  for(int i=0;i<3;i++){
    String rName=UserInput.enter(true,"Rocket name");
    String rModel=UserInput.enter(true,"Rocket model");
    Rocket r=new Rocket(name: rName,model: rModel);
    rocketList.insert(i, r);
  }
  rocketList.forEach((f)=>{
    print("Rocket name:"+f.name+" model:"+f.model)
  });
  //async
  print(await UserInput.longInput());
  print("Program wait");
}