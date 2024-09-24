import { useState } from "react";
import { Form } from "../FinanceForm";
import { Card } from "../FinanceCard";
import styles from "./styles.module.scss"
import { Total } from "../Total";

export const FinanceMenager = () => {
    const [noteList, setNoteList] = useState([]);
   
    


    const addNote = (note) => {
        setNoteList([...noteList, note]); // Atualiza o estado com a nova nota
    };
    const removeNote = (removeId) => {
        const newNoteList = noteList.filter( note => note.id !== removeId)
        setNoteList(newNoteList)
    }

  return(
    <section className={styles.section}>
    
     <div >
         <Form addNote={addNote}/> 
         <Total noteList={noteList}/>
    
    </div>
    <div class={styles["segunda-div"]}>
          <Card noteList={noteList} removeNote={removeNote} />
    </div>
    
    </section>
   
  )
}