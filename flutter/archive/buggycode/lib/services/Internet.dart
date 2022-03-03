import "dart:io";

//check connectivity
class Internet{
  static Future<bool> online() async{
    try{
      final result=await InternetAddress.lookup("google.com");
      if(result.isNotEmpty && result[0].rawAddress.isNotEmpty){
        return true;
      }
      else{
        return false;
      }
    }on SocketException catch(_){
      return false;
    }
  }
}

class BlogActions{
  /*static Future fetchBlogsIntro(){}

  //blog specific
  static Future fetchBlog(String blogID){}

  static Future saveBlog(String blogID){
    //usse BlogAction.fetchBlog to fetchIt
    //save it to file/database
  }
  static Future deleteBlog(String blogID){}

  static Future likeBlog(String blogID){}
  */
}


//download blog

//save blog 

//fetch blog