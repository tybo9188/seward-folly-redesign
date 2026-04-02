import styles from './Comments.module.css';

const CommentForm = () => (
  <div className={styles.commentForm}>
    <h3 className={styles.commentFormHeading}>Leave a Comment</h3>
    <textarea
      className={styles.commentFormTextarea}
      placeholder="Share your thoughts..."
      aria-label="Comment text"
    />
    <button className={styles.commentFormSubmit} type="button">
      Post Comment
    </button>
  </div>
);

export default CommentForm;
