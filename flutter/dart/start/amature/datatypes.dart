import 'dart:convert';
void main(){
/* Test One var user='''{"name":"username","age":10,"country":"world citizen"}''';
Map decodedUser=json.decode(user) as Map;
print(decodedUser["name"]);
decodedUser.forEach((key,value)=>print('${key}:${value}'));
*/
 /*test 2
 User u=new User(name:"Username",age:10,country:"Germany");
 print(u.name);
 */
/*test 3
String data='{"name":"username","age":10}';
UserJson u=new UserJson(data:'''$data''');
Map uMap=u.getUserMap();
uMap.forEach((k,v)=>print("${k}:${v}"));
*/
}

//class for test 2
class User{
	String name,country;
	int age;
	User({String name,int age,String country}){
		this.name=name;
		this.age=age;
		this.country=country;
	}
}
//test 3
class UserJson{
  Map decodeJson;
  UserJson({String data}){
    this.decodeJson=json.decode(data) as Map;
  }
  Map getUserMap(){
    return this.decodeJson;
  }
}
