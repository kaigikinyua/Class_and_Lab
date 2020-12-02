abstract class Shape{
  String name;
  double area(double h,[double width]);
  double perimeter(double h,[double width]);
}
class Circle implements Shape{
  String name;
  @override
  double area(double radius,[double p]){
    return ((22/7)*radius*radius);
  }
  @override
  double perimeter(double radius,[double p]){
    return ((22/7)*radius*2);
  }
}
class Rectangle implements Shape{
  String name;
  double area(double height,[double width]){
    return height*width;
  }
  double perimeter(double height,[double width]){
    return (height+width)*2;
  }
}
class Square extends Rectangle{
  //since square already extends Rectangle and Rectangle has 
  //implemented the area,perimeter and name you can have addidional methods 
  int hello(){
    print("Hello I am a square");
    return 0;
  }
  int areaComp(double height){
    double area=super.area(height,height);
    double perimeter=super.perimeter(height,height);
    print("Perimeter is $perimeter and area is $area");
    if(area>perimeter){
      print("Area is greater");
    }else{
      print("Perimeter is greater");
    }
    return 0;
  }
}
void main(){
  Square s= new Square();
  print(s.area(10.5,100));
  s.hello();
  s.areaComp(34.5);
}