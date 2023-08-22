function converterMorse(codigo) {
    const morseParaLetras = {
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z"
    }

    const letras = codigo
        .trim()
        .split(" ")
        .map(caracter => morseParaLetras[caracter] || "?")
        .join("");

    return letras;
}

console.log(converterMorse(".- -... -.-."));
console.log(converterMorse("--. --- --- -.. -- --- .-. -. .. -. --."));

