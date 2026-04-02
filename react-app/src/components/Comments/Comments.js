import { useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import styles from './Comments.module.css';

const Comments = ({ comments = [] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={`${styles.comments} ${expanded ? styles.commentsExpanded : ''}`}>
      <button
        className={styles.toggle}
        onClick={() => setExpanded((v) => !v)}
      >
        Comments ({comments.length})
        <span className={styles.chevron}>&#9662;</span>
      </button>

      <div className={styles.body}>
        {comments.map((c) => (
          <Comment
            key={c.id}
            avatar={c.avatar}
            author={c.author}
            date={c.date}
            body={c.body}
          />
        ))}
        <CommentForm />
      </div>
    </section>
  );
};

export default Comments;
