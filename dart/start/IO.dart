import 'dart:io';

class UserInput{
  static String enter([bool printMessage,String message]){
    if(printMessage==true){
      UserInput.output(message);  
    }
    String value=stdin.readLineSync();
    return value;
  }
  static void output(String message){
    print(message);
  }
  static Future<String> longInput() async{
    String x=await UserInput.stringWait();
    return x;
  }
  static Future <String> stringWait()=>Future.delayed(Duration(seconds:3),()=>"Wait");
}