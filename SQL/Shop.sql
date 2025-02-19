
USE Shop;

-- Inserting data into tables
INSERT INTO Customer (CustomerName, Address, Email, Phone)
VALUES ("Amy Adams", "123 Apple Street", "amy1@mail.net", "07123456789");
INSERT INTO Customer (CustomerName, Address, Email, Phone)
VALUES ("Bob Baker", "4 Blue Street", "bob2@mail.net", "07234567891");
INSERT INTO Customer (CustomerName, Address, Email, Phone)
VALUES ("Chloe Cox", "56 Carrot Street", "chloe3@mail.net", "07345678912");
INSERT INTO Customer (CustomerName, Address, Email, Phone)
VALUES ("Daniel Davies", "7 Day Street", "daniel4@mail.net", "07456789123");
INSERT INTO Customer (CustomerName, Address, Email, Phone)
VALUES ("Evie Evans", "89 Ever Street", "amy1@mail.net", "07567891234");

SELECT * FROM Customer;

INSERT INTO Orders (OrderDate, Cost, CustomerID, DeliveredStatus)
VALUES ("2025-01-01", 23.50, 3, TRUE);
INSERT INTO Orders (OrderDate, Cost, CustomerID, DeliveredStatus)
VALUES ("2025-01-02", 12.45, 1, TRUE);
INSERT INTO Orders (OrderDate, Cost, CustomerID, DeliveredStatus)
VALUES ("2025-01-03", 33.18, 4, TRUE);
INSERT INTO Orders (OrderDate, Cost, CustomerID, DeliveredStatus)
VALUES ("2025-01-04", 22.00, 2, FALSE);
INSERT INTO Orders (OrderDate, Cost, CustomerID, DeliveredStatus)
VALUES ("2025-01-05", 29.80, 5, FALSE);

SELECT * FROM Orders;

INSERT INTO Product (ProductName, Price, InStock)
VALUES ("White Fabric", 9.20, 24);
INSERT INTO Product (ProductName, Price, InStock)
VALUES ("Red Fabric", 14.04, 16);
INSERT INTO Product (ProductName, Price, InStock)
VALUES ("Green Fabric", 12.09, 0);
INSERT INTO Product (ProductName, Price, InStock)
VALUES ("Blue Fabric", 10.14, 19);
INSERT INTO Product (ProductName, Price, InStock)
VALUES ("Black Fabric", 16.70, 5);

SELECT * FROM Product;

INSERT INTO OrderProducts (OrdersID, ProductID)
VALUES (1, 3);
INSERT INTO OrderProducts (OrdersID, ProductID)
VALUES (2, 2);
INSERT INTO OrderProducts (OrdersID, ProductID)
VALUES (3, 5);
INSERT INTO OrderProducts (OrdersID, ProductID)
VALUES (4, 1);
INSERT INTO OrderProducts (OrdersID, ProductID)
VALUES (5, 4);

SELECT * FROM OrderProducts;

-- Updating and deleting
SELECT * FROM Customer;

INSERT INTO Customer (CustomerName, Email)
VALUES ("Freddy Foxy", "Freddy6@mail.net");
UPDATE Customer
SET Address = "21 Feather Street" , Phone = "07678912345"
WHERE Customer.ID = 6;

DELETE FROM Customer WHERE Customer.ID = 7;

-- Altering tables
ALTER TABLE Customer
ADD Joined DATE;

ALTER TABLE Customer
RENAME COLUMN Joined TO DateJoined;

ALTER TABLE Customer
DROP COLUMN DateJoined;

-- DQL
SELECT Customer.CustomerName, Customer.Email FROM Customer;
SELECT * FROM Customer WHERE Customer.ID < 4;

-- Filter out repeat entries
INSERT INTO Customer (CustomerName, Address, Email, Phone)
VALUES ("Chris Cox", "56 Carrot Street", "chris3.5@mail.net", "07034567891");
SELECT DISTINCT Address FROM Customer;

-- Like
SELECT * FROM Customer
WHERE CustomerName LIKE "C%";

-- Order by
SELECT * FROM Orders ORDER BY OrderDate DESC;
SELECT * FROM Orders ORDER BY OrderDate LIMIT 4;

-- Aggregate functions
SELECT MIN(Cost) FROM Orders;
SELECT MAX(Cost) FROM Orders;
SELECT SUM(Cost) FROM Orders;
SELECT COUNT(Cost) FROM Orders; -- Number of orders made
SELECT AVG(Cost) FROM Orders;

-- Joins
SELECT * FROM Orders
JOIN Customer ON Customer.ID = Orders.CustomerID;

-- Displays all customers and their orders if they have made one
SELECT Customer.CustomerName, Customer.Email, Orders.ID AS OrderID, Orders.Cost AS TotalCost, OrderDate
FROM Customer LEFT JOIN Orders
ON Customer.ID = Orders.CustomerID;

-- Creating a view for deliveries
CREATE VIEW OrderDeliveries AS
SELECT Customer.CustomerName, Customer.Address, Orders.ID AS OrderID, Orders.DeliveredStatus
FROM Customer JOIN Orders ON Customer.ID = Orders.CustomerID;
SELECT * FROM OrderDeliveries;



