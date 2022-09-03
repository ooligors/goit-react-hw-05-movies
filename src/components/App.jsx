import { Menu } from './menu/menu';
import { UserRoutes } from 'UserRoutes';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: ' flex-start',
        // alignItems: 'center',
        padding: '20px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div 
    > 
        <Menu />
        <UserRoutes />
      </div>
    </div>
  );
};
