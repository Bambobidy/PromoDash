import Login from '../Containers/LoginContainer'
import Dashboard from '../Containers/DashboardContainer'
import Admin from '../Containers/AdminContainer'

const routes =[
  {
    title: 'Login',
    path: '/',
    component: Login,
    exact: true
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    exact: true
  },
  {
    title: 'Admin',
    path: '/admin',
    component: Admin,
    exact: true
  }
]

export default routes