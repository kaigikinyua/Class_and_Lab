//import 'package:buggycode/views/styles/Text.dart';
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
      body: SingleChildScrollView(
        child:Column(
          children: <Widget>[
            Container(
              height:200,
              child:ListView(
              scrollDirection: Axis.horizontal,
              children: <Widget>[
                ProductCard("Flutter","ksh 1,000","New",Icons.wb_sunny,Colors.blueAccent),
                ProductCard("Python3","ksh 500","New",Icons.favorite,Colors.greenAccent),
                ProductCard("JavaScript","ksh 499","New",Icons.color_lens,Colors.yellowAccent),
                ProductCard("Dart","ksh 355","New",Icons.settings_input_composite,Colors.blueAccent),
                ProductCard("Blender","ksh 299","New",Icons.airport_shuttle,Colors.orangeAccent),
              ],
            )),
            Container(
              height:500,
              margin: EdgeInsets.fromLTRB(0.0,20.0, 0.0,20.0),
              child:Column(
                children: <Widget>[
                  Tile("User One","12:00pm"),
                  Tile("User One","12:00pm"),
                  Tile("User One","12:00pm"),
                  Tile("User One","12:00pm"),
                  Tile("User One","12:00pm"),
                  Tile("User One","12:00pm"),
                ],
              )
            ),
            Container(
              height:500,
              margin: EdgeInsets.fromLTRB(0.0,20.0, 0.0,20.0),
              child:Column(
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
      bottomNavigationBar: Container(
        color: Colors.black12,
        padding:EdgeInsets.all(3.0),
        height: 40.0,
        //constraints for overflow
        child:Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: <Widget>[
        BottomNavItem("Home",Icons.home,true),
        BottomNavItem("Favourite", Icons.favorite,false),
        BottomNavItem("Favourite", Icons.movie,false),
        BottomNavItem("Favourite", Icons.image,false),
      ]),
      )
    );
  }
}




