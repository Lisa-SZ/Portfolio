
# Formatting welcome message
format_output = "\033[47m\033[30m"
format_reset = "\033[0m"
# Welcome message
print(f"{format_output}---Welcome to your Expense Tracker---{format_reset}")

# Structure of expenses dictionary
expenses = {
    "01/01/25": {"Category" : "Food", "Amount" : 23.30, "Description" : "Restaurant"},
    "18/01/25": {"Category" : "Entertainment", "Amount" : 14.99, "Description" : "Cinema"}
}

# ExpenseFunctions.add_expenses("01/01/25", "Food", 34.50, "Weekly shop")

# List of options to view
actions = ["1. View expenses", "2. Add an expense", "3. Delete an expense", "4. View total amount spent", "5. View total amount in each category", "6. Exit expense tracker"]

def action():
    print()
    print("What yould you like to access today?")
    for i in actions:
        print(i)
    choice()

def choice():
    try:
        user_choice = int(input("Enter your option: "))
        match user_choice:
            case 1:
                view_expenses()
                action()
            case 2:
                input_expenses()
                action()
            case 3:
                delete_expenses()
                action()
            case 4:
                total_amount()
                action()
            case 5:
                total_category()
                action()
            case 6:
                thank()
        if int(user_choice) <0 or int(user_choice) > 6:
            raise ValueError
    except ValueError:
        print("Invalid input, please choose an option from 1-5")
        action()

# function to add expenses 
def add_expenses(date, category, amount, description):
    try:
        expenses[date] = {}
        expenses[date]["Category"] = category
        expenses[date]["Amount"] = float(amount)
        expenses[date]["Description"] = description
        if amount < 0:
            raise ValueError
    except ValueError:
        print("Invalid input, check the values entered")
    except TypeError:
        print("Invalid data type, check the types entered")

# asking user inputs to add data to expenses
def input_expenses():
    try:
        date = input("Enter date of expense DD/MM/YY: ")
        category = input("Enter the category: ")
        amount = float(input("Enter the amount including pence: "))
        description = input("Add adescription for your expense: ")
        if amount < 0:
            raise ValueError
        add_expenses(date, category, amount, description)
        print("Expense added successfully")
    except ValueError:
        print("Invalid input, check the values entered")
    except TypeError:
        print("Invalid data type, check the types entered")

# Function to display the whole dictionary in an easy to read way
def view_expenses():
    try:
        for num, info in expenses.items():
            print("\nExpense date:",num)
            for key in info:
                print(key + ":", info[key])
    except KeyError:
        print("Key is not found in the dictionary")
    except IndexError:
        print("Index is out of range")

# Total expenses amount

# def total_amount():
#     total = sum(expense["Amount"] for expense in expenses)
#     print(total)

def total_amount():
    cost = []
    for expense, info in expenses.items():
        for key in info:
            cost.append(info["Amount"])
    total = sum(cost)
    print(total)


# Removing entries from dictionary
def delete_expenses():
    select = input("Which entry would you like to delete?: ")

# Total of amount for each category
def total_category():
    print("The total of each category is: ")

# Thank you message
def thank():
    print(f"\n{format_output}---Thank you for using Expense Tracker---{format_reset}")

action()