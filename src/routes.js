import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import BlogPost from './components/BlogPost';
import Profile from './components/Profile';

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
        path: 'profile',
        element: <Profile />
      }
    ]
  }
]

export default routes;