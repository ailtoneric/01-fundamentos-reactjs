import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
            
            <div className={styles.profile}>
                <img src='https://i.pravatar.cc/300' />
                <strong>Ailton Oliveira</strong>
                <span>Desenvolvedor Front-end</span>
            </div>

            <footer>
                <a href='#'>Editar seu perfil</a>
            </footer>
        </aside>
    )
}