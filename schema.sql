DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('skateboards', 'sports', 20, 100),
        ('frisbees', 'sports', 10, 400),
        ('baseballs', 'sports', 103, 42),
        ('soccer balls', 'sports', 1, 55),
        ('dishwashers', 'appliances', 1000, 10),
        ('fridges', 'appliances', 1500, 8),
        ('blenders', 'appliances', 200, 30),
        ('jeans', 'clothes', 20, 300),
        ('baseball hats', 'clothes', 15, 150),
        ('hooded sweatshirts', 'clothes', 30, 120);

