import 'package:buggycode/views/styles/Text.dart';
import 'package:flutter/material.dart';
import './views/components/containers.dart';


void main() => runApp(MaterialApp(
  debugShowCheckedModeBanner: false,
  home:Home(),
  //initialRoute: "/loading",
  /*routes: {
    "/loading":(context)=>LoadingScreen(),
    "/":(context)=>Home()
  },*/
));




class Home extends StatefulWidget{
  @override
  State<StatefulWidget> createState() =>_Home();
}



class _Home extends State<Home> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title:Text("SampleCode")),
      body: Container(
        child:Column(
          children: <Widget>[
            Container(child:ProductCard("Product One","ksh 400","New"))
          ],
        ),
      ),
    );
  }
}




