import { APP_ROUTES } from 'app/constant';
import AuthLayout from 'components/layout/AuthLayout';
import ChatLayout from 'components/layout/ChatLayout';
import AuthRoute from 'components/routes/AuthRoute';
import PrivateRoute from 'components/routes/PrivateRoute';
import AboutUs from 'pages/AboutUs';
import Chat from 'pages/Chat';
import ListenerDetail from 'pages/ListenerDetail';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/listeners/:id' element={<ListenerDetail />} />
          </Route>
          <Route element={<PrivateRoute redirectPath={APP_ROUTES.login} />}>
            <Route path='/chat' element={<ChatLayout />}>
              <Route path='' element={<Chat />} />
              <Route path=':uid' element={<Chat />} />
            </Route>
          </Route>
          <Route element={<AuthRoute />}>
            <Route path='/auth' element={<AuthLayout redirectPath={APP_ROUTES.home} />}>
              <Route path='login' element={<Login />} />
              <Route path='sign-up' element={<SignUp />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
