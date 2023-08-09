import './styles/UserAvatar.scss';

export const UserAvatar = () => {
  return (
    <div className="avatar">
      <img src="src/images/avatar.jpg" className="avatar__image" />
      <div className="avatar__settings-button">
        <i className="fa-solid fa-gear"></i>
      </div>
    </div>
  );
};
