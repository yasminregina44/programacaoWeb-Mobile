let nota1 = 7, nota2 = 7, nota3 = 0, media;

media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Aprovado");
} else if (media < 7 && media >= 5) {
    console.log("Em exame");
} else {
    console.log("Reprovado");
}