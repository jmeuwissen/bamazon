const mysql = require('mysql');
const inquirer = require('inquirer')

const SCHEMA = {
    ID: 'id',
    PRODUCT_NAME: 'product_name',
    DEPARTMENT_NAME: 'department_name',
    PRICE: 'price',
    STOCK_QUANTITY: 'stock_quantity'
}

const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: 'root',
    database: 'bamazon'
});


connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId + '\n');
    showItems();
});

function showItems() {
    let itemsString = "";
    console.log('showing all products');

    console.log(`
------------------ITEMS-------------------    
          `)
    connection.query(`SELECT ${SCHEMA.ID}, ${SCHEMA.PRODUCT_NAME},
                        ${SCHEMA.PRICE} FROM products`, function (err, res) {
        if (err) throw err;
        res.forEach(RDP => {
            itemsString += `
Name: ${RDP.product_name}   Product ID: ${RDP.id}  Price: $${RDP.price}
            `
        });

        console.log(itemsString);
        selectItem();

    })
}

function selectItem() {
    inquirer.prompt(
        [{
                name: 'item',
                message: 'What would you like to buy?',
                type: 'input'
            },
            {
                name: 'quantity',
                message: 'How many?',
                type: 'input'
            }
        ]
    ).then(function (res) {
        // if (err) throw err;
        checkStock(res.item, parseInt(res.quantity));

    })
}

function checkStock(item, quantity) {
    // console.log('checking stock for ' + item)
    connection.query('SELECT stock_quantity, price FROM products WHERE ?', {
        product_name: item
    }, function (err, res) {
        if (err) throw err;
        const currStock = res[0][SCHEMA.STOCK_QUANTITY]
        // console.log('removing ' + quantity + ' from ' + currStock +
            // ' ' + item + 's remaining')
        if (currStock > parseInt(quantity)) {
            updateStock(item, quantity, currStock, res[0][SCHEMA.PRICE]);
        } else {
            console.log('Insufficient Stock!');
            connection.end()
        }

        // console.log(res);

    })
}

function updateStock(item, quantity, currStock, price) {
    // console.log('updating stock for ' + item);
    const newStock = currStock - quantity;
    connection.query("UPDATE products SET ? WHERE ?",
        [{
                stock_quantity: newStock
            },
            {
                product_name: item
            }
        ],
        function (err) {
            if (err) throw err;
            console.log('purchasing ' + quantity + ' ' + item + 
            ' for a total of $' + quantity*price);
            connection.end();
        })
}