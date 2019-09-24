// Object property shorthand 

const name = 'Andrew'; 
const userAge = 25; 

const user = {
    name     : name, 
    age      : userAge, 
    location : 'Perth'
}; 

console.log(user); 

// Object destructuring

const product = {
    label     : 'Red notebook', 
    price     : 3, 
    stock     : 201, 
    salePrice : undefined
}

//const label = product.label; 
//const stock = product.stock; 

//const {label: productLabel, price, stock, salePrice} = product; 
//console.log(`${productLabel}, ${price}, ${stock}, ${salePrice}`); 

const transaction = (type, { label, stock }) => {
    console.log(`${type}: ${label} ${stock}`); 
}

transaction('order', product); 