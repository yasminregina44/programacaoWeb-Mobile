for (let numero = 1; numero < 101; numero++) {
    if (numero % 3 == 0 && numero % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (numero % 5 === 0) {
        console.log("Buzz");
    }
    else if (numero % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(numero);
    }
}