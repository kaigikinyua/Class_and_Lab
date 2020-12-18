//save blog

class LocalBlog{

  static bool saveblog(String title,Map<int,String> paragraphs){
    print("saving blog");
    return true;
  }
  static Map<String,String>fetchblogs(){
    Map<String,String> blogs={"1":"Blog one"};
    return blogs;
  }
}