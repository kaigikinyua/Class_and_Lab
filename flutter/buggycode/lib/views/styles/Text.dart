//Icons and Texts
import 'package:flutter/material.dart';

class StyledTexts{
  static TextStyle title(){
    return TextStyle(fontSize: 22,);
  }
  static TextStyle smallText(){
    return TextStyle(fontSize:13);
  }
  static TextStyle normalText(){
    return TextStyle(fontSize:16);
  }
}

class IconSize{
  static double title(){
    return 22;
  }
  static double smallIcon(){
    return 13;
  }
  static double normalIcon(){
    return 16;
  }
}

class Fonts{
  static title(String title){
    return Padding(
      padding:EdgeInsets.all(5.0),
      child:Text(title,style: TextStyle(fontSize: 20.0,color: Colors.black87)));
  }
  static subtitle(String subtitle){
    return Text(subtitle,style: TextStyle(fontSize: 15.0,color:Colors.black54),);
  }
}
