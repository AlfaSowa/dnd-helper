import { CharactersCardsList } from '../../../entities/characters-cards';
import { CharacterType } from '../../../entities/characters-cards/model';
import { MainWrapper } from '../../../entities/main-wrapper';

export const MainPage = () => {
  const heroes: CharacterType[] = [
    { id: '1', name: 'sdfdsf' },
    { id: '2', name: 'fgdfg' },
    { id: '3', name: 'sdfasdasd asddsf' },
    { id: '4', name: 'sdfsdas asddsf' },
  ];
  const nps: CharacterType[] = [
    { id: '11', name: 'asdc asd' },
    { id: '12', name: 'jkhjkhf dfgdf df' },
  ];

  return (
    <MainWrapper
      lContent={<CharactersCardsList list={heroes} />}
      mContent={
        <div>
          <div>123123</div>
          <div>123123</div>
          <div>123123</div>
          <div>123123</div>
        </div>
      }
      rContent={<CharactersCardsList list={nps} />}
    />
  );
};
