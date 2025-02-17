import { Link } from 'react-router-dom';

export const RoomsListPage = () => {
  const rooms = ['1', '2', '3'];
  return (
    <div>
      <div>RoomsListPage</div>

      <div className='flex gap-2'>
        {rooms.map((room) => (
          <Link to={room}>
            <div className='px-4 bg-amber-800'>{room}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
