import { useState } from "react";
import styles from "./styles.module.scss"

export const Form = ({ addNote }) => {
  const [name, setName] = useState("");
  const [valor, setValor] = useState("");
  const [entrada, setEntrada] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const newNote = { name, valor, entrada, id: crypto.randomUUID() };
    addNote(newNote);
    setName("");
    setValor("");
    setEntrada("");
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <fieldset>
        <div >
          <label htmlFor="name" className={styles.label}>Descrição</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite aqui sua descrição"
            required
          />
          <span>Ex:Compra de roupas</span>
        </div>
        <div>
          <label htmlFor="valor">Valor</label>
          <input
            type="text"
            id="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="1"
            required
          />
        </div>
        <div>
          <label htmlFor="entrada">Tipo de valor</label>
          <select
            id="entrada"
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>

      </fieldset>
      <button type="submit">Adicionar</button>
    </form>
  );
};