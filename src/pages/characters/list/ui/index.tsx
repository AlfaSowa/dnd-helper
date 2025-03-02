import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../../app/routes';
import { useGetCharactersQuery } from '../../../../containers/characters';

export const CharactersPage = () => {
  const { data: characters } = useGetCharactersQuery();

  return (
    <div>
      <div>CharactersPage</div>

      {characters?.map((character) => (
        <Link to={RoutePaths.characters.item.onNavigate(character.id)} key={character.id}>
          <div>{character.name}</div>
          <div>{character.id}</div>
        </Link>
      ))}
    </div>
  );
};
