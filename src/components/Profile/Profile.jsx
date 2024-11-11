import s from "./Profile.module.css";

const Profile = (user) => {
    const { name, tag, location, image, stats } = user;
    const { followers, views, likes } = stats;

    return (
        <div className={s.profile}>
            <div className={s.profile_info_section}>
                <img className={s.profile_photo} src={image} alt="User avatar" />
                <p className={s.profile_name}>{name}</p>
                <p className={s.profile_tag}>@{tag}</p>
                <p className={s.profile_location}>{location}</p>
            </div>

            <ul className={s.profile_list}>
                <li className={s.profile_list_item}>
                    <span>Followers</span>
                    <span className={s.stats_number}>{followers}</span>
                </li>
                <li className={s.profile_list_item}>
                    <span>Views</span>
                    <span className={s.stats_number}>{views}</span>
                </li>
                <li className={s.profile_list_item}>
                    <span>Likes</span>
                    <span className={s.stats_number}>{likes}</span>
                </li>
            </ul>
        </div>
    )
};

export default Profile;