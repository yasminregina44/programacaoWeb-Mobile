let bubble = [100, 90, 23, 7546, 902, 53, -325, 0, -3, 9, 99999, -9]

function bubbleSort() {
    for (let i = 0; i < bubble.length; i++) {
        if (bubble[i] > bubble[i + 1]) {
            let v1 = bubble[i]
            let v2 = bubble[i + 1]
            bubble[i] = v2
            bubble[i + 1] = v1
        }
    }
}

for (var contador = 0; contador < bubble.length; contador++) {
    bubbleSort();
}

console.log(bubble)