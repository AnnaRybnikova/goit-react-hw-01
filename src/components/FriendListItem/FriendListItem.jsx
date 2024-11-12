import s from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({avatar, name, isOnline}) => {

    return (
        <div>
            <img className={s.friend_avatar} src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            {isOnline
                ? (<p className={clsx(s.friend_status, s.is_online)}>Online</p>)
                : (<p className={clsx(s.friend_status, s.is_offline)}>Offline</p>)}
        </div>
    )
};

export default FriendListItem;