import s from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.friend_list}>
            {friends.map(friend => {
                return (<li key={friend.id} className={s.friend_list_item}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>)
            })}
        </ul>
    )
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;