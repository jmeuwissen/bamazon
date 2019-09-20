# [bamazon](https://github.com/jmeuwissen/bamazon)
Mock "amazon" CLI app using Node and MySQL



## Purpose

The purpose of this app is to allow a "customer" to purchase an item from our database via CLI

## Usage



## Technology

  * [MySQL](https://www.npmjs.com/package/mysql)

## Implementation

We got our feet wet with callback hell! Each interaction with the database results in another promise layer. Five layers of promises in total, if you count the initial connection. One layer was eliminated by retrieving item price in the checkStock function and passing that value through successive functions as a paramete; ultimately it was used to calculate the total cost of the customer's purchase.
