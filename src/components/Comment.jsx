import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://i.pravatar.cc/300" alt="Avatar do usuário" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ailton Oliveira</strong>
                            <time alt="11 de Fevereiro às 09:36h" datetime="2025-02-11 09:36:00">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Aiton, parabéns!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}