import AuthLayout from 'components/layout/AuthLayout';
import ChatLayout from 'components/layout/ChatLayout';
import PrivateRoute from 'components/routes/PrivateRoute';
import Login from 'pages/Login';
import Chat from 'pages/Chat';
import ListenerDetail from 'pages/ListenerDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUp from 'pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='' element={<Home />} />
            <Route path='/listeners/:id' element={<ListenerDetail />} />
          </Route>
          <Route path='/' element={<PrivateRoute />}>
            <Route
              path='/chat'
              element={
                <ChatLayout>
                  <Chat />
                </ChatLayout>
              }
            />
          </Route>
          <Route path='/auth' element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
