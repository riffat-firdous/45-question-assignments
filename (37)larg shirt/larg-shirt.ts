//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
//that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.

//Making a function

function make_shirt (size: string = "Large", printMessage: string ="I love typeScript"){

    console.log(`creationg ${size} shirt with the ${printMessage} print on shirt`)
}
// calling a function

make_shirt();

//calling a function now with medium size and default message

make_shirt("Medium")

//calling a function now with small size and also different print message

make_shirt("small", "I love javaScript")
