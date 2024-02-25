import style from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={style.name}>{name}</p>
      <p>
        {isOnline ? (
          <span className={style.green}>IsOnLIne</span>
        ) : (
          <span className={style.red}>OffLine</span>
        )}
      </p>
    </div>
  );
};

export default FriendListItem;
