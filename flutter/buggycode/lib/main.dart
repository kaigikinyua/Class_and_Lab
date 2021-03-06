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




/*class Home extends StatefulWidget{
  @override
  State<StatefulWidget> createState() =>_Home();
}*/



//class _Home extends State<Home> {
class Home extends StatelessWidget{
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
              height:250,
              child: ListView(
                scrollDirection: Axis.horizontal,
                children: <Widget>[
                  PostCard("assets/testImages/beach.jpeg",10,2,true,false,true),
                  PostCard("assets/testImages/car1.jpg",3,0,false,false,false),
                  PostCard("assets/testImages/car2.jpg",9,2,false,false,false),
                  PostCard("assets/testImages/car3.jpeg",7,3,false,false,false),
                  PostCard("assets/testImages/fruits.jpg",9,1,false,false,false),
                ],
              ),
            ),
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
        BottomNavItem(Icons.home,true),
        BottomNavItem(Icons.favorite,false),
        BottomNavItem(Icons.movie,false),
        BottomNavItem(Icons.image,false),
      ]),
      )
    );
  }
}




