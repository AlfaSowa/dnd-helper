import { Modal } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCharactersQuery } from '../../../../containers/characters';
import { useCreateHeroMutation, useGetHeroesQuery } from '../../../../containers/heroes';
import { CharactersCardsList } from '../../../../entities/characters-cards';
import { CharacterType } from '../../../../entities/characters-cards/model';
import { MainWrapper } from '../../../../entities/main-wrapper';
import { RoomPageContent } from './content';

export const RoomPage = () => {
  const { id } = useParams();
  const { data: heroes = [] } = useGetHeroesQuery(id!);
  const { data: characters = [] } = useGetCharactersQuery();

  const [createHero, result] = useCreateHeroMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [characterId, setCharacterId] = useState('');

  const nps: CharacterType[] = [
    { id: '11', name: 'asdc asd' },
    { id: '12', name: 'jkhjkhf dfgdf df' },
  ];

  const handleHeroOk = () => {
    console.log('characterId', characterId);

    if (characterId) {
      createHero({ characterId, roomId: id! });
      setIsModalOpen(false);
    }
  };

  const handleNpcOk = () => {
    console.log(123);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <MainWrapper
        lContent={<CharactersCardsList list={heroes} setIsModalOpen={setIsModalOpen} />}
        mContent={<RoomPageContent />}
        rContent={<CharactersCardsList list={nps} setIsModalOpen={setIsModalOpen} />}
      />

      <Modal open={isModalOpen} onOk={handleHeroOk} onCancel={handleCancel}>
        {characters.map((character) => (
          <div onClick={() => setCharacterId(character.id)} key={character.id}>
            {character.name}
          </div>
        ))}
      </Modal>
    </>
  );
};
