import styles from "./styles.module.scss"

export const Total = ({ noteList }) => {

    const profitValue = noteList.filter(lista => lista.entrada === "Entrada")
    const totalProfitValue = profitValue.reduce((preco, precoFinal) => {
        return parseFloat(preco) + parseFloat(precoFinal.valor)
    }, 0)


    const expenseValue = noteList.filter(lista => lista.entrada === "Despesa")
    const totalExpense = expenseValue.reduce((preco, precoFinal) => {
        return parseFloat(preco) + parseFloat(precoFinal.valor)
    }, 0)

    const totalValue = totalProfitValue - totalExpense



    const formattedValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(totalValue)
  

    return (
        <div className={styles.container}>
            <div>
                <h1>Valor Total:</h1>
                <p>{formattedValue}</p>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    )
}
