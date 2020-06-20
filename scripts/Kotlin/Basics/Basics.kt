fun main(){
    //x+=6
    looping(6,0)
    //x--
    looping(-1,0)
    //y=x+y??
    //y=7
    //x=x+y:y=x-7
    //x=y:y++

}


fun looping(xDelta:Int,yDelta:Int){
    var x:Int=0
    var y:Int=20
    println("x:$x xDelta:$xDelta | y:$y yDelta:$yDelta")
    for(outer in 1..3){
        for(innerr in 4 downTo 2){
            x+=xDelta
            y+=yDelta
            y++
            x+=3
        }
        y-=2
    }
    println("After calculation looping\n x=$x y=$y")
}