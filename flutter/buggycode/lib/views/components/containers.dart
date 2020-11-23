import 'package:flutter/material.dart';
import '../styles/Text.dart';
class ProductCard extends StatelessWidget{
  final String _title,_subtitle,_content;IconData icon;bool showIcon=false;Color bgcolor;
  ProductCard(this._title,this._subtitle,this._content,this.icon,this.bgcolor){
    if(this.icon!=null){
      showIcon=true;
    }
  }
  
  @override
  Widget build(BuildContext context) {
    return Container(
      width:150.0,
      margin: EdgeInsets.all(5.0),
      decoration: BoxDecoration(
        color:this.bgcolor,
        boxShadow:[
          BoxShadow(color:Colors.black12,
          offset:Offset(4,0),
          blurRadius:4.0),
          BoxShadow(color:Colors.black12,
          offset:Offset(0,6),
          blurRadius:4.0)
        ]
      ),
      child: Padding(
        padding: EdgeInsets.all(10.0),
        child:Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Fonts.title(this._title),
            showIcon?Icon(this.icon,size:30.0,color: Colors.white,):Container(width:0,height:0),
            Fonts.subtitle(this._subtitle),
            Text(this._content)
          ],
        )
      ),
    );
  }
}

class Tile extends StatelessWidget{
  String _title,_subTitle;
  Tile(this._title,this._subTitle);
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(10.0),
      margin: EdgeInsets.all(5.0),
      child:Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          Padding(
            padding:EdgeInsets.all(5.0),
            child:Icon(Icons.verified_user)),
          Fonts.title(this._title),
          Fonts.subtitle(this._subTitle)
        ],
      )
    );
  }
}