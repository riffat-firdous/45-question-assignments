// 3 NAME CASE

let personName: string= "Riffat Firdous"
 
console.log("Lower Case:",personName.toLocaleLowerCase());

//Upper Case

console.log("Upper Case:",personName.toLocaleUpperCase());

//Title Case

console.log("Title Case:",personName.replace(/\bw/g, function(c){return c.toLocaleUpperCase();}));