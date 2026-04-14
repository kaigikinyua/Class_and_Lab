import 'dart:convert';
import 'dart:async';
import 'dart:io';
import 'DataClasses.dart';
main() async{
//Command Line IO
  // print("Hello World");
  // String? name=stdin.readLineSync();
  // print("Hello ${name}");

//Files IO
  //String filedata=readFileFunc('./test_file.txt');
  //print(filedata);
  //writeToFIle("./transfer_testfile.txt", filedata);

//json data
  /*simple json file
    String jsonString=readFileFunc("./names.json");
    Map<String,dynamic> programming_Languages=jsonDecode(jsonString);
    programming_Languages.forEach((key, value) { 
      print(key);
    });
    print(programming_Languages["names"]);
  */
  //moderate json file
  String settingsFileData=readFileFunc('./Settings.json');
  Map<String,dynamic> settings=jsonDecode(settingsFileData);
  //print(settings["products"]);
  var productSettings=ProductSettings.fromJson(settings["products_settings"]);
  print(productSettings.productDetails);


}

String readFileFunc(String filePath){
  String data=new File(filePath).readAsStringSync();
  return data;
}
void writeToFIle(String filePath,String data){
  var file=new File(filePath).writeAsString(data);
  file.whenComplete(() =>print("Wrote to ${filePath}"));
}

//datatype ? -> variable can accept null