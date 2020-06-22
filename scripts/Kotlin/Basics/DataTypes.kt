class Student(val name:String,val regNumber:String){
    init{
        println("Welcome $name")
    }
    fun register(){
        println("Registering $name with regnumber $regNumber")
    }
}
class Teacher(name:String,staffID:String){
    init(){}
    fun fetchClasses(){}
    fun enterStudentData(){}    
}


fun main(){
    var student1=Student("Jim","BBIT-3435")
    student1.register()
    var student2=Student("James","CS-3013")
    student2.register()
    println(student1.name)
}