import css from './menu.module.css';
import { NavLink } from 'react-router-dom';
import { items } from './items';

const getClassname = ({ isActive }) => {
  console.log(isActive);
  const classname = isActive ? `${css.link} ${css.active}` : `${css.link}`;
  return classname;
};
export const Menu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getClassname} to={to}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={css.wrapper}>{elements}</ul>;
};
