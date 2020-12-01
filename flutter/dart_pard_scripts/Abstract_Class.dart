
abstract class Shape{
  void area();
  void volume(){
    print("Getting volume of a shape");
  }
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