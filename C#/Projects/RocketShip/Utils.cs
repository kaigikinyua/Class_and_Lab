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
    }
    class Files{
        public static void readFile(string filePath){}
        public static void writeFile(string filePath){}
        public static void Main(string[] args){
            Messages.error("Test error message");
            Messages.success("Testing success message");
            Messages.notification("Testing print message");
        }
    }
    
}