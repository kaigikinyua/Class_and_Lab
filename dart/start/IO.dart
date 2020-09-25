import 'dart:io';
import 'dart:convert';

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

class Files{
  String _filePath;
  Files(this._filePath);
  bool fileExists(){
    return false;
  }
  bool writeToFile(){
    return false;
  }
  String readFile(){
    print("Start reading file");
    final file=new File(this._filePath);
    Stream<List<int>> inputStream=file.openRead();
    inputStream
    .transform(utf8.decoder)
    .transform(new LineSplitter()).
    listen((String line){
      print('$line :${line.length}');
    },
      onDone: (){print("Closing file");},
      onError: (e){print(e.toString());},
    );
    return "File Data";
  }
}