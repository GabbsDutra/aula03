
import React from "react";
import styles from "./MeuComponente.module.css"; 

function MeuComponente() {
    return (
        <div>
            <h1 className={styles.titulo}>Título do Componente</h1>
            <p className={styles.descricao}>Descrição do componente</p>
        </div>
    );
}

export default MeuComponente;
