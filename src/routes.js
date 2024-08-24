import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import BlogPost from './components/BlogPost';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import NewBlog from './components/NewBlog'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: "/blogs/:id",
        element: <BlogPost />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'profile/:id',
        element: <Profile />
      },
      {
        path: 'newblog',
        element: <NewBlog />
      }
    ]
  }
]

export default routes;