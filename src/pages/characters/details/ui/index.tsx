import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../../app/routes';

export const CharactersItemPage = () => {
  return (
    <div>
      <div>CharactersItemPage</div>

      <Link to={RoutePaths.root.onNavigate()}>Главная странца</Link>
      <Link to={RoutePaths.characters.onNavigate()}>Список персонажа</Link>
    </div>
  );
};
