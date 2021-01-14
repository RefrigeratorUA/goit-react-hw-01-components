import PropTypes from 'prop-types';
import styles from '../ProfileStats/ProfileStats.module.css';

function ProfileStats({ followers = 0, likes = 0, views = 0 }) {
  return (
    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  );
}

ProfileStats.propTypes = {
  followers: PropTypes.number,
  likes: PropTypes.number,
  views: PropTypes.number,
};

export default ProfileStats;
