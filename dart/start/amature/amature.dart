
class MyMethods{
  static void output(String out){print(out);}
  static int increment(int i){return i+1;}
  static Future<String> wait() async{
    Future.delayed(Duration(seconds: 3));
    String name="myname";
    return name;
  }
}



void main() async{
  //coditional operator
  10<100?MyMethods.output("True"):MyMethods.output("false");
  var numbers=[1,2,3,4,5,6];
  numbers.forEach((num)=>{
    print(MyMethods.increment(num)..toString())
  });
  var name=MyMethods.wait();
  print(name);
  print("Done");
  print(await MyMethods.wait());
}