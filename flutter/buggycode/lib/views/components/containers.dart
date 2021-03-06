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
        borderRadius: BorderRadius.all(const Radius.circular(10.0)),
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
      decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [BoxShadow(
          color: Colors.black12,
          blurRadius: 10.0,
          offset: Offset(4,0),
        ),
          BoxShadow(
            color: Colors.black12,
            blurRadius: 10.0,
            offset: Offset(4,0)
          )
        ]
      ),
      child:Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          CircleAvatar(
            //padding:EdgeInsets.all(5.0),
            backgroundColor: Colors.blueAccent,
            child:Icon(Icons.verified_user,size: 20.0,color: Colors.white,)),
          Fonts.subtitle(this._title),
          Fonts.smalltext(this._subTitle)
        ],
      )
    );
  }
}

class BottomNavItem extends StatelessWidget{
  final IconData _icon;bool _active=false;
  BottomNavItem(this._icon,this._active);
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 35.0,
      width:35.0,
      padding:EdgeInsets.all(3.0),
      decoration: BoxDecoration(
        color:Colors.white,//this._active?Colors.white:Colors.blueGrey,
        shape: BoxShape.circle,
        boxShadow:this._active? null:[
          BoxShadow(
            offset: Offset(2,0),
            color:Colors.black12,
            blurRadius: 5.0,
          ),
          BoxShadow(
            offset: Offset(0,2),
            color:Colors.black12,
            blurRadius: 5.0
          )
        ]
      ),
      child: Column(children: <Widget>[
            Icon(this._icon,size: 27.0,color:this._active?Colors.blueAccent:Colors.black45)
        //Fonts.smalltext(this._tooltip)
      ],),
    );
  }
}

class PostCard extends StatefulWidget {
  String imagePath;int likes; int dislikes;bool seen;bool liked=false;bool disliked=false;
  PostCard(this.imagePath,this.likes,this.dislikes,this.seen,this.liked,this.disliked,{Key key}) : super(key: key);
  @override
  _PostCardState createState() => _PostCardState(imagePath,likes,dislikes,seen,liked,disliked);
}

class _PostCardState extends State<PostCard> {
  String _imagePath;int _likes; int _dislikes;bool _seen;bool _liked=false;bool _disliked=false;
  @override
  initState(){
    super.initState();
  }
  _PostCardState(this._imagePath,this._likes,this._dislikes,this._seen,this._liked,this._disliked);
  @override
  Widget build(BuildContext context) {
    return Container(
      width:300,
      margin:EdgeInsets.fromLTRB(2, 0, 2, 0),
       child: Column(
         children: <Widget>[
           Container(child: Image.asset(this._imagePath),),
           Container(height:30,padding: EdgeInsets.all(5),child:Row(
             mainAxisAlignment: MainAxisAlignment.spaceAround,
              children:<Widget>[
                this._seen?Container(
                  child: Row(children: <Widget>[
                    Icon(Icons.favorite,color: this._liked?Colors.redAccent:Colors.black38),
                    Text("$_likes",style: TextStyle(color:this._liked?Colors.redAccent:Colors.black38 ),)
                  ],),
                ):Container(
                  child: Row(children: <Widget>[
                    IconButton(
                    icon: Icon(Icons.favorite,color:Colors.black38), 
                    onPressed:()=>_likePost(),
                  ),
                    Text("$_likes",style: TextStyle(color: Colors.black38),)
                  ],),
                ),
                this._seen?Icon(Icons.thumb_down,color: this._disliked?Colors.blueAccent:Colors.black12,):IconButton(icon: Icon(Icons.thumb_down), onPressed: null),
                /*RaisedButton(
                  child: Fonts.subtitle("Click Me"),
                  onPressed: _likePost,
                )*/
              ]
            )
           )
         ],
       ),
    );
  }
  _likePost(){
    setState(() {
      print(this._liked);
      //this._liked=!this._liked;
      this._liked=true;
      this._likes+=1;
      this._seen=true;
      print(this._liked);
    });
  }
}
