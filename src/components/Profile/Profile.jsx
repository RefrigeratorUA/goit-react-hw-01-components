import PropTypes from 'prop-types';
import styles from '../Profile/Profile.module.css';
import ProfileStats from '../ProfileStats/ProfileStats';
import defaultImg from '../Profile/default.svg';

function Profile({ name, tag, location, avatar = defaultImg, stats = {} }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={`Аватар ${name}`} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{`@${tag}`}</p>
        <p className={styles.location}>{location}</p>
        <ProfileStats followers={stats.followers} views={stats.views} likes={stats.likes} />
      </div>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
