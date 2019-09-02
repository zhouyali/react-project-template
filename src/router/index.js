import Loadable from 'react-loadable'
import Home from '../view/home'
import Guide from '../view/guide'
import Detail from '../view/detail'
import Loading from '../components/loading'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todo',
    component: Loadable({
      loader: () => import('../view/todoList'),
      loading: Loading
    })
  },
  {
    path: '/guide',
    component: Guide
  },
  {
    path: '/detail',
    component: Detail
  }
]
