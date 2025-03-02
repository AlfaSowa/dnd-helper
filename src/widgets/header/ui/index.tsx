import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../app/routes';

export const Header = () => {
  return (
    <div className='flex gap-4'>
      <Link to={RoutePaths.root.onNavigate()}>Главная странца</Link>
      <Link to={RoutePaths.characters.onNavigate()}>Список персонажей</Link>
      <Link to={RoutePaths.characters.create.onNavigate()}>Создать персонажа</Link>
    </div>
  );
};
