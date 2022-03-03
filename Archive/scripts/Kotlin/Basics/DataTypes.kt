class MathOperations(values:Array<Int>){
    val array=values
    fun add():Int{
        var sum:Int=0
        for (item in array){
            sum+=item
        }
        return sum
    }
    fun subtraction(){}
    fun multiply(){}
    fun division(){}
    // fun sort(){
    //     var pivot:Int=(values.size/2).toInt()
    // }
}

class UserData(name:String,email:String){
    val username=name
    val userEmail=email
}

fun main(){
    var users:Array<UserData> = arrayOf(UserData("Myname","email@domain.com"),UserData("Myname2","myemail@domain.com"))
    for (user in users){
        var uname:String=user.username
        var email:String=user.userEmail
        println("Hello $uname I have sent the email to $email")
    }
}