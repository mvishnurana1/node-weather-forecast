setTimeout(() => {
    console.log(`Two seconds are up!!!`); 
}, 2000); 

const names = ['Jen', 'Jeff', 'Jess', 'Kamal'];

const shortNames = names.filter((name) => {
    return  name.length <= 4; 
}); 

const geocode = (address, callback) => {
    setTimeout( () => {
     
        const data = {
            latitude  : 0, 
            longitude : 0
        }; 

        callback(data); 

    }, 2000); 

}

geocode('Ambala', (data) => {
    console.log(data); 
}); 

 
//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b); 
    }, 2000); 
}

add(1, 4, (sum) => {
    console.log(`The sum is ${sum}`); 
}); 


const subtract = (x, y, callback) => {
    setTimeout(() => {
        callback(y - x); 
    }, 2000); 
}

subtract(2, 19, (sub) => {
    console.log(`After operation : ${sub}`); 
}); 

const multiple = (x, y, callback) => {
    setTimeout( () => {
        callback(x * y); 
    }, 3000); 
}

multiple(90, 3, (product) => {
    console.log(`${product}`); 
}); 