//learn implements extends and with
abstract class Shape{
  void area();
}
class Rectangles implements Shape{
  @override
  void area(){
    print("A=LxW");
  }

}
void main(){
  var rec=Rectangles();
  rec.area();
  //rec.volume();
}