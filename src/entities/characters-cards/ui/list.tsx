import { CharacterType } from '../model';
import { CharactersCardsItem } from './card';

interface CharactersCardsProps {
  list: CharacterType[];
}

export const CharactersCardsList = ({ list }: CharactersCardsProps) => {
  return (
    <div className='flex flex-col gap-2 p-2'>
      {list.map((e) => (
        <CharactersCardsItem character={e} />
      ))}
    </div>
  );
};
