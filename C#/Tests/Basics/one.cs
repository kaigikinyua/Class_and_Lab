
using System;
//for use with arr.Max() arr.Min() arr.Sum() etc
using System.Linq;
	
public class Program
{
	public static void Main()
	{
		Console.WriteLine("Getting started with arrays");
		string[] names={"James","John","Jerad"};
		//creating loop to loop through the names
		for (int i=0;i<names.Length;i++){
			Console.WriteLine(names[i]);
		}
		//better loop using foreach
		foreach(string name in names){
			Console.WriteLine(name);
		}
		int[] marks={10,100,10000,300000};
		Console.WriteLine(marks.Max());
		Console.WriteLine(marks.Min());
		Console.WriteLine(marks.Sum());
	}
}