import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import './styles/NavigationLinks.scss';

export const NavigationLinks = () => {
  const { t } = useTranslation();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn('navigation__link', 'text-decoration-none', {
                'is-active': isActive,
              })
            }
          >
            {t(`navigation.orders`)}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              cn('navigation__link', 'text-decoration-none', {
                'is-active': isActive,
              })
            }
          >
            {t(`navigation.products`)}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/charts"
            className={({ isActive }) =>
              cn('navigation__link', 'text-decoration-none', {
                'is-active': isActive,
              })
            }
          >
            {t(`navigation.charts`)}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
