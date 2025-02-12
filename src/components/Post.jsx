import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Muito bom hein cara!']);
  const [newComment, setNewComment] = useState('');
  
  function handleCreateNewPost(event) {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleCreateNewComment(event) {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function deleteComment(commentToDelete) {
    setComments(comments.filter(comment => comment !== commentToDelete));
  }
  
  function handleInvalidNewComment(event) {
    event.target.setCustomValidity('Por favor, preencha o campo de comentário.');
  }

  const publishedAtFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { 
    locale: ptBR 
  });
  const publishedTimeDistance = formatDistanceToNow(publishedAt, { 
      addSuffix: true,
      locale: ptBR 
  });
  
  const isEmptyNewComment = newComment.length === 0;
  
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
          onInvalid={handleInvalidNewComment}
          value={newComment}
          required
        />
        <footer>
          <button type="submit" disabled={isEmptyNewComment}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        ))}
      </div>
    </article>
  )
}