use students;

-- create table customers
create table customers(
customer_id INT PRIMARY KEY,
customer_name VARCHAR(50),
email VARCHAR(100),
phone VARCHAR(15),
city VARCHAR(30),
state VARCHAR(30),
signup_date DATE,
sys_date DATETIME2 DEFAULT SYSDATETIME(),
current_time_stamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- create table orders
-- customer_id has no foreign key on purpose, so orders can exist without a matching customer
create table orders(
order_id INT PRIMARY KEY,
customer_id INT,
product_name VARCHAR(50),
category VARCHAR(30),
quantity INT,
unit_price DECIMAL(10,2),
order_status VARCHAR(20),
order_date DATE,
sys_date DATETIME2 DEFAULT SYSDATETIME(),
current_time_stamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

--insert data into customers table
--sys_date and current_time_stamp are filled by their defaults
INSERT INTO customers (customer_id,customer_name,email,phone,city,state,signup_date)
values
(101,'naveen','naveen@example.com','9000000101','chennai','tamil nadu','2024-01-15'),
(102,'suresh','suresh@example.com','9000000102','coimbatore','tamil nadu','2024-02-20'),
(103,'priya','priya@example.com','9000000103','bengaluru','karnataka','2024-03-05'),
(104,'karthik','karthik@example.com','9000000104','mysuru','karnataka','2024-03-28'),
(105,'divya','divya@example.com','9000000105','hyderabad','telangana','2024-04-11'),
(106,'arjun','arjun@example.com','9000000106','kochi','kerala','2024-05-02'),
(107,'meena','meena@example.com','9000000107','madurai','tamil nadu','2024-05-19'),
(108,'rahul','rahul@example.com','9000000108','mumbai','maharashtra','2024-06-07'),
(109,'anitha','anitha@example.com','9000000109','pune','maharashtra','2024-07-23'),
(110,'vijay','vijay@example.com','9000000110','salem','tamil nadu','2024-08-14'),
(111,'lakshmi','lakshmi@example.com','9000000111','delhi','delhi','2024-09-01'),
(112,'ganesh','ganesh@example.com','9000000112','jaipur','rajasthan','2024-10-10'),
(113,'kavya','kavya@example.com','9000000113','kolkata','west bengal','2024-11-18'),
(114,'mohan','mohan@example.com','9000000114','trichy','tamil nadu','2024-12-03'),
(115,'nisha','nisha@example.com','9000000115','ahmedabad','gujarat','2025-01-09');

--insert data into orders table
--customers 111 to 115 have no orders, orders 1014 and 1015 have no matching customer
INSERT INTO orders (order_id,customer_id,product_name,category,quantity,unit_price,order_status,order_date)
values
(1001,101,'laptop','electronics',1,55000.00,'delivered','2025-01-10'),
(1002,101,'wireless mouse','electronics',2,750.00,'delivered','2025-01-12'),
(1003,102,'office chair','furniture',1,8500.00,'shipped','2025-02-03'),
(1004,103,'smartphone','electronics',1,24000.00,'delivered','2025-02-14'),
(1005,103,'phone case','accessories',3,350.00,'delivered','2025-02-16'),
(1006,103,'power bank','electronics',1,1800.00,'cancelled','2025-03-01'),
(1007,104,'study table','furniture',1,6200.00,'pending','2025-03-09'),
(1008,105,'headphones','electronics',1,3200.00,'delivered','2025-03-22'),
(1009,106,'backpack','accessories',2,1500.00,'shipped','2025-04-05'),
(1010,107,'water bottle','accessories',4,450.00,'delivered','2025-04-17'),
(1011,108,'monitor','electronics',2,12500.00,'pending','2025-05-06'),
(1012,109,'bookshelf','furniture',1,7400.00,'delivered','2025-05-25'),
(1013,110,'keyboard','electronics',1,1600.00,'cancelled','2025-06-11'),
(1014,999,'desk lamp','furniture',1,1100.00,'shipped','2025-06-20'),
(1015,NULL,'smart watch','electronics',1,4500.00,'pending','2025-07-02');

--select data from both tables
select * from customers;
select * from orders;

--inner join
select c.customer_name, o.product_name, o.quantity, o.unit_price
from customers c
inner join orders o on c.customer_id = o.customer_id;

--left join
select c.customer_name, o.product_name, o.quantity, o.unit_price
from customers c
left join orders o on c.customer_id = o.customer_id;

--right join
select c.customer_name, o.product_name, o.quantity, o.unit_price
from customers c
right join orders o on c.customer_id = o.customer_id;

--full outer join
select c.customer_name, o.product_name, o.quantity, o.unit_price
from customers c
full outer join orders o on c.customer_id = o.customer_id;