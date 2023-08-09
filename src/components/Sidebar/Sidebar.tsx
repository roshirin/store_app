import { UserAvatar, NavigationLinks, LanguageSwitcher } from '.';
import './styles/Sidebar.scss';

export const Sidebar = () => {
  return (
    <div className="side-panel">
      <UserAvatar />

      <div className="side-panel__navigation">
        <NavigationLinks />
      </div>
      <LanguageSwitcher />
    </div>
  );
};
