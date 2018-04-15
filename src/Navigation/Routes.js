import Login from '../Containers/LoginContainer'
import Dashboard from '../Containers/DashboardContainer'
import Admin from '../Containers/AdminContainer'
import Product from '../Containers/ProductContainer'

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
  },
  {
    title: 'Product',
    path: '/product',
    component: Product,
    exact: true
  }
]

export default routes