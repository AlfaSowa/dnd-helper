import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../app/routes';
import { useGetCharactersQuery } from '../../../containers/characters';
import { useGetRoomsQuery } from '../../../containers/rooms';

export const MainPage = () => {
  const { data: characters } = useGetCharactersQuery();
  const { data: rooms } = useGetRoomsQuery();

  console.log('data', characters);

  return (
    <div>
      <div>MainPage</div>

      <Link to={RoutePaths.characters.onNavigate()}>Список персонажей</Link>
      <Link to={RoutePaths.characters.create.onNavigate()}>Создать персонажа</Link>

      <div className='flex gap-8'>
        <div>
          {characters?.map((character) => (
            <Link to={RoutePaths.characters.item.onNavigate(character.id)} key={character.id}>
              <div>{character.name}</div>
              <div>{character.id}</div>
            </Link>
          ))}
        </div>

        <div>
          {rooms?.map((room) => (
            <Link to={RoutePaths.rooms.item.onNavigate(room.id)} key={room.id}>
              <div>{room.name}</div>
              <div>{room.id}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
