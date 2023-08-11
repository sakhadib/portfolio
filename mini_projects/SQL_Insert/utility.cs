using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace SQL_Insert
{
    internal static class utility
    {
        static Random random = new Random();
        static string formattedDate = DateTime.Now.ToString("yyyy-MM-dd HH_mm_ss"); // Format the date appropriately
        static string filename = formattedDate + ".txt";
        static string filepath = @"C:\shuvro_database\";
        static int id = 0;
        public static void writer(int val, string table)
        {
            using (StreamWriter sw = File.AppendText(filepath + filename))
            {
                for (int i = 0; i < val; i++)
                {
                    int id = get_id();
                    string name = GenerateRandomString(get_random(8, 25));
                    int national_id = get_random(100000, 99999999);

                    string formattedDate = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"); // Format the date appropriately

                    // Use string interpolation for better readability and parameterization for safety
                    string query = $"INSERT INTO {table} VALUES ({id}, {formattedDate}, {national_id}, {name});";

                    sw.WriteLine(query);
                }
            }
        }

        public static void file_create()
        {
            File.Create(filepath + filename);
        }
        
        public static int get_random(int min, int max)
        {
            int x = random.Next(min, max);
            return x;
        }


        // Random String
        static string GenerateRandomString(int length)
        {
            const string chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)])
                .ToArray());
        }

        // get id
        static int get_id()
        {
            id++;
            return id;
        }



        // Solution Folder finder
        public static string GetSolutionFolderPath()
        {
            // Get the location of the currently executing assembly (your application)
            string assemblyLocation = Assembly.GetExecutingAssembly().Location;

            // Navigate up the directory structure to find the solution folder
            DirectoryInfo directory = new DirectoryInfo(assemblyLocation);
            while (directory != null && !directory.GetFiles("*.sln").Any())
            {
                directory = directory.Parent;
            }

            if (directory != null)
            {
                return directory.FullName;
            }
            else
            {
                throw new InvalidOperationException("Solution folder not found.");
            }
        }
    }
}
