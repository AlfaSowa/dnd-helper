import { Ability } from '../../../shared/api/data-contracts';

interface CharacterStatsBoxProps {
  ability: Ability;
}

export const CharacterStatsBox = ({ ability }: CharacterStatsBoxProps) => {
  return (
    <div className='flex items-center justify-between bg-amber-200 px-2'>
      <div>{ability.name}</div>
      <div className='text-2xl'>10</div>
    </div>
  );
};
