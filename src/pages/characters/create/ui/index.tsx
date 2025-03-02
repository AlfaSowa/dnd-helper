import { Input } from 'antd';
import { CharactersStats } from '../../../../widgets/character-stats';

export const CharactersCreatePage = () => {
  return (
    <div>
      <div className='h-36 bg-amber-200 flex items-center px-6 gap-2'>
        <div className='size-30 bg-amber-700'>1</div>

        <div className='flex flex-col gap-2'>
          <Input placeholder='Имя' />
          <div className='flex gap-2'>
            <Input placeholder='Раса' />
            <Input placeholder='Класс' />
          </div>
        </div>

        <div className='flex-1 flex gap-2 items-center'>
          <div className='size-24 bg-amber-700 flex items-center justify-center text-6xl'>12</div>

          <div className='flex flex-col items-center'>
            <div>30</div>
            <div>скорость</div>
          </div>

          <div className='flex flex-col items-center'>
            <div>9</div>
            <div>жизни</div>
          </div>
        </div>
      </div>

      <div className='px-6 py-2'>
        <CharactersStats />
      </div>

      <div className='px-6 py-2'>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </div>
    </div>
  );
};
