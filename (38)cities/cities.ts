//Cities: Write a function called describe_city() that accepts the name of a city and its country.
//The function should print a simple sentence, such as Karachi is in Pakistan.
//. Call your function for three different cities, at least one of which is not in the default country.

// discrib a function

function describe_city(city: string, country: string = " pakistan"){

    console.log(`${city}is in ${country}`);
}

//calling the function

describe_city("Karachi");

describe_city("Lahor");

describe_city("Riyadh" , "Saudi Arabia")