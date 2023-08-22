let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let array2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let array3 = [];

for(var cont1 = 0; cont1 < array1.length; cont1++) {
    for(var cont2 = 0; cont2 < array2.length; cont2++){
        if(array1[cont1] == array2[cont2]) {
            array3.push(array1[cont1]);
        }
    }
}

console.log(array3);