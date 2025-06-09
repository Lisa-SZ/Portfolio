namespace CafeTest;

using System.Collections.Generic;
using Xunit;
using CafeApp;

public class DiscountTests
{
    private readonly Dictionary<string, MenuItem> menu = new()
    {
        ["BBQ Chicken Toastie"] = new MenuItem { Type = "Food", Price = 6.23 },
        ["Ham and Cheese Toastie"] = new MenuItem { Type = "Food", Price = 5.78 },
        ["Chocolate Brownie"] = new MenuItem { Type = "Food", Price = 3.50 },
        ["Tea"] = new MenuItem { Type = "Drink", Price = 3.65 },
        ["Coffee"] = new MenuItem { Type = "Drink", Price = 4.64 },
        ["Water"] = new MenuItem { Type = "Drink", Price = 0.00 }
    };

    [Fact]
    public void NoDiscount_WhenOnlyFood()
    {
        var order = new Dictionary<string, int> { ["BBQ Chicken Toastie"] = 1 };
        double total = 6.23;
        double discount = Program.CalculateDiscount(total, order, menu);
        Assert.Equal(0, discount);
    }

    [Fact]
    public void NoDiscount_WhenOnlyDrinkAndWater()
    {
        var order = new Dictionary<string, int> { ["Water"] = 1 };
        double total = 0.00;
        double discount = Program.CalculateDiscount(total, order, menu);
        Assert.Equal(0, discount);
    }

    [Fact]
    public void TenPercentDiscount_WhenFoodAndNonWaterDrink()
    {
        var order = new Dictionary<string, int>
        {
            ["Coffee"] = 1,
            ["BBQ Chicken Toastie"] = 1
        };
        double total = 4.64 + 6.23;
        double discount = Program.CalculateDiscount(total, order, menu);
        Assert.Equal(1.087, discount, 3); // 10%
    }

    [Fact]
    public void TwentyPercentDiscount_WhenOver20()
    {
        var order = new Dictionary<string, int>
        {
            ["BBQ Chicken Toastie"] = 2,
            ["Ham and Cheese Toastie"] = 2
        };
        double total = 2 * 6.23 + 2 * 5.78;
        double discount = Program.CalculateDiscount(total, order, menu);
        Assert.Equal(total * 0.20, discount, 2);
    }

    [Fact]
    public void MaxDiscountCappedAtSix()
    {
        var order = new Dictionary<string, int>
        {
            ["Chocolate Brownie"] = 20 // 20 * £3.50 = £70.00
        };
        double total = 70.00;
        double discount = Program.CalculateDiscount(total, order, menu);
        Assert.Equal(6.00, discount); // capped at £6.00
    }

    [Fact]
    public void TwentyPercentTakesPrecedenceOverTen()
    {
        var order = new Dictionary<string, int>
        {
            ["Tea"] = 2,
            ["BBQ Chicken Toastie"] = 2,
            ["Ham and Cheese Toastie"] = 1
        };
        double total = 2 * 3.65 + 2 * 6.23 + 5.78; // total over £20 with food + drink
        double discount = Program.CalculateDiscount(total, order, menu);
        double expected = total * 0.20;
        Assert.Equal(expected, discount, 2);
    }
}
