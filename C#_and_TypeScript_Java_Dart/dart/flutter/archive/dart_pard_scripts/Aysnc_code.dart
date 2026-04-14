Future<bool> startMotor(bool start) async{
  bool ans=false;
  start?ans=true:ans=false;
  return ans;
}

Future<bool> ignition(bool ignition) async{
  bool ans=false;
  ignition?ans=true:ans=false;
  return ans;
}

void main(){
  
  ignition(true).then((value){
    if(value==true){
      print("Ignition is ready __engine__start");
    }
  });
}