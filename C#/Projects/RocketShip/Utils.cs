using System;
namespace Utils{
    class Messages{
        public static void error(string message){
            Console.WriteLine("Error"+message);
        }
        public static void success(string message){
            Console.WriteLine("<----"+message+"---->");
        }
        public static void notification(string message){
            Console.WriteLine(message);
        }
    }
    class Files{
        public static void readFile(string filePath){}
        public static void writeFile(string filePath){}
    }
    
}