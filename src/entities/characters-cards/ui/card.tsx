import { CharacterType } from '../model';

interface CharacterCardProps {
  character: CharacterType;
}

export const CharactersCardsItem = ({ character }: CharacterCardProps) => {
  return (
    <div className='border border-amber-100 rounded p-2 cursor-pointer hover:bg-amber-400'>
      <div>{character.name}</div>
    </div>
  );
};
