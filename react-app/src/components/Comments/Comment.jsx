import styles from './Comments.module.css';

const Comment = ({ avatar, author, date, body }) => (
  <div className={styles.comment}>
    <div className={styles.commentHeader}>
      <div className={styles.commentAvatar}>{avatar}</div>
      <div>
        <div className={styles.commentAuthor}>{author}</div>
        <div className={styles.commentDate}>{date}</div>
      </div>
    </div>
    <div className={styles.commentBody}>{body}</div>
    <a href="#" className={styles.commentReply}>
      Reply
    </a>
  </div>
);

export default Comment;
