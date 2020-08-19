using System;
namespace Utils{
    class Messages{
        public static void error(string message){
            Console.ForegroundColor=ConsoleColor.Red;
            Console.WriteLine("Error:> "+message);
        }
        public static void success(string message){
            Console.ForegroundColor=ConsoleColor.Green;
            Console.WriteLine("<----"+message+"---->");
        }
        public static void notification(string message){
            Console.ForegroundColor=ConsoleColor.White;
            Console.WriteLine(message);
        }
        public static void animation(string message){
            Console.WriteLine(message+"\r");
        }
    }
    class Files{
        public static void readFile(string filePath){}
        public static void writeFile(string filePath){}
    }
    
}