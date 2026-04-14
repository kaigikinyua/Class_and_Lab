import Index from './pages/index'
import Login from './pages/login'
import Signup from './pages/signup'
import UserPage from './pages/user_page.vue'

export default[
    {'path':'/',component:Index},
    {'path':'/login',component:Login},
    {'path':'/signup',component:Signup},
    {'path':'/user_page','component':UserPage}
]