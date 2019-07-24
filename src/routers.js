import Loadable from 'react-loadable';
import Home from './view/home';
import Loading from './components/loading';

export let routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todo',
    component: Loadable({
      loader: () => import('./view/todoList'),
      loading: Loading
    })
  }
];
