import PropTypes from 'prop-types';
import styles from '../FriendListItem/FriendListItem.module.css';
import defaultImg from '../FriendListItem/default.svg';

function FriendListItem({ avatar = defaultImg, name, isOnline = false }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img className={styles.avatar} src={avatar} alt={`Аватар ${name}`} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
