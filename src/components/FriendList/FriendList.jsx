import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css'


export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
        <li className={css.item} key = {friend.id}>
        <span className={friend.isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};
