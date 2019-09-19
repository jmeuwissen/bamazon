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

Name: ${RDP.product_name},   Product ID: ${RDP.id}  Price: $${RDP.price}
            `
        });
        //IS THIS CHEATING? IT LOOKS SO NICE
        console.table(res);
        console.log(itemsString);
        // purchase(res);
        connection.end();
    })
}

function purchase() {
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
    ).then(function (err, res) {
        if (err) throw err;


    })
}