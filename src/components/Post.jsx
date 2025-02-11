import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://i.pravatar.cc/300' />
          <div className={styles.authorInfo}>
            <strong>Ailton Oliveira</strong>
            <span>Desenvolvedor Front-end</span>
          </div>
        </div>
        <time alt="11 de Fevereiro às 09:36h" datetime="2025-02-11 09:36:00">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  )
}