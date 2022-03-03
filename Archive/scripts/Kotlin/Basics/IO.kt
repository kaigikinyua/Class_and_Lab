import java.io.File
class TextFile(filePath:String){
    val fileObject=File(filePath)
    fun readData(){
        if(fileObject.exists()){
            val bufferReader=file.bufferReader()
            var filedata=bufferReader.readLines()
            for (line in filedata){
                println(line)
            }
        }
    }
    fun writeToFile(exportData:String){
        var dataExported=false
        if(fileObject.exists()){
            //creating a file fileObject.createNewFile()
            fileObject.writeText(exportData)
            dataExported=true
        }
    }
}

fun main(){
    var myFile=TextFile("./test.txt")
    myFile.writeToFile("Hello world")
    myFile.readData()
}