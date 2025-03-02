import { createBrowserRouter } from 'react-router-dom';
import { CharactersCreatePage, CharactersItemPage, CharactersPage } from '../pages/characters';
import { MainPage } from '../pages/main';
import { RoomPage, RoomsListPage } from '../pages/rooms';
import { Layout } from '../widgets/layout';
import { PageWrapper } from '../widgets/page-wrapper';

export class RoutePaths {
  static root = {
    path: '/',
    onNavigate: () => '/',
  };

  static rooms = {
    path: 'rooms',
    onNavigate: () => '/rooms',
    item: {
      path: ':id',
      onNavigate: (id: string) => `/rooms/${id}`,
    },
  };

  static characters = {
    path: 'characters',
    onNavigate: () => '/characters',
    item: {
      path: ':id',
      onNavigate: (id: string) => `/characters/${id}`,
    },
    create: {
      path: 'create',
      onNavigate: () => '/characters/create',
    },
  };
}

export const browserRouter = createBrowserRouter([
  {
    id: 'root',
    path: RoutePaths.root.path,
    Component: Layout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
      {
        path: RoutePaths.rooms.path,
        children: [
          {
            index: true,
            Component: RoomsListPage,
          },
          {
            path: RoutePaths.rooms.item.path,
            Component: RoomPage,
          },
        ],
      },
      {
        path: RoutePaths.characters.path,
        Component: PageWrapper,
        children: [
          {
            index: true,
            Component: CharactersPage,
          },
          {
            path: RoutePaths.characters.item.path,
            Component: CharactersItemPage,
          },
          {
            path: RoutePaths.characters.create.path,
            Component: CharactersCreatePage,
          },
        ],
      },
    ],
  },
]);
