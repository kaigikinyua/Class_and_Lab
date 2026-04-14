class BlogPost{
  String title,date,thumbnail;
  BlogPost(this.title,this.date,this.thumbnail);
  BlogPost.fromJson(Map<String,dynamic> json){
    this.title=json["title"];
    this.date=json["date"];
    this.thumbnail=json["thumbnail"];
  }
  BlogPost.toJson(){
    Map json={"title":this.title,"date":this.date,"thumbnail":this.thumbnail};
  }
}