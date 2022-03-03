fun main(){
    arrays()
}
fun arrays(){
    var dynamicArray:Array<String>
    var full=false
    println("How many items would you like to add")
    var numberOfItems=readLine().toString()
    var currIndex=0
    while(full!=true){
        println("Enter Item")
        dynamicArray[currIndex]=readLine().toString()
        currIndex+=1
        if(currIndex.toString()==numberOfItems){
            full=true
        }
    }
    for (item in dynamicArray)
        println(item)
    //*initializing an array */
    // var initArray=arrayOf(10,20,30,40)
    // println(initArray[1])
}


// fun looping(xDelta:Int,yDelta:Int){
    // var x:Int=0
    // var y:Int=20
    // println("x:$x xDelta:$xDelta | y:$y yDelta:$yDelta")
    // for(outer in 1..3){
        // for(innerr in 4 downTo 2){
            // x+=xDelta
            // y+=yDelta
            // y++
            // x+=3
        // }
        // y-=2
    // }
    // println("After calculation looping\n x=$x y=$y")
// }