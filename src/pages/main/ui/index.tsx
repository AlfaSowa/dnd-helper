import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../app/routes';
import { useGetCharactersQuery } from '../../../containers/characters';
import { useGetRoomsQuery } from '../../../containers/rooms';
import { EntitiesGrid, EntitiesGridCard } from '../../../entities/grid';
import { Character, Room } from '../../../shared/api/data-contracts';

export const MainPage = () => {
  const { data: characters = [] } = useGetCharactersQuery();
  const { data: rooms = [] } = useGetRoomsQuery();

  return (
    <>
      <Link to={RoutePaths.characters.onNavigate()}>Список персонажей</Link>
      <Link to={RoutePaths.characters.create.onNavigate()}>Создать персонажа</Link>

      <div className='flex flex-col gap-4 px-2'>
        <EntitiesGrid<Character>
          items={characters}
          render={(character) => {
            return (
              <EntitiesGridCard to={RoutePaths.characters.item.onNavigate(character.id)} key={character.id}>
                <div>{character.name}</div>
              </EntitiesGridCard>
            );
          }}
        />

        <EntitiesGrid<Room>
          items={rooms}
          render={(room) => {
            return (
              <EntitiesGridCard to={RoutePaths.rooms.item.onNavigate(room.id)} key={room.id}>
                <div>{room.name}</div>
              </EntitiesGridCard>
            );
          }}
        />
      </div>
    </>
  );
};
