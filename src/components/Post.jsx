import { format, formatDistance, formatDistanceToNow, set } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Muito bom hein cara!']);
  const [newComment, setNewComment] = useState('');
  
  function handleCreateNewPost() {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleCreateNewComment() {
    setNewComment(event.target.value);
  }
  
  const publishedAtFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { 
    locale: ptBR 
  });
  const publishedTimeDistance = formatDistanceToNow(publishedAt, { 
      addSuffix: true,
      locale: ptBR 
  });

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time 
          title={publishedAtFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedTimeDistance}
        </time>
      </header>
      
      <div className={styles.content}>
        {
          content.map((item, index) => {
            if (item.type === 'paragraph') {
              return <p key={index}>{item.content}</p>
            } else if (item.type === 'link') {
              return <a key={index} href='#'>{item.content}</a>
            }
          })
        }
      </div>
      
      <form onSubmit={handleCreateNewPost} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentário..."
          onChange={handleCreateNewComment}
          value={newComment}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment key={comment} content={comment} />
        ))}
      </div>
    </article>
  )
}