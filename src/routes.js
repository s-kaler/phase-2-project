import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import BlogPost from './components/BlogPost';

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
      }
    ]
  }
]

export default routes;