import { CharacterStatsBox } from '../../../features/character-stats-box';
import { Characteristic } from '../../../shared/api/data-contracts';

type ItemType = {
  value: number;
  title: string;
};

interface CharacterStatsGridProps {
  characteristic: Characteristic;
}

export const CharacterStatsBlock = ({ characteristic }: CharacterStatsGridProps) => {
  return (
    <div>
      <div className='flex items-center justify-between bg-amber-600 px-2 py-1'>
        <span className='text-2xl'>{characteristic.name}</span>
        <div className='text-2xl'>10</div>
      </div>

      <div className='flex flex-col gap-2 bg-amber-400 p-2'>
        {characteristic.abilities.map((ability) => (
          <CharacterStatsBox ability={ability} />
        ))}
      </div>
    </div>
  );
};
