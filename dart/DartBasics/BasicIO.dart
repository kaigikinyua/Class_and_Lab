import 'dart:convert';
import 'dart:async';
import 'dart:io';
main() async{
  print("Hello World");
  String? name=stdin.readLineSync();
  print("Hello ${name}");
  String filedata=await readFileFunc('./test_file.txt');
  print(filedata);
  print(await testFut());
}

Future<String> readFileFunc(String filePath) async{
  var file=File(filePath);
  Stream lines=file.openRead()
  .transform(utf8.decoder)
  .transform(LineSplitter());
  String data="";
  try{
    await for(var line in lines){
      print('$line');
      data+=line+'\n';
    }
  }catch(e){
    print('Error $e');
  }
  return data;
}
Future<int> testFut() async{
  return Future.delayed(
    Duration(seconds:2),
    (){return 100;}
  );
}
//datatype ? -> variable can accept null