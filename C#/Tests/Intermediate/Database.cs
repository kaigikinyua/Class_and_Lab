 using System;
 //using System.Data;
 using Mono.Data.Sqlite;
 
 public class SQLiteTest
 {
    public static void Main()
    {
       const string connectionString = "URI=file:test.db";
       IDbConnection dbcon = new SqliteConnection(connectionString);
       dbcon.Open();
       IDbCommand dbcmd = dbcon.CreateCommand();
       // requires a table to be created named employee
       // with columns firstname and lastname
       // such as,
       //        CREATE TABLE employee (
       //           firstname nvarchar(32),
       //           lastname nvarchar(32));
       const string sql =
          "SELECT firstname, lastname " +
          "FROM employee";
       dbcmd.CommandText = sql;
       IDataReader reader = dbcmd.ExecuteReader();
       while(reader.Read())
       {
            string firstName = reader.GetString(0);
            string lastName = reader.GetString(1);
            Console.WriteLine("Name: {0} {1}",
                firstName, lastName);
       }
       // clean up
       reader.Dispose();
       dbcmd.Dispose();
       dbcon.Close();
    }
 }