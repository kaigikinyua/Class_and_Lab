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
  bool writeToFile(String contents){
    File f=new File(this._filePath);
    f.writeAsString(contents);
    return true;
  }
  String getFileData(){
    File f=new File(this._filePath);
    String data=f.readAsStringSync();
    return data;
  }
  bool appendToFile(String contents){
    File f=new File(this._filePath);
    String data=f.readAsStringSync();
    String fData=data+"\n"+contents;
    f.writeAsStringSync(fData);
    return true;
  }
  String readFile(){
    print("Start reading file");
    final file=new File(this._filePath);
    Stream<List<int>> inputStream=file.openRead();
    var data;
    inputStream
    .transform(utf8.decoder)
    .transform(new LineSplitter())
    .listen((String line){
      print('$line :${line.length}');
    },
      onDone: (){print("Closing file");},
      onError: (e){print(e.toString());},
    );
    print(data);
    return "File Data";
  }
}

void main(){
  Files F=new Files("./test.txt");
  //F.readFile();
  //print(F.getFileData());
  F.appendToFile("Hello World");
  print(F.getFileData());
}