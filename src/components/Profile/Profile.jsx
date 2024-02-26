import style from "../Profile/Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={style.container}>
      <div>
        <img
          className={style.image}
          width={200}
          src={avatar}
          alt="User avatar"
        />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.list}>
        <li className={style.item}>
          <span className={style.text}>Followers </span>
          <span className={style.numbers}>{stats.followers}</span>
        </li>
        <li className={style.item}>
          <span className={style.text}>Views </span>
          <span className={style.numbers}>{stats.views}</span>
        </li>
        <li className={style.item}>
          <span className={style.text}>Likes </span>
          <span className={style.numbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
