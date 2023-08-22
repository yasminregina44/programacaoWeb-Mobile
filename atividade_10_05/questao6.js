function emprestimo(salario, prestacao) {
    if (prestacao > (salario * 0.2)) {
        return "Empréstimo não pode ser concedido."
    } else {
        return "Empréstimo pode ser concedido."
    }
}

console.log(emprestimo(3000, 600));