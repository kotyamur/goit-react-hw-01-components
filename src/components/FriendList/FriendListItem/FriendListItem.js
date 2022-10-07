import css from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <li className={css.item} key={id}>
      <span className={clsx(css.status, { [css.isOnline]: isOnline })}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
