import styles from "./styles.module.scss"

export const Card = ({ noteList, removeNote }) => {



  return (
    <aside className={styles.aside}>
      <p>Resumo financeiro</p>
      {noteList.length === 0 ? (
        <h1>Você ainda não possui nenhum lançamento</h1>
      ) : (
        <ul>

          {noteList.map((note) => {
            const valorFormatado = new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(note.valor)


            return (
              <li key={note.id} className={note.entrada === "Entrada" ? styles.entrada : ""}>
                <div>
                  <h3>{note.name}</h3>
                  <p>{note.entrada}</p>
                </div>
                <div className={styles["div-button"]}>
                  <p>{valorFormatado}</p>
                  <button onClick={() => removeNote(note.id)}>Excluir</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </aside>
  );
};


