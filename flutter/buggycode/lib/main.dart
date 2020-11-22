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
            Container(
              height:200,
              child:ListView(
              scrollDirection: Axis.horizontal,
              children: <Widget>[
                ProductCard("Product One","ksh 400","New"),
                ProductCard("Product One","ksh 400","New"),
                ProductCard("Product One","ksh 400","New"),
                ProductCard("Product One","ksh 400","New"),
                ProductCard("Product One","ksh 400","New"),
              ],
            )),
            Container(
              height:300,
              margin: EdgeInsets.fromLTRB(0.0,20.0, 0.0,20.0),
              child:ListView(
                children: <Widget>[
                  Tile("User One","12:00pm"),
                  Tile("User One","12:00pm"),
                  Tile("User One","12:00pm"),
                  Tile("User One","12:00pm"),
                  Tile("User One","12:00pm"),
                  Tile("User One","12:00pm"),
                ],
              )
            )
          ],
        ),
      ),
    );
  }
}




