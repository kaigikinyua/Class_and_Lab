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
    //     var pivot:Int=values.size/2
    // }
}


fun main(){
    var myarray=arrayOf(10,20,30)
    var opp=MathOperations(myarray)
    println(opp.add())
}