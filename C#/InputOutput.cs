namespace InputIO
{
    class InputIO{
        static void Main(string[] args){
            System.Console.WriteLine("Input output module");
            string name=enterData("Enter your name");
            enterData("Hello"+name);
        }
        static string enterData(string message){
            System.Console.WriteLine(message);
            string name=System.Console.ReadLine();
            return name;
        }
        static void outputMessage(string message){
            System.Console.WriteLine(message);
        }
    }
}