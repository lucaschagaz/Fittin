import {Home, Insight, Profile, WorkOuts, YourDeit} from '../../Pages';

const screens = [
  {
    screen: Home,
    screenName: 'Home',
    page: 'Pagina Inical',
    name: 'house-chimney',
  },
  {
    screen: WorkOuts,
    screenName: 'Treinos',
    page: 'Meus Treinos',
    name: 'dumbbell',
  },
  {
    screen: YourDeit,
    screenName: 'Dieta',
    page: 'Minha Dieta',
    name: 'bowl-food',
  },
  {
    screen: Insight,
    screenName: 'Insights',
    page: 'Estatisticas',
    name: 'chart-pie',
  },
  {screen: Profile, screenName: 'Perfil', page: 'Minha conta', name: 'user'},
];

export default screens;
