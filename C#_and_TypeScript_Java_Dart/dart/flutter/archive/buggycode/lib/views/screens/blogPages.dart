import 'package:flutter/material.dart';

class BlogTile extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Container(
      child:Column(
        children: [
          //Image.asset(name),
          Placeholder(fallbackHeight: 200),
          Container(
            child: Column(
              children: [
                Container(
                  padding: EdgeInsets.fromLTRB(3, 10, 3, 10),
                  child: Text("Lorem ipsum dolor si amet mi amor lecasa de papel"),
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}