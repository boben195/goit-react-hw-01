import FriendListItem from "./FriendListItem";

import style from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map((item) => (
        <li key={item.id}>
          <FriendListItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
