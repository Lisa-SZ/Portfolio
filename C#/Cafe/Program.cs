using System;
using System.Collections.Generic;

namespace CafeApp
{
    public class Program
    {
        static void Main()
        {
            // Creating dictionary of menu items
            Dictionary<string, MenuItem> menu = new()
            {
                ["BBQ Chicken Toastie"] = new MenuItem { Type = "Food", Price = 6.23 },
                ["Ham and Cheese Toastie"] = new MenuItem { Type = "Food", Price = 5.78 },
                ["Chocolate Brownie"] = new MenuItem { Type = "Food", Price = 3.50 },
                ["Tea"] = new MenuItem { Type = "Drink", Price = 3.65 },
                ["Coffee"] = new MenuItem { Type = "Drink", Price = 4.64 },
                ["Water"] = new MenuItem { Type = "Drink", Price = 0.00 }
            };

            Console.WriteLine("Welcome to the Biologics Cafe!");
            Console.WriteLine("Here is our menu:\n");

            // Displaying the menu to the console
            foreach (var item in menu)
            {
                Console.WriteLine($"{item.Key} ({item.Value.Type}): £{item.Value.Price:F2}");
            }

            // Users input their order and quantity
            Console.WriteLine("\nStart placing your order.");
            Console.WriteLine("Type the item name (or 'done' to finish):");

            Dictionary<string, int> order = new();

            while (true)
            {
                Console.Write("\nItem: ");
                string input = Console.ReadLine()?.Trim() ?? "";

                if (input.Equals("done", StringComparison.OrdinalIgnoreCase))
                    break;

                // Accounting for user error
                if (!menu.ContainsKey(input))
                {
                    Console.WriteLine("That item is not on the menu.");
                    continue;
                }

                Console.Write("Quantity: ");
                if (!int.TryParse(Console.ReadLine(), out int quantity) || quantity < 1)
                {
                    Console.WriteLine("Please enter a valid quantity.");
                    continue;
                }

                if (order.ContainsKey(input))
                    order[input] += quantity;
                else
                    order[input] = quantity;

                Console.WriteLine($"Added {quantity} x {input} to your order.");
            }

            // Displaying users order total costs
            Console.WriteLine("\nOrder Summary:\n");
            double total = 0;

            foreach (var item in order)
            {
                var menuItem = menu[item.Key];
                double itemTotal = menuItem.Price * item.Value;
                total += itemTotal;

                Console.WriteLine($"{item.Value} x {item.Key} @ £{menuItem.Price:F2} = £{itemTotal:F2}");
            }

            double discount = CalculateDiscount(total, order, menu);
            double finalTotal = total - discount;

            Console.WriteLine($"\nSubtotal: £{total:F2}");
            Console.WriteLine($"Discount applied: £{discount:F2}");
            Console.WriteLine($"Total Bill: £{finalTotal:F2}");

            Console.WriteLine("\nThank you for your order! Press any key to exit.");
            Console.ReadKey();
        }

        // Determining discounts
        public static double CalculateDiscount(double total, Dictionary<string, int> order, Dictionary<string, MenuItem> menu)
        {
            bool hasFood = false;
            bool hasDrink = false;
            bool onlyDrinkIsWater = true;

            foreach (var item in order)
            {
                var menuItem = menu[item.Key];
                if (menuItem.Type == "Food") hasFood = true;
                if (menuItem.Type == "Drink")
                {
                    hasDrink = true;
                    if (item.Key != "Water") onlyDrinkIsWater = false;
                }
            }

            double discount = 0;
            if (total >= 20.00)
            {
                discount = total * 0.20;
            }
            else if (hasFood && hasDrink && !onlyDrinkIsWater)
            {
                discount = total * 0.10;
            }

            return Math.Min(discount, 6.00);
        }
    }

    public class MenuItem
    {
        public required string Type { get; set; }
        public double Price { get; set; }
    }
}
