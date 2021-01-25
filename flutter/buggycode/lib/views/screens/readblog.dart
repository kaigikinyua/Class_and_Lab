import 'package:flutter/material.dart';
class ReadBlog extends StatefulWidget{
  String blogTitle;String thumbNail;
  ReadBlog({this.blogTitle,this.thumbNail});
  @override
  State<StatefulWidget> createState()=>_ReadBlog(this.blogTitle,this.thumbNail);
}

class _ReadBlog extends State<ReadBlog>{
  String blogTitle;String thumbNail;
  _ReadBlog(this.blogTitle,this.thumbNail);
  @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(title: Text(this.blogTitle)),
        body: Container(

        ),
      );
    }
}


class Paragraph extends  StatelessWidget {
  String par;
  Paragraph(this.par);
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: Text(this.par),
      ),
    );
  }
}

class ThumbNail extends StatelessWidget{
  String thumbnail_url;
  ThumbNail(this.thumbnail_url);
  @override
    Widget build(BuildContext context) {
      return Container(
        child: Column(
          children: [
            Image.asset(this.thumbnail_url),
          ],
        ),
      );
    }
}