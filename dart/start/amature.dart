
class MyMethods{
  static void output(String out){print(out);}
  static int increment(int i){return i+1;}

}



void main(){
  //coditional operator
  10<100?MyMethods.output("True"):MyMethods.output("false");
  var numbers=[1,2,3,4,5,6];
  numbers.forEach((num)=>{
    print(MyMethods.increment(num)..toString())
  });
}